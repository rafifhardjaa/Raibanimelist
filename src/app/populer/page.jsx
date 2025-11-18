"use client"

import Animelist from "@/components/Animelist"
import HeaderMenu from "@/components/Utillities/HeaderMenu"
import Pagination from "@/components/Utillities/Pagination"
import { getAnimeResponse } from "@/libs/APIs"
import { useEffect, useState } from "react"

const Populer = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState(null)
  const [error, setError] = useState("")

  const fetchData = async () => {
    try {
      const data = await getAnimeResponse("top/anime", `page=${page}`)
      setTopAnime(data)
      setError("")
    } catch (err) {
      console.log(err)
      setError("Gagal Untuk Memuat Data. Harap refresh.")
      setTopAnime(null)
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler — Page ${page}`} />

      {error ? (
        <p className="p-4 text-red-500 text-lg">{error}</p>
      ) : (
        <>
          {topAnime && <Animelist api={topAnime} />}

          <Pagination
            page={page}
            lastPage={topAnime?.pagination?.last_visible_page || 1}
            setPage={setPage}
          />
        </>
      )}
    </>
  )
}

export default Populer
