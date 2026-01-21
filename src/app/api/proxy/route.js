export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const endpoint = searchParams.get("endpoint");
  const query = searchParams.get("query") || "";

  if (!endpoint) {
    return new Response(JSON.stringify({ error: "Missing endpoint" }), {
      status: 400
    });
  }

  const apiUrl = `https://api.jikan.moe/v4/${endpoint}${query ? `?${query}` : ""}`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
