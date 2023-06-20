'use client'

import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

const FormContact = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData: Inputs) => {
    window.location.href = `
      mailto:fabrizziolopresti1999@gmail.com
      ?subject=${formData.subject}
      &body=Hy Fabrizio, my name is ${formData.name} and I would like to talk about: ${formData.message}. You can contact me at ${formData.email}.
    `
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 w-full md:w-fit mx-auto px-4 md:px-0'
    >
      <div className='flex flex-col md:flex-row gap-2'>
        <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
        <input {...register('email')} className='contactInput' placeholder='E-Mail' type="email" />
      </div>
      <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
      <textarea {...register('message')} className='contactInput' placeholder='Your message' />
      <button
        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default FormContact