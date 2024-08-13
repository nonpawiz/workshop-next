import { generatorBooks } from "@/utils/generator";

export const GET = () => {
    const books = generatorBooks();
    // return Response.json(books);
    return new Response(JSON.stringify(books), {
        status: 200,
        headers: {
            'Content-Type': "application/json"
        },
    });
}