import React from 'react';
import webimg1 from '../assets/bookstoree.jpg';
import webimg2 from '../assets/esate.jpg';
import webimg3 from '../assets/website-blog.jpg';

const Project = () => {
  const config = {
    projects: [
      {
        image: webimg1,
        description: 'A Bookstore Website. Built with MERN Stack',
        link: 'https://book-storing-app.vercel.app/'
      },
      {
        image: webimg2,
        description: 'RealEstate Website. Built with MERN stack',
        link: 'https://realestate-fullstack-app.onrender.com/'
      },
      // {
      //   image: webimg3,
      //   description: 'Food-Ecommerce website with MERN Stack',
      //   link: ''
      // }
    ]
  }

  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='project'>
      <div className='w-full flex flex-col justify-center px-5'>
        <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
        <p>Here are a few of my top projects, crafted with MERN stack and Tailwind CSS.</p>
      </div>

      <div className="w-full py-5">
        <div className="flex flex-col md:flex-row px-10 gap-5 justify-center">
          {config.projects.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-[300px] h-[200px]">
              <img src={project.image} className="w-full h-full  justify-center object-center" alt={project.description} />
              <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 hover:opacity-100 duration-500 flex flex-col items-center justify-center p-4">
                <p className="text-center mb-4">{project.description}</p>
                <a href={project.link} className="mt-auto">
                  <div className=' mb-8'>
                    <button className="bg-white btn py-2 px-4 rounded">View Project</button>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
