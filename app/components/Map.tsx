"use client";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function ZoomHandler({ position }: { position: [number, number] }) {
  const map = useMapEvents({
    mouseover: () => { map.flyTo(position, 18, { animate: true, duration: 1.5 }); },
    mouseout: () => { map.flyTo(position, 15, { animate: true, duration: 1.5 }); },
  });
  return null;
}

const Map = () => {
  const position: [number, number] = [22.367824, 70.797342]; 

  return (
    <div className="h-full w-full">
      {/* @ts-ignore */}
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false} 
        className="h-full w-full rounded-[30px]"
      >
        <TileLayer
          attribution='&copy; Esri'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <ZoomHandler position={position} />
        <Marker position={position}>
          <Popup>MU-IIW Student Chapter</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;