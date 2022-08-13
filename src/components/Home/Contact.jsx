import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    emailjs.send('service_9sfjn6i', 'template_y8iv969', data, 'kW4mdAe06veRC0U_t').then((res) => {
      console.log({ success: true })
      reset()
    }).catch((err) => console.log(err));
  };
  return (
    <div id='contact'>
      <h2 className='mt-20 pb-2 border-b w-fit'>Contact me to hire</h2>
      <form onSubmit={handleSubmit(onSubmit)}
        className='space-y-4 mt-4 md:w-4/5 lg:w-2/5 mx-auto'>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="name">Enter full name</label>
          <input
            className='h-9 rounded border p-2 focus:outline-blue-300'
            {...register("name", { required: true })} />
          {errors.name?.type === 'required' && "name is required"}
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="name">Enter Email Adress</label>
          <input
            className='h-9 rounded border p-2 focus:outline-blue-300'
            {...register("mail", { required: "Email Address is required" })} />
        </div>
        <div className='flex flex-col gap-y-2'>
          <label htmlFor="message">Write message</label>
          <textarea
            className='border rounded p-2 focus:outline-blue-300'
            name="message" id="message" rows="5">

          </textarea>
        </div>
        <button className='bg-blue-600 text-white px-6 h-9 rounded hover:bg-blue-700 transition-colors'>send</button>
        <p>{errors.mail?.message}</p>
      </form>
    </div>
  );
};

export default Contact;