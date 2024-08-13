import { getBooks } from "@/utils/api"

const isrPage = async () => {
    const res = await getBooks({ next: { revalidate: 10 } });
    return (
        <div>
            <ul>
                {res.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default isrPage