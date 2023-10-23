import React from 'react'

export default function Fieldset({ sectionTitle }) {

  return (
    <div className='mx-4 w-full'>
        <fieldset className="border-t border-gray-700 mb-2">
          <legend className="mx-auto px-4 text-white text-lg font-pattaya">{sectionTitle}</legend>
        </fieldset>
    </div>
  )
}
