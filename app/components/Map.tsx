"use client";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function ZoomHandler({ position }: { position: [number, number] }) {
  const map = useMapEvents({
    mouseover: () => {
      map.flyTo(position, 18, { animate: true, duration: 1.5 });
    },
    mouseout: () => {
      map.flyTo(position, 15, { animate: true, duration: 1.5 });
    },
  });
  return null;
}

const Map = () => {
  const position: [number, number] = [22.367824, 70.797342]; 

  return (
    <MapContainer 
      center={position} 
      zoom={15} 
      scrollWheelZoom={false} 
      className="h-full w-full" 
    >
      {/* SATELLITE TILE LAYER */}
      <TileLayer
        attribution='&copy; <a href="https://www.esri.com/">Esri</a>, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />
      
      <ZoomHandler position={position} />

      <Marker position={position}>
        <Popup>
          MU-IIW Student Chapter <br /> Marwadi University.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;