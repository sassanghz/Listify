import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'
import text from 'body-parser/lib/types/text'
const TodoItems = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={tick} alt='' className='w-7'></img>
        <p className='tex-slate-700 ml-4 text-[17px]'>{text}</p>
      </div>

    <img src={delete_icon} alt='' className='w-3.5 cursor-pointer'></img>


    </div>
  )
}
 
export default TodoItems
