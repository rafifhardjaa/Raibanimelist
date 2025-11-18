// Ambil data anime dari API
export const getAnimeResponse = async (resource, query = "") => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`;
  const response = await fetch(url);

  if (!response.ok) {
<<<<<<< HEAD
    throw new Error(`Failed to fetch anime data from ${url}`);
=======
    throw new Error("Failed to fetch anime data, try another method");
>>>>>>> 62bfe413ca93f9d1475085e002bd30d03dd41dd5
  }

  const data = await response.json();
  return data;
}

// Ambil property nested dari data anime
export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);

  // pastikan response.data ada
  if (!response?.data) return [];

  // flatMap biar semua nested property jadi satu array
  return response.data.flatMap(item => item[objectProperty] || []);
}

// Ambil slice random dari array data (max gap data)
export const reproduce = (data, gap) => {
  if (!data.length) return { data: [] };

  const maxStart = Math.max(data.length - gap, 0);
  const start = Math.floor(Math.random() * (maxStart + 1));
  const end = start + gap;

  return {
    data: data.slice(start, end)
  };
}
