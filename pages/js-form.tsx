import Link from 'next/link'
import { FormEvent } from 'react'
import { uuid } from '@sanity/uuid'
import React, { useState, useRef } from "react";

export default function Contact() {
  const initialValue = "";
  const [message, setMessage] = useState(initialValue);
  let [submitMessage, setsubmitMessage] = React.useState(initialValue);

  const form = useRef(null);

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };
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
      message: message,
    }
    const mutations = [{
      create: {
        firstName: `${data.first}`,
        lastName: `${data.last}`,
        email: `${data.email}`,
        message: `${data.message}`,
        _id: `submission.${uuid()}`,
        _type: 'submission.form',
      }
    }]
    setsubmitMessage("Message Sent!")
    setMessage("")
    form.reset();  

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
    <div className='formcontainer flex justify-center mb-5'>
      <div className="flex w-[100%] sm:w-[90%] min-h-fit rounded-lg justify-end py-5 bg-no-repeat bg-[url('https://cdn.sanity.io/images/5ivm84xc/production/28e1b9a438e1d9f8e59ed9e15ba885b1dde955f2-1309x829.png')]">
        <form ref={form} className='flex flex-col justify-center w-[97%] sm:w-[60%] md:w-[50%] pr-4'onSubmit={handleSubmit} >
            <h3 className='pl-3 text-sm'>GET IN TOUCH!</h3>
            <label htmlFor="first"></label>
            <input className="focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-xl p-1 pl-2" type="text" id="first" name="first" required  placeholder='First Name'/>
            <label htmlFor="last" ></label>
            <input className="focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-xl p-1 pl-2" type="text" id="last" name="last" required placeholder='Last Name'/>
            <label htmlFor="email"></label>
            <input className="focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-xl p-1 pl-2" type="email" id="email" name="email" required placeholder='Email'/>
            <label htmlFor="message"></label>
            <textarea className="focus:ring-emerald-300/60 focus:ring-2 h-24 m-2 rounded-xl p-1 pl-2" id="message" name="message" form="form" placeholder='Enter message' value={message} onChange={handleMessageChange}
            />
          <div className='flex flex-row justify-end'><p className='m-2 p-1'>{submitMessage}</p><button className="bg-gradient-to-r from-pink-500 to-yellow-600 hover:from-blue-500 hover:to-green-500 m-2 rounded-full pr-2 pl-2 pt-1 pb-1" type="submit" onSubmit={handleSubmit}>Submit</button></div>
        </form>
      </div>
    </div>
  )
}