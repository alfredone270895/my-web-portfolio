import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { LngLatLike } from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWxmcmVkb25lOTUiLCJhIjoiY2tuZjF6dDJ2MnFqMDJ1bng2enNlZWtjbiJ9.r_cnkptBHDWp8e0_VKIJnQ';

/**
 * Application map with mapbox
 * @constructor
 */
const Mapbox: React.FC = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState<number>(9.27834);
  const [lat, setLat] = useState<number>(45.5297);
  const [zoom, setZoom] = useState<number>(12);

  useEffect(() => {
    if (mapContainerRef.current) {
      const geoJson = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [9.27834, 45.5297],
        },
        properties: {
          title: 'Alfredo',
          description: `
            <p>
              <Icon icon="akar-icons:envelope" />
              <a href="mailto:alfredodallari@outlook.com">alfredodallari@outlook.com
              </a>
            </p>
            <p>
              <Icon icon="fxemoji:cellphone" /> +39 3664935606
            </p>`,
        },
      };

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      map.on('move', () => {
        setLng(Number(map.getCenter().lng.toFixed(4)));
        setLat(Number(map.getCenter().lat.toFixed(4)));
        setZoom(Number(map.getZoom().toFixed(2)));
      });

      const el = document.createElement('div');
      el.className = 'marker';
      new mapboxgl.Marker(el)
        .setLngLat(geoJson.geometry.coordinates as LngLatLike)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3>${geoJson.properties.title}</h3><p>${geoJson.properties.description}</p>`,
          ),
        )
        .addTo(map);

      return () => map.remove();
    }
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

//mapboxgl.workerClass =
// eslint-disable-next-line import/no-webpack-loader-syntax
//require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default Mapbox;
