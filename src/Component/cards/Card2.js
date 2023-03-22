import React from 'react'
import './card.css'

function Card2() {
  return (
    <>
    <div className='container'>
    <h3>Threadbuild</h3>
    <p><b>Description:</b> Watch the vedio and thread build, and jot out key threads while watching the vedio.</p>
    <div className='card2_content'>
        <div className='thread'>
        <i class="fa-solid fa-angle-up"></i>
        <h5>Thread A</h5>
        </div>
        <div className='sub'>
            <div className='textarea'>
                <p>Sub Thread 1</p>
                <textarea placeholder='Enter text here'/>
            </div>
            <div className='textarea'>
                <p>Sub Thread 1</p>
                <textarea placeholder='Enter text here'/>
            </div>
        </div>

        <div className='select'>
          <div className='four_icon'>
          <i class="fa-solid fa-lightbulb"></i>
          <i class="fa-solid fa-message"></i>
          <i class="fa-solid fa-clipboard-question"></i>
          <i class="fa-brands fa-canadian-maple-leaf"></i>
          </div>
          <div className='select_btn'>
            <select>
              <option>Select Category</option>
            </select>
            <select>
              <option>Select Process</option>
            </select>
          </div>
        </div>
        <button className='sub_thread'>+ Sub thread</button>
        <div className='textarea_1'>
                <p>Sub Thread 1</p>
                <textarea placeholder='Enter text here'/>
            </div>


    </div>
    </div>
    </>
  )
}

export default Card2