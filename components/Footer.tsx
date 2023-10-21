import { PageInfo } from '../pages/api/typings.d'
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { urlFor } from '../lib/sanity'

export default function Footer ({ pageInfo }) {

  return (
    <div className="sticky top-[100vh] border border-gray-700">
      {/* <div className="flex items-center justify-center mt-2">
        <div className='flex flex-col items-center w-full'> 
          {pageInfo.map((info, idx) =>
            <div key={idx} >
              <div className='w-full flex justify-center'>
                <img 
                  src={urlFor(`${info.logoImage.asset._ref}`).url()} 
                  alt={info.logoImage.title}
                  className={'w-[6%]'}
                />
              </div>
              <div className='social flex flex-row justify-center pt-1 mt-3 mb-2'>
                <a href={info.githubLink}><BsGithub size={20} className='icon mx-2 cursor-pointer transition duration-300 ease-in-out'><p>{info.githubLink}</p></BsGithub></a>
                <a href={info.linkedinLink}><BsLinkedin size={20} className='icon mx-2 cursor-pointer transition duration-300 ease-in-out'></BsLinkedin></a>
                <div className="cursor-pointer" onClick={(e) => { window.location.href = 'mailto:jessikagyllstron@protonmail.com'; }}>
                  <GrMail size={23} className='icon mx-2 transition duration-300 ease-in-out'></GrMail>
                </div>
              </div>
              <div className='flex w-full bg-neutral-900/30 justify-center py-1'>
                <p className='text-gray-500 text-[0.6rem]'>&copy; 2023 Jessika Gyllström </p>
              </div>
            </div>
            )}   
          </div>
      </div>  */}
    </div>
  )
}
