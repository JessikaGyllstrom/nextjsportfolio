import { groq } from "next-sanity";
import { About, Illustrations, Skill } from "../typings.d";
import { PageInfo } from "../typings.d";
import { Art } from "../typings.d";
import { Education } from "../typings.d";
import { Courses } from "../typings.d";
import { Project } from "../typings.d";
import { sanityClient } from "../lib/sanity";
import { Hobbies } from "../typings.d";
import { AiArt } from "../typings.d";
import { Storyboard } from "../typings.d";
import { Design } from "../typings.d";

export async function getPageInfo(): Promise<PageInfo[]> {
  const pageInfo: PageInfo[] = await sanityClient.fetch(
    groq`*[_type == 'pageinfo']`
  );
  return pageInfo;
}

export async function getSkills(): Promise<Skill[]> {
  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == 'skill']`);
  return skills;
}
export async function getEducation(): Promise<Education[]> {
  const education: Education[] = await sanityClient.fetch(
    groq`*[_type == 'education']`
  );
  return education;
}

export async function getCourses(): Promise<Courses[]> {
  const courses: Courses[] =
    await sanityClient.fetch(groq`*[_type == 'courses' && popularity>= 0] | order(popularity){
  title, description, popularity}`);
  return courses;
}

export async function getArt(): Promise<Art[]> {
  const art: Art[] = await sanityClient.fetch(groq`*[_type == 'art']`);
  return art;
}
export async function getIllustrations(): Promise<Illustrations[]> {
  const illustrations: Illustrations[] = await sanityClient.fetch(groq`
    *[_type == 'illustrations']
       
  `);
  return illustrations;
}
export async function getAiArt(): Promise<AiArt[]> {
  const aiart: AiArt[] = await sanityClient.fetch(groq`*[_type == 'aiart']`);
  return aiart;
}

export async function getProjects(): Promise<Project[]> {
  const project: Project[] = await sanityClient.fetch(
    groq`*[_type == 'webbdev' && rating >= 0] | order(rating) {_id, title, name, description, project, image, video }`
  );
  return project;
}

export async function getAbout(): Promise<About[]> {
  const about: About[] = await sanityClient.fetch(groq`*[_type == 'about']{
    bio, 
    profileImg {
      asset {
        _ref
      }
    }
  }`);
  return about;
}
export async function getHobbies(): Promise<Hobbies[]> {
  const hobbies: Hobbies[] =
    await sanityClient.fetch(groq`*[_type == 'hobbies']{
    hobbies, 
    id,
    title,
    hobbieImg {
      asset {
        _ref
      }
    }
  }`);
  return hobbies;
}
export async function getStoryboards(): Promise<Storyboard[]> {
  const storyboards = await sanityClient.fetch(groq`
    *[_type == 'storyboard']{
      title,
      name,
      concepts,
      problem,
      user,
      goal,
      process,
      categories[]->{
        _id,
        title
      },
      images[]{
        image{
          asset->{
            _id,
            url
          }
        },
        description,
        rating
      }
    }
  `);

  return storyboards;
}

export async function getDesigns(): Promise<Design[]> {
  try {
    const designs = await sanityClient.fetch(groq`
      *[_type == "design"]{
        _id,
        _createdAt,
        title,
        name,
        description,
        categories[]->{
          _id,
          title
        },
        image{
          asset->{
            _id,
            url
          }
        },
        rating,
        video{
          asset->{
            _id,
            _ref,
            url
          },
          description
        }
      }
    `);

    return designs;
  } catch (error) {
    console.error("Error fetching designs:", error);
    throw error;
  }
}
