import React from 'react'
import AnimateTxt from './AnimateTxt'

export default function Fieldset({ sectionTitle }) {

  return (
    <AnimateTxt>
      <div className='w-full md:my-12'>
          <fieldset className="border-t border-gray-400 dark:border-gray-700 mb-2">
            <legend className="mx-auto px-4 dark:text-gray-100 text-lg font-pattaya md:text-2xl">{sectionTitle}</legend>
          </fieldset>
      </div>
    </AnimateTxt>
  )
}
