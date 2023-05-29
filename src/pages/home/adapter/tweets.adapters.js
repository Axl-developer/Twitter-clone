
export const tweetsAdapter = (apiResponse) => {
    return apiResponse.map ( tweet => ({
        id:tweet.id,
        answers:tweet.answers,
        body:tweet.body,
        likes:tweet.likes,
        isLikeMe:tweet.isLikeMe,
        time:tweet.time,
        nombre:tweet.nombre,
        retweets:tweet.retweets,
        tweet_nom:tweet.tweet_nom,
        url:tweet.url,
        imgs:tweet?.imgs,
        retweet:tweet?.retweet,
        response:tweet?.response
    }))
}