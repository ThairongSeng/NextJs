import Link from "next/link"

function Post({result}){
    return (
        <section>
            {
                result.map(res => 
                    <h2 key={res.id}>
                        <Link href={`/posts/${res.id}`}>
                            {res.title}
                        </Link>
                    </h2>)
            }
        </section>
    )
}

// implement static generaton
// export async function getStaticProps(){
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users")
//     const result = await resp.json()

//     return {
//         props : {
//             result
//         }
//     }
// }
// export default Post


export async function getServerSideProps(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
    const result = await resp.json()

    return {
        props : {
            result
        }
    }
}
export default Post