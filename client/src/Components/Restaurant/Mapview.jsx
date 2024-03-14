import React from "react";
import { MdContentCopy } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MapView(props) {
  return (
    <>
      {/* Phone Number Display */}
      <div>
        <h4 className="text-xl font-medium">Call</h4>
        <h5 className="text-zomato-300 font-medium">{props.phno}</h5>
      </div>

      {/* Direction Map */}
      <div>
        <h4 className="text-xl font-medium">Direction</h4>
        <div className="w-full h-48">
          {/* MapContainer to display the map */}
          <MapContainer
            center={props.mapLocation} // Set the center of the map
            zoom={13} // Set the initial zoom level
            scrollWheelZoom={false} // Disable zooming with scroll wheel
          >
            {/* TileLayer for map tiles */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Marker to mark the specified location on the map */}
            <Marker position={props.mapLocation}>
              {/* Popup to display information when the marker is clicked */}
              <Popup>{props.title}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Buttons for Copying and Getting Directions */}
      <div className="flex items-center gap-3">
        {/* Copy Button */}
        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
          <MdContentCopy /> Copy
        </button>

        {/* Direction Button */}
        <button className="flex items-center gap-2 px-3 py-2 text-gray-700 border border-gray-400 rounded-lg">
          <span className="text-zomato-400">
            <FaDirections />
          </span>
          Direction
        </button>
      </div>
    </>
  );
}

export default MapView;
