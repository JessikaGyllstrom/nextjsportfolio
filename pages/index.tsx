import Hero from '../components/Hero'
import { AnimateComponent } from '../components/AnimateComponent';
import { GetStaticProps } from 'next';
import { Skill } from './api/typings.d';
import { PageInfo } from './api/typings.d';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchEducations } from '../utils/fetchEducations';
import { fetchCourses } from '../utils/fetchCourses';
// import { fetchWebbdev } from '../utils/fetchWebbdev';



import Skills from '../components/Skills';
import { Education } from './api/typings.d';
import Educations from '../components/Education';
import EdImg from '../components/EdImg';
import Fieldset from '../components/Fieldset';
import { XaxisAnimate } from '../components/Xanimate';
import { Course } from '../components/Course';
import { Courses } from './api/typings.d';
import { count } from 'console';
import { Component } from 'react';
import Layout from '../components/Layout';
import { Art } from './api/typings.d';

type Props = {
  skills: Skill[];
  pageInfo: PageInfo[];
  education: Education[];
  courses: Courses[];


}

const Home = ({ skills, education, pageInfo, courses }: Props) => {
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
      <Fieldset sectionTitle={"Skills"}/>

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
      {/* <Footer pageInfo={pageInfo}/> */}
    </div>

  )
}

export default Home;

// getStaticProps runs only on the server-side, never on client-side. 
export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills()
  const pageInfo: PageInfo[] = await fetchPageInfo()
  const education: Education[] = await fetchEducations()
  const courses: Courses[] = await fetchCourses()


  // const art: Art[] = await fetchArt()
    // const webbdev: Webbdev[] = await fetchWebbdev()

  
  return {
    props: {
      skills, 
      pageInfo,
      education, 
      courses
      // art
      // webbdev
    },
    revalidate: 10,
  } 
}