import { Art } from "../pages/api/typings.d";

export const fetchCourses = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getArt`)
    const data = await res.json()
    console.log("fetching art")
    const art: Art[] = data.art
    console.log(art)

    return art
}