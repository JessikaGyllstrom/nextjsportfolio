import Link from 'next/link'
import { FormEvent } from 'react'
import { uuid } from '@sanity/uuid'

export default function PageWithJSbasedForm() {
  // Handle the submit event on form submit.
  const handleSubmit = async (event: FormEvent) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target as HTMLFormElement

    // Get data from the form.
    const data = {
      first: form.first.value as string,
      last: form.last.value as string,
      email: form.email.value as string,
      message: form.message.value as string,
    }
    const mutations = [{
      create: {
        firstName: `${data.first}`,
        lastName: `${data.last}`,
        phone: `${data.email}`,
        message: `${data.message}`,
        _id: `submission.${uuid()}`,
        _type: 'submission.form',
        title: 'An article'
      }
    }]

    // Send the form data to our API and get a response.
    const response = await fetch('/api/form', {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // The method is POST because we are sending data.
      method: 'POST',
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
      alert(`Is this your full name: ${result.data}`)
    
    fetch(`https://5ivm84xc.api.sanity.io/v2021-10-21/data/mutate/production`, {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY}`
      },
      body: JSON.stringify({mutations})
      })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error)) 
  }
  return (
    <div className="flex justify-center flex-col">
      <h1>
        GET IN TOUCH 
      </h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="first" placeholder='First Name'></label>
        <input className="p-2" type="text" id="first" name="first" required />
        <label className="placeholder-gray-100" htmlFor="last" placeholder='Last Name'></label>
        <input type="text" id="last" name="last" required />
        <label htmlFor="email" placeholder='Email'></label>
        <input type="email" id="email" name="email" required />
        <textarea name="message" form="userform" placeholder='Enter message'></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}