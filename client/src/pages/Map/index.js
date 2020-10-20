import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import { Link } from "react-router-dom";

import polyline from "@mapbox/polyline";

import api from "../../services/api";

import { useSelector } from 'react-redux'

import "./styles.css";

const Map = () => {
  const [routeEncode, setRouteEncode] = useState("");
  const { startPoint, endPoint } = useSelector(state => state.saveLocation);

  useEffect(() => {
    const getBetterRoute = async () => {
      try {
        const origin = encodeURI(startPoint);
        const destination = encodeURI(endPoint);

        const points = await api.post(
          `/getRoutes?origin=${origin}&destination=${destination}`
        );
        setRouteEncode(points.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBetterRoute();
  }, []);

  const latlngs = polyline.decode(routeEncode);
  const coords = latlngs.map((point) => ({
    lat: point[0],
    lng: point[1],
  }));

  return (
    <main className="main-map">
      <div className="div-link-map">
        <Link to="/">Registro de entregas</Link>
        <Link to="/list_delivery">Lista de entregas</Link>
      </div>
      <h2>{`Trajeto de ${startPoint} até ${endPoint}`}</h2>

      <LoadScript
        className="load"
        googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}
      >
        <GoogleMap
          mapContainerStyle={{ width: "750px", height: "500px" }}
          center={coords[0]}
          option={{ gesturehandling: "greedy" }}
          zoom={14}
        >
          <Polyline path={coords} />
          <Marker position={coords[0]} />
          <Marker position={coords[coords.length - 1]} />
        </GoogleMap>
      </LoadScript>
    </main>
  );
};

export default Map;
