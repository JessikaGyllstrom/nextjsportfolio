// "use client"; // This is a client component 👈🏽
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

import Animation  from '../components/AnimateL';
import { useContext } from 'react';
import AnimateR from '../components/AnimateR';



export default async function Home() {


  const skills = await getSkills();
  const pageInfo = await getPageInfo();
  const education = await getEducation();
  const courses = await getCourses();



  return (
    <div> 
      {/* hero section */}
      <Animation>
        <div>
          <div className='flex'>
            <Hero pageInfo={pageInfo} />
          </div>
        </div>
        {/* skills section */}
        <div className='w-screen justify-center my-8'>
          <Fieldset sectionTitle={"Skills"} />
           <Skills skills={skills} /> 
        </div>
        {/* education section */}
        <div className='flex w-screen justify-center items-center md:mb-20'>
          <div className=''>
            <Fieldset sectionTitle={"Education"} />
            <div className="flex justify-center items-center lg:my-5">
              <div className='flex flex-col md:flex-row justify-center items-center w-[90%] lg:w-[85%]'>
                <div className='w-[50%] mb-6 lg:mb-0 lg:mr-2'>
                 <EdImg pageInfo={pageInfo} />
                </div>
                <div className='flex flex-col items-center justify-center w-[100%] md:w-[50%] md:ml-4'>
                  <Educations education={education} />
                    <Course courses={courses} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Animation>
    </div>
  )

}
