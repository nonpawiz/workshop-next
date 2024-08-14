import connection, { testConnection } from "../connection";

export const GET = async (request: Request) => {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // const data = await connection("users").select();

    // return Response.json({
    //     id: 1
    // })

    const test = await testConnection();
    return Response.json(test)

    if (id) {
        if (id == "0") {
            const user = {
                id: 0,
                name: "",
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                role: "",
            };
            return Response.json(user);
        } else {
            try {
                const User = await new Promise((resolve, reject) => {
                    connection("users")
                        .select()
                        .where({ id: id })
                        .first()
                        .then((users: any) => {
                            resolve(users);
                        })
                        .catch((error: any) => {
                            reject(error);
                        });
                });
                return Response.json(User);
            } catch (error) {
                return Response.json(error);
            }
        }
    } else {
        // return Response.json({ 'yes': 1 });
        try {
            // knex('users').where('id').first();
            const AllUser = new Promise((resolve, reject) => {
                connection("users")
                    .where('id', 1).first()
                    // .select()
                    .then((users: any) => {
                        resolve(users);
                    })
                    .catch((error: any) => {
                        reject(error);
                    });
            });
            return Response.json(AllUser);
        } catch (error) {
            return Response.json({ 'error': error });
            return Response.json(error);
        }
    }
}

// export const GET = () => {
//     const books = generatorBooks();
//     // return Response.json(books);
//     return new Response(JSON.stringify(books), {
//         status: 200,
//         headers: {
//             'Content-Type': "application/json"
//         },
//     });
// }