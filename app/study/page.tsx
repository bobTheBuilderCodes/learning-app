"use client"

import React, { FormEvent } from "react"

import StudyAppButton from "@/components/StudyAppButton"
import StudyInput from "@/components/StudyInput"
import { ChangeEvent } from "react"

export default function Example() {

  const [formData , setFormData] = React.useState({fullname: "", email: ""})

  const {fullname, email} = formData

  const onChange = (e : ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const submitForms = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form event", formData)
  }
    return (
      <>
       
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={submitForms
            }>
              <StudyInput value={fullname} name={"fullname"} type="text" label="Full name" onChange={onChange}/>
              <StudyInput value={email} name="email" onChange={onChange} type="password " />
  
              
  
              <StudyAppButton content="Sign in to my account" />
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
  