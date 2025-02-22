"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 37.7749, // Default location (San Francisco)
  lng: -122.4194,
};

export default function ClinicLocator() {
  const [userLocation, setUserLocation] = useState(null);
  const [clinics, setClinics] = useState([]);

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Mock clinic data (replace with real data later)
  useEffect(() => {
    const mockClinics = [
      { id: 1, name: "Clinic A", lat: 37.7749, lng: -122.4194 },
      { id: 2, name: "Clinic B", lat: 37.7849, lng: -122.4294 },
      { id: 3, name: "Clinic C", lat: 37.7949, lng: -122.4394 },
    ];
    setClinics(mockClinics);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Clinic Locator</h1>
      <p className="text-gray-600">Find nearby mental health clinics easily.</p>

      <div className="mt-6 w-full h-96">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={userLocation || defaultCenter}
          >
            {/* Display user's location */}
            {userLocation && (
              <Marker
                position={userLocation}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Blue dot for user's location
                }}
              />
            )}

            {/* Display clinics */}
            {clinics.map((clinic) => (
              <Marker
                key={clinic.id}
                position={{ lat: clinic.lat, lng: clinic.lng }}
                label={clinic.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}