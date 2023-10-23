import { Courses } from "../typings.d";

export const fetchCourses = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getCourses`)
    const data = await res.json()
    console.log("fetching courses")
    const courses: Courses[] = data.courses
    console.log(courses)

    return courses
}