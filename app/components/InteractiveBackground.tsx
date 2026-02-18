"use client";
import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl")!;
    if (!gl) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

   const fragmentShaderSource = `
  precision mediump float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  float noise(vec2 p) {
    return sin(p.x) * sin(p.y);
  }

  void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(st, mouse);

    float n = noise(st * 6.0 + u_time * 0.2);
    float wave = sin((st.x + st.y + u_time) * 2.5);

    // ⚫ 85% Deep Black Base
    vec3 color = vec3(0.01, 0.01, 0.015);

    // 🌫 5% Soft Grey Layer
    color += 0.05 * vec3(
      0.3 + 0.3 * sin(u_time + st.x * 1.5),
      0.3,
      0.3
    );

    // 🔴 10% Deep Red Waves
    color += 0.25 * vec3(
      0.6 + 0.4 * sin(u_time + st.x * 3.0),
      0.05,
      0.05
    ) * wave;

    // Subtle texture
    color += n * 0.05;

    // Very subtle red mouse glow
    color += smoothstep(0.25, 0.0, dist) * vec3(0.3, 0.05, 0.05);

    gl_FragColor = vec4(color, 1.0);
  }
`;





    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");

    let mouseX = 0;
    let mouseY = 0;
    let startTime = Date.now();

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = canvas.height - e.clientY;
    });

    const render = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, currentTime);
      gl.uniform2f(uMouse, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
  <canvas
    ref={canvasRef}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none",
    }}
  />
);
}
