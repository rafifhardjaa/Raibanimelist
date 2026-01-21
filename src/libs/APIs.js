export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);

  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch anime data, try another method");
  }

  const anime = await response.json();
  return anime;
}

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource)
  return response.data.flatMap(item => item[objectProperty])

}
//200 data anime max
export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1) //10
  const last = first + gap

  const response = {
    data: data.slice(first, last)
  }
  return response
}