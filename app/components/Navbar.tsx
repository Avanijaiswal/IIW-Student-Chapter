export default function Navbar() {
  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-2xl text-gdgBlue">
          IIW Student Chapter
        </h1>
        <div className="space-x-8 font-medium">
          <a href="#about" className="hover:text-gdgBlue transition">About</a>
          <a href="#events" className="hover:text-gdgRed transition">Events</a>
          <a href="#team" className="hover:text-gdgGreen transition">Team</a>
          <a href="#contact" className="hover:text-gdgYellow transition">Contact</a>
        </div>
      </div>
    </div>
  );
}
