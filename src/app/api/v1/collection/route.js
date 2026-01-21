import  { prisma } from "@/libs/prisma";
export async function GET() {
  try {
    const data = await prisma.collection.findMany();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const { anime_mal_id, user_email } = await request.json();
    const createCollection = await prisma.collection.create({
      data: { anime_mal_id, user_email },
    });

    return new Response(JSON.stringify({ status: 200, isCreated: true }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ status: 500, isCreated: false }), {
      status: 500,
    });
  }
}
