"use client"
import { useEffect, useState } from "react";
// import { Book } from "@/utils/type";
import { getBooks } from "@/utils/api";

// const CsrPage = () => {
//     const [loading, setLoading] = useState(true);
//     const [books, setBooks] = useState<Book[]>([]);

//     const loadBooks = async () => {
//         const res = await getBooks();

//         setBooks(res);
//         setLoading(false);
//     }

//     useEffect(() => {
//         loadBooks()
//     }, [])


//     if (loading) return `Loading ....`;
//     if (books.length === 0) return `No books found`;
//     return (
//         <div>
//             <ul>
//                 {books.map((book, index) => (
//                     <li key={index}>{book.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

interface Book {
    id: number;
    title: string;
    desc: string;
}
interface Books {
    books: Book[];
}

const BookList = ({ books }: Books) => {
    return (<>
        <table className="table-auto borde">
            <thead>
                <tr>
                    <th className="border">id</th>
                    <th className="border">title</th>
                </tr>
            </thead>
            <tbody>
                {books.map(item => (
                    <tr key={item.id}>
                        <td className="border">
                            <div className="p-2">
                                {item.id}.
                            </div>
                        </td>
                        <td className="border">
                            <div className="p-2">
                                {item.title}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </>)
}

const CsrPage = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const getBooks = async () => {
        const res = await fetch('http://localhost:3000/api/books');
        const items = await (res.json() as Promise<Book[]>);
        setBooks(items);
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (<div>
        <h1>Books</h1>
        <BookList books={books} />
    </div>)


}
export default CsrPage;