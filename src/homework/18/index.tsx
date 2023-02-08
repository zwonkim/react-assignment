import { useState } from 'react';
import "./tailwind.css";
import Post from './Post';
import AddPost from './AddPost';
import { posts } from '../17/content';
import { cls, addItemBtn } from '../16';
import {AiOutlinePlus} from 'react-icons/ai'

const Homework = () => {
  const [addPost, setAddPost] = useState(false)
  const handleClick = () => setAddPost(prev => !prev)
  return (
    <div className='relative'>
      <div>
        {
          posts.map((post, index) => <Post key={index} post={post}/>)
        }
        <button onClick={handleClick} className={cls(...addItemBtn, 'z-20')}>
          <AiOutlinePlus className="fill-white"/>
        </button>
        {addPost && <AddPost setAddPost={setAddPost}/>}
      </div>
      <div className={addPost ? 'fixed top-0 right-0 w-full h-full bg-slate-800 opacity-80 z-10' : ''}></div>
      </div>
  );
};

export default Homework;
