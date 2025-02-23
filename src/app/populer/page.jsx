"use client";
import Animelist from '@/components/Animelist';
import HeaderMenu from '@/components/Utillities/HeaderMenu';
import Pagination from '@/components/Utillities/Pagination';
import { getAnimeResponse } from '../libs/APIs';
import React, { useEffect } from 'react';

const populer = () => {
  const [page, setPage] = React.useState(1);
  const [topAnime, setTopAnime] = React.useState([]);
  const fetchData = async () => {
    const populerAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(populerAnime);
  }
  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <>
      <HeaderMenu tittle={`ANIME TERPOPULER# ${page}`} />
      <Animelist api={topAnime} />
      <Pagination page={page}
        lastPage={topAnime.pagination?.last_visible_page || 1}
        setPage={setPage} />
    </>
  )

};
export default populer;
