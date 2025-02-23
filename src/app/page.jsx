import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse } from "./libs/APIs";
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");

  return (

    // anime populer
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        ></Header>
        <Animelist api={topAnime} />
      </section>
    </>
  );
};
export default Page;
