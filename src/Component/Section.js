import React from 'react';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import './section.css';

function Section() {
  const handleClick = () =>{
    console.log("Hello")
    return(
    <>
    <aside>
      <h1>Hello</h1>
    </aside>
    </>
    )
  }
  return (
    <>
      <aside>
        <div className='arrow_right_btn'>
          <button onClick={handleClick}><i class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='one'>1</div>
      </aside>



      <section>
        <div className='content_first'>
          <div className='head'>
            <h3>Technical Project Management</h3>
            <button>Submit Task</button>
          </div>

          <div className='para'>
            <h5>Explore the world of management</h5>
            <p>As a project manager , you play a important role in leading a project through initation,
              planing execution, monitoring, controlling and completion. How? Do you want to manage
              each and every step of your life?</p>
          </div>
        </div>

        <div className='flex'>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
<div className='last_icons'>
<i class="fa-solid fa-question"></i>
<i class="fa-solid fa-people-line"></i>
<i class="fa-solid fa-calendar-days"></i>
</div>
      </section>
    </>
  )
}

export default Section