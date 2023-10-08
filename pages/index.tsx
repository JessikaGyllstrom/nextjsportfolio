import Hero from '../components/Hero'
import {AnimateComponent} from '../components/AnimateComponent';
import { GetStaticProps } from 'next';
import Footer from '../components/Footer';
import { Skill } from './typings.d';
import { PageInfo } from './typings.d';

import { fetchSkills } from '../utils/fetchSkills';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchEducations } from '../utils/fetchEducations';
import { fetchCourses } from '../utils/fetchCourses';

import  Header from '../components/Header';
import Skills from '../components/Skills';
import { Education } from './typings.d';
import Educations from '../components/Education';
import EdImg from '../components/EdImg';
import Fieldset from '../components/Fieldset';
import { XaxisAnimate } from '../components/Xanimate';
import { Course } from '../components/Course';
import { Courses } from './typings.d';
import { count } from 'console';

type Props = {
  skills: Skill[];
  pageInfo: PageInfo[];
  education: Education[];
  courses: Courses[];
}

const Home = ({ skills, education, pageInfo, courses }: Props) => {
  console.log(education)
  return (
    <div className='min-h-[100vh] content-center'>
        <AnimateComponent>
          <div className='flex h-screen'>
              <Hero pageInfo={pageInfo} />
          </div>
        </AnimateComponent>

      <AnimateComponent>
              <div className='w-screen justify-center m-8 p-8'>

          <Skills skills={skills} />
          </div>
          </AnimateComponent>

      <AnimateComponent>
        {/* education section */}
        <div className='flex w-screen h-screen sitems-center m-8 p-8'>
          <div>
        <Fieldset sectionTitle={"Education"} />
            <div className="flex justify-center items-center h-full">
              <div className='flex w-[90%]'>
            
              <div className='w-[50%] mr-2'>
                <EdImg pageInfo={pageInfo} />
              </div>
              <div className='flex flex-col items-center justify-center w-[50%] ml-2'>

              <Educations education={education} />
              <Course courses={ courses } />
            </div>
            </div>
            </div>
            </div>

        </div>
                </AnimateComponent>
</div>


  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills: Skill[] = await fetchSkills()
  const pageInfo: PageInfo[] = await fetchPageInfo()
  const education: Education[] = await fetchEducations()
  const courses: Courses[] = await fetchCourses()
  // const art: Art[] = await fetchArt()


  console.log("fetching from indexpage")
  return {
    props: {
      skills, 
      pageInfo,
      education, 
      courses
    },
    revalidate: 10,
  } 
}