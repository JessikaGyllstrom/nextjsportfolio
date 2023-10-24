import React from 'react'

export default function Fieldset({ sectionTitle }) {

  return (
    <div className='w-full'>
        <fieldset className="border-t border-gray-400 dark:border-gray-700 mb-2">
          <legend className="mx-auto px-4 dark:text-white text-lg font-pattaya">{sectionTitle}</legend>
        </fieldset>
    </div>
  )
}
