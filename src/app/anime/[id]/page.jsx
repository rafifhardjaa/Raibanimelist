import Image from "next/image";
import { getAnimeResponse } from "@/app/libs/APIs";
import VideoPlayer from "@/components/Utillities/VideoPlayer";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`, "");
  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-2xl text-color-light">{anime.data.title} - {anime.data.year}</h1>
      </div>
      <div className="pt-4 px-4 gap-2 flex text-color-light overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-color-secondary/80 border-color-primary p-2">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-color-secondary/80 border-color-primary p-2">
          <h3>Rating</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-color-secondary/80 border-color-primary p-2">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-color-secondary/80 border-color-primary p-2">
          <h3>Popularitas</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border bg-color-secondary/80 border-color-primary p-2">
          <h3>Favorit</h3>
          <p>{anime.data.favorites}</p>
        </div>

      </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-light">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover" />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  )
}
export default Page;
