import React from 'react'

const AddPost = ({setAddPost}) => {
  const handleClick = () => setAddPost(false)
  return (
    <div className='absolute top-12 left-20 z-20 bg-white w-4/5'>
      <ul className='flex justify-between mb-1 p-2'>
        <li onClick={handleClick} className='text-sky-600'>Cancel</li>
        <li>Create a Post</li>
        <li className='text-sky-600'>Post</li>
      </ul>
      <div>
        <input type='text' placeholder='닉네임' className='w-1/2 indent-1'/>
        <input type='password' placeholder='패스워드' className='w-1/2 indent-1'/>
      </div>
      <input type='text' placeholder='제목' className='w-full h-10 indent-1'/>
      <textarea placeholder='내용' className='w-full h-80 indent-1 resize-none'/>
    </div>
  )
}

export default AddPost
