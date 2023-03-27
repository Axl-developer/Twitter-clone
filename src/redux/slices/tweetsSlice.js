import { createSlice } from "@reduxjs/toolkit";


export const tweetsSlice = createSlice({
    name:'tweets',
    initialState:[
        {
            id:0,
            answers:10,
            body:"As millions of people welcome Ramadan, discover how different cultures around the world celebrate the month with #GoogleRamadanBingo",
            likes:478,
            isLikeMe:false,
            time:'1h',
            nombre:"Google",
            retweets:66,tweet_nom:"@Google",
            url:"/assets/perfil/mvBRhlDs.jpg",
            imgs:[{id:1,url:'/assets/imgs/pexels-huy-phan-1474237.jpg'}],
            retweet:{
                id:0,
                body:"From learning Navigation with Compose and Lists to creating designs that were fully functional Compose, you earned it @blundell_apps! #AndroidDevChallenge",
                time:'6h',
                nombre:"Android Developers",
                tweet_nom:"@AndroidDev",
                url:"/assets/perfil/VRtfrDXq_x96.png",
                imgs:[{id:2,url:'/assets/imgs/pexels-mihis-alex-21022.jpg'},{id:3,url:'/assets/imgs/pexels-thorn-yang-441794.jpg'}]
            }
        },
        {
            id:1,
            answers:10,
            body:"As millions of people welcome Ramadan, discover how different cultures around the world celebrate the month with #GoogleRamadanBingo",
            likes:478,
            isLikeMe:false,
            time:'1h',
            nombre:"Google",
            retweets:66,tweet_nom:"@Google",
            url:"/assets/perfil/mvBRhlDs.jpg",
            imgs:[{id:1,url:'/assets/imgs/pexels-huy-phan-1474237.jpg'}]
        },
        {
            id:2,
            answers:8,
            body:"From learning Navigation with Compose and Lists to creating designs that were fully functional Compose, you earned it @blundell_apps! #AndroidDevChallenge",
            likes:137,
            isLikeMe:false,
            time:'6h',
            nombre:"Android Developers",
            retweets:30,tweet_nom:"@AndroidDev",
            url:"/assets/perfil/VRtfrDXq_x96.png",
            imgs:[{id:2,url:'/assets/imgs/pexels-mihis-alex-21022.jpg'},{id:3,url:'/assets/imgs/pexels-thorn-yang-441794.jpg'}]
        },
        {
            id:3,
            answers:17,
            body:"With the new video editor, you can crop, change perspective and add filters. You can also control brightness, contrast, saturation and more so you can apply your own signature look to your videos.",
            likes:342,
            isLikeMe:false,
            time:'11 feb',
            nombre:"Google Photos",
            retweets:63,tweet_nom:"@googlephotos",
            url:"/assets/perfil/H99BdKOh_normal.jpg",
            imgs:[{id:4,url:'/assets/imgs/pexels-pixabay-265946.jpg'}]
        },
        {
            id:4,
            answers:8,
            body:"Check out @Xbox’s Earth Day celebration activities and learn how you can get involved:",
            likes:622,
            isLikeMe:false,
            time:'3h',
            nombre:"Xboxer",
            retweets:96,tweet_nom:"@Xbox",
            url:"/assets/perfil/_qzIlQPl_normal.jpg",
            imgs:[{id:5,url:'/assets/imgs/pexels-fox-1445238.jpg'},{id:6,url:'/assets/imgs/pexels-fox-2106216.jpg'},{id:7,url:'/assets/imgs/pexels-thiago-japyassu-4068701.jpg'}]
        },
        {
            id:5,
            answers:8,
            body:"Check out @Xbox’s Earth Day celebration activities and learn how you can get involved:",
            likes:622,
            isLikeMe:false,
            time:'3h',
            nombre:"Xboxer",
            retweets:96,tweet_nom:"@Xbox",
            url:"/assets/perfil/_qzIlQPl_normal.jpg",
            imgs:[{id:5,url:'/assets/imgs/pexels-fox-1445238.jpg'},{id:6,url:'/assets/imgs/pexels-fox-2106216.jpg'},{id:7,url:'/assets/imgs/pexels-thiago-japyassu-4068701.jpg'},{id:8,url:'/assets/imgs/pexels-fox-1445238.jpg'},{id:9,url:'/assets/imgs/pexels-fox-2106216.jpg'}]
        }
    ],
    reducers: {
        addTweet: (state,action) => { 
            state.unshift(action.payload)
        },
        updateTweet: (state,action) => {
             const tweetFound = state.find( tweet => tweet.id === action.payload.id)
             tweetFound && state.splice(state.indexOf(tweetFound),1,action.payload)
        }
    }
})

export const { addTweet,updateTweet } = tweetsSlice.actions

export default tweetsSlice.reducer