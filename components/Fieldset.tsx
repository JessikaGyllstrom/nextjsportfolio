import React from 'react'

type Props = {
  sectionTitle: string
}

function Fieldset({ sectionTitle }) {
  return (
    <div className='mx-4 w-full'>
        <fieldset className="border-t border-gray-700 mb-2">
          <legend className="mx-auto px-4 text-white text-lg italic">{sectionTitle}</legend>
        </fieldset>
    </div>
  )
}

export default Fieldset