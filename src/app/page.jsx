import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "../libs/APIs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  recommendedAnime = reproduce(recommendedAnime, 10);

  return (

    // anime populer    
    <>
      <section>
        <Header className="mb-4"
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        ></Header>
        <Animelist api={topAnime} />
      </section>
      <section>
        <Header
          title="Rekomendasi"
        ></Header>
        <Animelist api={recommendedAnime} />
      </section>
    </>
  );
};
export default Page;
