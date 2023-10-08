import React, { useState, useRef } from "react";
import axios from 'axios';

export default function Contact() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
      });
    } else {
        info: { error: true}
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xnqyqqgk',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, message has been sent!',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div className='contact mb-8' id="contact">
       <fieldset className="border-t border-gray-700 mb-10">
        <legend className="mx-auto px-4 text-white text-lg italic">Contact</legend>
      </fieldset>
      <div className='formcontainer flex justify-center mb-5 min-h-fit'>
        <div className="flex w-[100%] sm:w-[90%] md:w-[70%] rounded-lg justify-end py-5]  shadow-purple-800 shadow-[0_0_10px_0] hover:scale-[1.02] transition ease-in-out delay-850">      
        <form  className='flex flex-col justify-center w-[97%] sm:w-[60%] md:w-[50%] pr-4' onSubmit={handleOnSubmit}>
          <h3 className='pl-3 text-sm'>GET IN TOUCH!</h3>
          <input
            className="focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-sm pl-2"
            id="firstname"
            type="text"
            name="firstname"
            onChange={handleOnChange}
            required
            value={inputs.firstname}
            placeholder='First Name'
          />
          <input
            className="focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-sm pl-2"
            id="lastname"
            type="text"
            name="lastname"
            onChange={handleOnChange}
            required
            value={inputs.lastname}
            placeholder='Last Name'
          />
          <input
            className="autofill:!bg-slate-400 focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-sm p-1 pl-2 "
            id="email"
            type="email"
            name="_replyto"
            onChange={handleOnChange}
            required
            value={inputs.email}
            placeholder='Email'
          />
          <textarea
            className="focus:ring-emerald-300/60 focus:ring-2 m-2 rounded-xl p-1 pl-2 text-xs"
            id="message"
            name="message"
            onChange={handleOnChange}
            required
            value={inputs.message}
          />
           <div className='flex flex-row items-center justify-end'>
           {status.info.error && (
          <div className="error">Error: {status.info.msg}</div>
        )}
        {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            <button className="m-2 rounded-full pr-2 pl-2 pt-1 pb-1" type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? 'Submit'
                  : 'Submitted'
                : 'Submitting...'}
            </button>
          </div>
        </form>
        </div>
      </div>
  </div>  
)}