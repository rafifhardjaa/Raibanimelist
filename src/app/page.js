import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topoAnime = await response.json();

  return (
    // anime populer
    <>
      <section>
        <Header
          title="Anime Terpopuler"
          linkHref="/populer"
          linkTitle="Lihat Semua"
        ></Header>
        <Animelist api={topoAnime} />
      </section>
    </>
  );
};
export default Home;
