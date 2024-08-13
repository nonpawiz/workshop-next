import { Book } from "./type";
export const getBooks = async (option?: Parameters<typeof fetch>[1]) => {
    const res = await fetch(`http://localhost:3000/api/books`, option);
    return res.json() as Promise<Book[]>;
}