"use client";

import { Icon } from "@/components/Icon";
import { useCallback, useMemo, useState } from 'react';
import { getFilteredSpotsData } from '@/utils/supabaseSearch';
import prefecturesJson from '@/data/prefectures.json';
import genresJson from '@/data/genres.json';

type Prefecture = {
  code: number,
  name: string;
};


type Genre = {
  code: number,
  name: string;
};

export function SearchPage() {
  const prefecturesData: Prefecture[] = useMemo(() => prefecturesJson.prefectures, []);
  const genresData: Genre[] = useMemo(() => genresJson.genres, []);
  const [selectedArea, setSelectedArea] = useState(0);
  const [selectedGenre, setSelectedGenres] = useState(0);

  const search = useCallback(() => {
    console.log(selectedArea, selectedGenre);
    getFilteredSpotsData(selectedGenre, selectedArea);
  }, [selectedArea, selectedGenre]);

  return (
    <>
      <div className="flex justify-center p-2">
        <div className="flex items-center bg-gray-100 rounded-l-lg">
          <input className=" bg-gray-100 outline-none rounded-l-lg p-4 space-x-4" type="text" placeholder="Keyword..." />
          <button className="bg-blue-700 rounded-r-lg p-4 space-x-4"><Icon name="Search" stroke="white" /></button>
        </div>
      </div>
      <select
        value={selectedGenre}
        onChange={e => setSelectedGenres(Number(e.target.value))}>
        <option value={0}>すべて</option>
        {genresData.map((genre) => (
          <option key={genre.code} value={genre.code}>{genre.name}</option>
        ))}
      </select>
      <select
        value={selectedArea}
        onChange={e => setSelectedArea(Number(e.target.value))}>
        <option value={0}>すべて</option>
        {prefecturesData.map((prefecture) => (
          <option key={prefecture.code} value={prefecture.code}>{prefecture.name}</option>
        ))}
      </select>
      <button onClick={search}>search</button>
    </>
  );
};

export default SearchPage;;
