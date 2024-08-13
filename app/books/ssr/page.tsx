import { getBooks } from "@/utils/api"

const ssrPage = async () => {
    const res = await getBooks({ cache: `no-store` });
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

export default ssrPage