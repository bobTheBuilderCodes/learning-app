import React from 'react'


interface IButton{
  label?: string,
  type?: string,
  isRequired?: boolean,
  value: string
  name: string
  onChange: (e : React.ChangeEvent<HTMLInputElement>)=> void
}
const StudyInput = ({label, type = 'text', isRequired = true , value, name, onChange}: IButton) => {
  return (
    <div>
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <input
        id={value}
        name={name}
        onChange={onChange}
        type={type}
        autoComplete="email" placeholder="Enter your email"
        required={isRequired}
        className="block w-full rounded-md border-0 py-1.5 indent-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
  )
}

export default StudyInput