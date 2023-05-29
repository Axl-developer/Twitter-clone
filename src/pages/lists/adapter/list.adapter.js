
export const ListAdapter = (apiResponse) => {
    return apiResponse.map ( list => ({
        id:list.id,
        nombre_lista:list.nombre_lista,
        tweet_nom:list.tweet_nom,
        nombre:list.nombre,
        url:list.url
    }))
}