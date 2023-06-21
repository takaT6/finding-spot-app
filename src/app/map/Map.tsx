"use client";
// See https://www.99darshan.com/posts/interactive-maps-using-nextjs-and-google-maps/
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { CSSProperties, useCallback, useState, useEffect, useMemo } from 'react';
import { Spot } from '@/types/easyDB.types';
import { getAllSpotsData } from '@/utils/supabase';
import { useAppContext } from '@/context/app-context';
import Loading from '@/app/loading';
import { Card } from './Card';

const containerStyle: CSSProperties = {
  height: "calc(100% - 40px)",
  width: "100%",
  position: "absolute",
};

export function Map() {
  const { setIsMapPage } = useAppContext();
  const [location, setLocation] = useState<google.maps.LatLngLiteral>({ lat: 35.68133892128549, lng: 139.76715250961809 });

  const [spots, setSpots] = useState(Array<Spot>);

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const mapOptions = useMemo<google.maps.MapOptions>(() => ({
    disableDefaultUI: true,
    clickableIcons: true,
    gestureHandling: "greedy"
  }), []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMapPage(true);
    return () => setIsMapPage(false);
  }, []);// eslint-disable-line

  useEffect(() => {
    (async () => {
      const data = await getAllSpotsData();
      setSpots(data!);
    })();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_ID!,
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    // setMap(map);
  }, []);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  const handleUnderSpotsListTap = () => {
    const underSpotsListElem = document.getElementById("underSpotsList");
    if(underSpotsListElem!.style.display == "none"){
      underSpotsListElem!.style.display = "block"
    }else{
      underSpotsListElem!.style.display = "none"
    };
  };

  return isLoaded ? (
    <div className='h-full overflow-hidden'>
      <GoogleMap
        options={mapOptions}
        mapContainerStyle={containerStyle}
        center={location}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        clickableIcons={false}
      >
        {spots.map((spot, i) => (
          <Marker
            key={i}
            position={{ lat: spot.latitude!, lng: spot.longitude! }}
            label={spot.name!}
          />
        ))}
        <Marker position={location} label="現在地" />
      </GoogleMap>
      <div className="z-1000 absolute bottom-0 bg-red-100">
        <div className="w-screen" onClick={handleUnderSpotsListTap}>
          <span className="flex justify-center">^</span>
        </div>
        <div id="underSpotsList" className="flex flex-col overflow-x-scroll w-screen">
          <div className="flex">
            <div className="flex flex-nowrap">
              {spots.map((spot: Spot) => <Card key={spot.id} {...spot} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
    : <Loading />;
};