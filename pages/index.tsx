import Contact from './js-form';
import Hero from '../components/Hero'
import { sanityClient, urlFor } from '../lib/sanity';
import imageUrlBuilder from '@sanity/image-url'
import { loadData } from '../lib/loadData';
const builder = imageUrlBuilder(sanityClient)
import { Icon } from "react-3d-icons";
import { github } from "react-3d-icons";

function Home( {skills} ) {
  return (
    <div> 
      <Hero />
      <Skills skills={skills} />
      <Contact />
    </div>
  )
}
function Skills({ skills }) {
  return (
      <div className='py-10'>
        <fieldset className="border-t border-gray-700 mb-10">
          <legend className="mx-auto px-4 text-white text-lg italic">Skills</legend>
        </fieldset>
        <div className='flex justify-center mx-auto h-[80%]  md:mx-5'>
          <div className='flex items-center flex-col md:flex-row md:w-[70%]'>
            {skills.map((skill, id) => 
              <div key={id} className='flex flex-col m-3 w-[60%] sm:w-[40%] md:w-[70] lg:w-[60%] rounded-xl bg-gray-800 bg-opacity-60  shadow-purple-800 shadow-[0_0_10px_0] hover:scale-[1.02] transition ease-in-out delay-850'>
                <img className="cover rounded-t-xl" src={urlFor(`${skill.image.asset._ref}`).url()}/>
                <div className='py-2 px-3'>
                  <h3 className='text-xs font-bold' > { skill.title }</h3>
                    {skill.description.map((skill, id) => 
                      <p key={id} className=''>{skill}</p>
                    )}
                </div>    
              </div>
            )} 
          </div>
        </div>
    </div>
  )
}
export default Home;

export async function getStaticProps() {
  const skills = await loadData(`*[_type == 'skills']`)
  return { props: {  skills }}
}