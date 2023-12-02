import { createClient, groq } from "next-sanity"
import { About, Skill } from '../typings.d'
import { PageInfo } from "../typings.d"
import { Art } from '../typings.d'
import { Education } from '../typings.d'
import { Courses } from "../typings.d"
import { Webbdev } from "../typings.d"
import { sanityClient } from '../lib/sanity'

export async function getPageInfo(): Promise<PageInfo[]> {
  console.log("getting pageinfo")

  const pageInfo: PageInfo[] = await sanityClient.fetch(groq`*[_type == 'pageinfo']`)
  return pageInfo
}
export async function getSkills(): Promise<Skill[]> {
  console.log("getting skills")

  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == 'skill']`)
  return skills
}
export async function getEducation(): Promise<Education[]> {
  console.log("getting education")

  const education: Education[] = await sanityClient.fetch(groq`*[_type == 'education']`)
  return education
}

export async function getCourses(): Promise<Courses[]> {
  console.log("getting courses")

  const courses: Courses[] = await sanityClient.fetch(groq`*[_type == 'courses' && popularity>= 0] | order(popularity){
  title, description, popularity}`)
  return courses
}

export async function getArt(): Promise<Art[]> {
  console.log("getting art")

  const art: Art[] = await sanityClient.fetch(groq`*[_type == 'art']`)
  return art
}
export async function getWebbdev(): Promise<Webbdev[]> {
  console.log("getting webbdev")

  const webbdev: Webbdev[] = await sanityClient.fetch(groq`*[_type == 'webbdev' && rating >= 0] | order(rating) {_id, title, description, project, image, video }`)

  return webbdev
}

export async function getAbout(): Promise<About[]> {
  console.log("getting about")


  const about: About[] = await sanityClient.fetch(groq`
  *[_type == 'about']{
    bio, 
profileImg{
  asset {
    _ref
  }
}  }
   `)
  



  console.log(about)

  return about
}
