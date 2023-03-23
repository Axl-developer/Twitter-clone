import { createSlice } from "@reduxjs/toolkit";


export const commentsSlice = createSlice({
    name:'comments',
    initialState:[
        {
            id:1,
            name:'Juanjo',
            answers:10,
            likes:478,
            retweets:66,
            tweet_name:'@juanOr',
            time:'5h',
            body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
            url:"/assets/perfil/pexels-simon-robben-614810.jpg"
        },
        {
            id:2,
            name:'Victor',
            answers:4,
            likes:322,
            retweets:50,
            tweet_name:'@VicGo',
            time:'7h',
            body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
            url:"/assets/perfil/pexels-stefan-stefancik-91227.jpg"
        },
        {
            id:3,
            name:'William',
            answers:11,
            likes:257,
            retweets:47,
            tweet_name:'@william',
            time:'8h',
            body:'Deserunt irure Lorem occaecat aliqua laboris et pariatur.',
            url:"/assets/perfil/pexels-stefan-stefancik-91224.jpg"
        },
    ]
})

export default commentsSlice.reducer