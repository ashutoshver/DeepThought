import React from 'react'
import './card.css'

function Card3() {
  return (
    <>
    <div className='container'>
    <h3>Structure You Pointers</h3>
    <p><b>Description:</b> Write a 400-500 word article, from your thread. Publish your understanding, 
    and showcase your learning to the entire world.</p>


<div className='content_structure'>
    <div className='title'>
      <h4>Title</h4>
      <input type='text'></input>
    </div>
    <h4>Content</h4>
    <div className='full_content'>
    <div className='content'>
      <div className='list'>
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Insert</li>
          <li>Format</li>
          <li>Tools</li>
          <li>Table</li>
          <li>Help</li>
        </ul>
      </div>
      <div className='icon_para'>
      <i class="fa-solid fa-arrow-rotate-left"></i>
      <i class="fa-solid fa-arrow-rotate-right"></i>
      <i class="fa-solid fa-maximize"></i>
      <i class="fa-solid fa-mountain-sun"></i>
      <select>
        <option>Paragraph</option>
      </select>
      <i class="fa-solid fa-ellipsis"></i>
      </div>
    </div>
    </div>

    
    </div>



    </div>
    </>
  )
}

export default Card3