import { Education} from "../typings.d";

export const fetchEducations = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getEducations`)
    const data = await res.json()
    console.log("fetching education")
    const education: Education[] = data.education
    console.log(education)

    return education
}