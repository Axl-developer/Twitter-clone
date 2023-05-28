import { fetchData } from "../../../helpers/fetch"
import { ListAdapter } from "../adapter/list.adapter"
import { createList } from "../../../redux/slices/listSlice"
import { baseUrl, path } from "../../../helpers/url"

export const getList = async(dispatch,setIsLoading) => {

    const result = await fetchData(baseUrl+path.list)

    const formatedFixed = ListAdapter(result.fixed)
    const formatedNews = ListAdapter(result.news)
    const formatedYourList = ListAdapter(result.yourList)

    dispatch(createList({
        fixed:formatedFixed,
        news:formatedNews,
        yourList:formatedYourList
    }))

    setIsLoading(false)
}