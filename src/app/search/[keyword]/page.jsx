import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse } from "@/app/libs/APIs";
const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);
  return (
    <>
      <section>
        <Header
          title={`Pencarian Anda Untuk ${decodedKeyword}...`}
        ></Header>
        <Animelist api={searchAnime} />
      </section>
    </>
  );
};
export default Page;
