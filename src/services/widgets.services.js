import { tweetsAdapter } from "../adapter/widget.adapters"
import { fetchData } from "../helpers/fetch"
import { baseUrl, path } from "../helpers/url"
import { createTrends } from "../redux/slices/trendsSlice"
import { createWhoToFollow } from "../redux/slices/whoToFollowSlice"

export const getWidgets = async(dispatch,setIsLoading) => {
  
    const result = await fetchData(baseUrl+path.widgets)

    const formatedTrends = tweetsAdapter(result.trends)
    const formatedWhoToFollow = tweetsAdapter(result.whoToFollow)

    dispatch(createTrends(formatedTrends))
    dispatch(createWhoToFollow(formatedWhoToFollow))

    setIsLoading(false)
}
