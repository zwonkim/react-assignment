import React from 'react'
import {AiOutlineComment} from 'react-icons/ai'
import {AiOutlineShareAlt} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
import { cls, liStyle } from '../17'

const Post = ({post}) => {
  const {nickname, title, content} = post
  return (
    <section className='my-1 flex w-3/4 gap-2 m-auto border border-1 border-slate-300 rounded-md'>
      <ul className='w-1/4 py-2 flex flex-col items-center gap-2 text-slate-500 bg-slate-300 rounded-l-md'>
        <li className={cls(...liStyle) + 'flex flex-col'}><FiThumbsUp/><span className='text-sm'>24 K</span></li>
        <li className={cls(...liStyle)}><FiThumbsDown/></li>
      </ul>
      <div className='flex flex-col gap-2'>
        <p className='text-zinc-400 text-sm'>Posted by {nickname} just now</p>
        <h1 className='font-bold text-xl'>{title}</h1>
        <div className='leading-8 my-4 pr-2'>{content}</div>
        <ul className='flex gap-2 text-slate-400'>
          <li className={cls(...liStyle)}>
            <AiOutlineComment/> 
            <span>Comments 4</span>
          </li>
          <li className={cls(...liStyle)}>
            <AiOutlineShareAlt/> 
            <span>share</span>
          </li>
          <li className={cls(...liStyle)}>
            <AiOutlineDelete/> 
            <span>Delete</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Post
