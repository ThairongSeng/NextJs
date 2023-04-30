import { useRouter } from "next/router"

function Post({result}){
    const router = useRouter()
    const {id} = router.query
    return (
        <h1>Post : {id}
            {
                <p>{result.title}</p>
            }
        </h1>
    )
}

export async function getServerSideProps({params}){
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const result = await resp.json()
    return {
        props : {
            result
        }
    }
}


export default Post