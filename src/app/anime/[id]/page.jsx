import Image from "next/image";
import { getAnimeResponse } from "@/libs/APIs";
import VideoPlayer from "@/components/Utillities/VideoPlayer";
import CollectionsButton from "@/components/Animelist/CollectionsButton";
import { authUserSession } from "@/libs/auth-libs";

const Page = async ({ params }) => {
  const { id } = await params;
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const youtubeId = anime.data.trailer?.youtube_id;

  return (
    <>
      <div className="pt-4 px-4">
        <h1 className="text-2xl text-color-dark">
          {anime.data.title} {`-`} {anime.data.year}
        </h1>
        <CollectionsButton anime_mal_id={id} user_email={user?.email} />
      </div>

      <div className="pt-4 px-4 gap-2 flex text-color-dark overflow-x-auto">
        <InfoBox title="Peringkat" value={anime.data.rank} />
        <InfoBox title="Rating" value={anime.data.score} />
        <InfoBox title="Episode" value={anime.data.episodes} />
        <InfoBox title="Popularitas" value={anime.data.popularity} />
        <InfoBox title="Favorit" value={anime.data.favorites} />
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-dark">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl text-color-dark">
          {anime.data.synopsis}
        </p>
      </div>

      <div className="pt-4 px-4">
        <VideoPlayer youtubeId={youtubeId || ""} />
      </div>
    </>
  );
};

const InfoBox = ({ title, value }) => (
  <div className="w-36 flex flex-col justify-center items-center rounded border bg-color-secondary/80 border-color-primary p-2">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export default Page;
