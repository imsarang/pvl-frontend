import React from 'react'
import './style.css'
import { categoryContent } from '../general'
import IdvlCategory from './IdvlCategory'
const Category = () => {
  return (
    <div className='categoryMain'>
        {
            categoryContent.map((item)=>{
                return <div className='categoryIdvl'>
                   <IdvlCategory name={item}/>     
                </div>
            })
        }
    </div>
  )
}

export default Category