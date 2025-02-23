export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }

  const anime = await response.json();
  return anime;
}