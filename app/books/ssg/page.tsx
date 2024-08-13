import { getBooks } from "@/utils/api"

const ssgPage = async () => {
    const res = await getBooks();
    return (
        <div>
            <ul>
                {res.map((book, index) => (
                    <li key={index}>{book.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ssgPage