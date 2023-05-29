import { fetchData } from "../../../helpers/fetch"
import { baseUrl, path } from "../../../helpers/url"
import { createTweets } from "../../../redux/slices/tweetsSlice"
import { tweetsAdapter } from "../adapter"


export const getTweets = async(dispatch,setIsLoading) => {
  
    const result = await fetchData(baseUrl+path.tweets)

    const formatedTweets = tweetsAdapter(result)

    dispatch(createTweets(formatedTweets))

    setIsLoading(false)
}
