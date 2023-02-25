import { createSlice } from "@reduxjs/toolkit";


export const tweetsSilce = createSlice({
    name:'tweets',
    initialState:[
        {
            id:0,
            answers:10,
            body:"As millions of people welcome Ramadan, discover how different cultures around the world celebrate the month with #GoogleRamadanBingo",
            likes:478,
            time:'1h',
            name:"Google",
            retweets:66,tweet_name:"@Google",
            url:"/assets/perfil/mvBRhlDs.jpg",
            imgs:[{id:1,url:'/assets/imgs/pexels-huy-phan-1474237.jpg'}],
            retweet:{
                id:0,
                body:"From learning Navigation with Compose and Lists to creating designs that were fully functional Compose, you earned it @blundell_apps! #AndroidDevChallenge",
                time:'6h',
                name:"Android Developers",
                tweet_name:"@AndroidDev",
                url:"/assets/perfil/VRtfrDXq_x96.png",
                imgs:[{id:2,url:'/assets/imgs/pexels-mihis-alex-21022.jpg'},{id:3,url:'/assets/imgs/pexels-thorn-yang-441794.jpg'}]
            }
        },
        {
            id:1,
            answers:10,
            body:"As millions of people welcome Ramadan, discover how different cultures around the world celebrate the month with #GoogleRamadanBingo",
            likes:478,
            time:'1h',
            name:"Google",
            retweets:66,tweet_name:"@Google",
            url:"/assets/perfil/mvBRhlDs.jpg",
            imgs:[{id:1,url:'/assets/imgs/pexels-huy-phan-1474237.jpg'}]
        },
        {
            id:2,
            answers:8,
            body:"From learning Navigation with Compose and Lists to creating designs that were fully functional Compose, you earned it @blundell_apps! #AndroidDevChallenge",
            likes:137,
            time:'6h',
            name:"Android Developers",
            retweets:30,tweet_name:"@AndroidDev",
            url:"/assets/perfil/VRtfrDXq_x96.png",
            imgs:[{id:2,url:'/assets/imgs/pexels-mihis-alex-21022.jpg'},{id:3,url:'/assets/imgs/pexels-thorn-yang-441794.jpg'}]
        },
        {
            id:3,
            answers:17,
            body:"With the new video editor, you can crop, change perspective and add filters. You can also control brightness, contrast, saturation and more so you can apply your own signature look to your videos.",
            likes:342,
            time:'11 feb',
            name:"Google Photos",
            retweets:63,tweet_name:"@googlephotos",
            url:"/assets/perfil/H99BdKOh_normal.jpg",
            imgs:[{id:4,url:'/assets/imgs/pexels-pixabay-265946.jpg'}]
        },
        {
            id:4,
            answers:8,
            body:"Check out @Xbox’s Earth Day celebration activities and learn how you can get involved:",
            likes:622,
            time:'3h',
            name:"Xboxer",
            retweets:96,tweet_name:"@Xbox",
            url:"/assets/perfil/_qzIlQPl_normal.jpg",
            imgs:[{id:5,url:'/assets/imgs/pexels-fox-1445238.jpg'},{id:6,url:'/assets/imgs/pexels-fox-2106216.jpg'},{id:7,url:'/assets/imgs/pexels-thiago-japyassu-4068701.jpg'}]
        },
        {
            id:5,
            answers:8,
            body:"Check out @Xbox’s Earth Day celebration activities and learn how you can get involved:",
            likes:622,
            time:'3h',
            name:"Xboxer",
            retweets:96,tweet_name:"@Xbox",
            url:"/assets/perfil/_qzIlQPl_normal.jpg",
            imgs:[{id:5,url:'/assets/imgs/pexels-fox-1445238.jpg'},{id:6,url:'/assets/imgs/pexels-fox-2106216.jpg'},{id:7,url:'/assets/imgs/pexels-thiago-japyassu-4068701.jpg'},{id:8,url:'/assets/imgs/pexels-fox-1445238.jpg'},{id:9,url:'/assets/imgs/pexels-fox-2106216.jpg'}]
        }
    ],
    reducers: {
        addTweet: (tweet) => { 
            console.log(tweet)
        }
    }
})

export const { addTweet } = tweetsSilce.actions

export default tweetsSilce.reducer