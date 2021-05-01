export const GetTweetById = (Tweets,id) => {

    return Tweets.find(Tweet => Tweet.id === id)
}