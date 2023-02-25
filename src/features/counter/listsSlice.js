import { createSlice } from "@reduxjs/toolkit";


export const listSlice = createSlice({
    name:'list',
    initialState:{
        news:[
            {
                id:1,
                nombre_lista:"Programación",
                tweet_nom:"@Dev",
                nombre:"AndroidDev",
                url:'/assets/perfil/mvBRhlDs.jpg'
            },
            {
                id:2,
                nombre_lista:"Noticias Mundo",
                tweet_nom:"@Google",
                nombre:"Google",
                url:'/assets/perfil/VRtfrDXq_x96.png'
            }
        ],
        yourList:[],
        fixed:[]
    }
})

export default listSlice.reducer