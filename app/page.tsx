// import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from 'next/link'
import { AnimateComponent } from '../components/AnimateComponent';
import Fieldset from '../components/Fieldset';
import Skills from '../components/Skills';
import Hero from '../components/Hero';
import EdImg from '../components/EdImg';
import Educations from '../components/Education';
import { Course } from '../components/Course';

import { getPageInfo, getSkills, getEducation, getCourses } from '../lib/sanity.utils';
import Footer from '../components/Footer';

export default async function Home() {
const skills = await getSkills();
const pageInfo = await getPageInfo();
const education = await getEducation();
const courses = await getCourses();

  return (
    <div className='content-center'>
      <div className='flex justify-center items-center h-[90vh]'>
        <AnimateComponent>
          <div className='flex'>
            <Hero pageInfo={pageInfo} />
          </div>
        </AnimateComponent>
      </div>
      <AnimateComponent>
        <div className='w-screen justify-center m-8 p-8'>
          <Fieldset sectionTitle={"Skills"} />
           <Skills skills={skills} /> 
        </div>
      </AnimateComponent>
      <AnimateComponent>
        {/* education section */}
        <div className='flex w-screen justify-center items-center  p-8'>
          <div className='h-screen'>
            <Fieldset sectionTitle={"Education"} />
            <div className="flex justify-center items-center h-full my-5">
              <div className='flex justify-center items-center w-[85%]'>
                <div className='w-[50%] mr-2'>
                 <EdImg pageInfo={pageInfo} />
                </div>
                <div className='flex flex-col items-center justify-center w-[50%] ml-2'>
                  <Educations education={education} />
                  <Course courses={courses} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateComponent>
      <Footer pageInfo={pageInfo}/>
    </div>
  )

}
