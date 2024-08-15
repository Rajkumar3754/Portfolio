import React from 'react'

import aboutimg from '../assets/about.png'

const About = () => {
  const config = {
    line1: " A Full-Stack Web Developer with a passion for designing sleek websites using React.js and Tailwind CSS.",
  line2: "I'm proficient in frontend tools like React.js, Redux, and Tailwind CSS, creating smooth and responsive user interfaces.",
  line3: "I also specialize in backend development, leveraging Node.js, Express.js, and MongoDB to build reliable and efficient applications."
  }

  
  return (
    <section className='flex flex-col  md:flex-row bg-secondary px-5'id='about'>
        <div className='md:w-1/2 py-5'>
            <img src={aboutimg} alt="" />
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5' >{config.line3}</p>
            </div>
        </div>
      
    </section>
  )
}

export default About
