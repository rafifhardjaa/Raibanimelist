// app/page.jsx || halaman utama
import Animelist from "@/components/Animelist";
import Header from "@/components/Animelist/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/APIs";

const ErrorBox = ({ msg }) => (
  <div className="bg-red-500/20 border border-red-500 text-red-600 p-4 mx-4 rounded">
    {msg}
  </div>
);

export default async function Page() {
  let topAnime = { data: [] };
  let recommendedAnime = { data: [] };

  try {
    topAnime = await getAnimeResponse("top/anime", "limit=8");
  } catch (error) {
    console.log("Error fetch top anime:", error);
    topAnime.error = "Failed to load popular anime. Please refresh the page.";
  }

  try {
    const recRaw = await getNestedAnimeResponse("recommendations/anime", "entry");
    recommendedAnime = reproduce(recRaw, 10);
  } catch (error) {
    console.log("Error fetch recommended anime:", error);
    recommendedAnime.error = "Failed to load recommendations. Please refresh the page.";
  }

  return (
    <>
      <section>
        <Header
          title="Most Popular Anime"
          subtitle="Popular right now. Updated daily."
          linkHref="/populer"
          linkTitle="See All"
        />
        {topAnime.error ? <ErrorBox msg={topAnime.error} /> : <Animelist api={topAnime} />}
      </section>

      <section>
        <Header title="Anime Recommendations" subtitle="Handpicked for you." />
        {recommendedAnime.error ? (
          <ErrorBox msg={recommendedAnime.error} />
        ) : (
          <Animelist api={recommendedAnime} />
        )}
      </section>
    </>
  );
}
