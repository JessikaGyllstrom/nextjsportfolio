import { PageInfo } from "../pages/typings.d";

export const fetchPageInfo = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`)
    const data = await res.json()
    console.log("fetching pageinfo")
    const pageInfo: PageInfo[] = data.pageInfo
    console.log(pageInfo)

    return pageInfo
}