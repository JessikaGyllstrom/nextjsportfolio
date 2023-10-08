
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="sticky top-[100vh]">
      <fieldset className="border-t border-gray-700 mb-5">
      </fieldset>
      <div className="md:flex md:items-center md:justify-center">
        <footer className='flex max-h-2 justify-center pb-6'>
          <p>&copy; 2023 Jessika Gyllström </p>
        </footer> 
      </div>
  </div>
  )
}
export default Footer