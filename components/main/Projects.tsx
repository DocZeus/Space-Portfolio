import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'
            id="projects"
            >
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/NextWebsite.png'
                    title="Modern Next.js Portfolio"
                    description='A modern, responsive portfolio website built using Next.js and Tailwind CSS.'
                />
                <ProjectCard
                    src='/CardImage.png'
                    title="Interactive Website Cards"
                    description='A collection of interactive website cards made with HTML, Tailwind CSS, JavaScript and Next.js'
                />
                <ProjectCard
                    src='/SpaceWebsite.png'
                    title="Space Themed Website"
                    description='A space themed website that uses Framer-Motion, Three-js for the best user experience.'
                />
            </div>
        </div>
    )
}

export default Projects