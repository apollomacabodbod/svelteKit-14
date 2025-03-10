


export async function load({ fetch, params , setHeaders , locals }){
    console.log("locals: ", locals)

    const res = await fetch(`https://syntax.fm/api/shows/${params.num}`)
    const data = await res.json();



    setHeaders({
        'Cache-Control': 'max-age=60'
    })

    return {

        episode: data,
        user: locals.user
    };


}