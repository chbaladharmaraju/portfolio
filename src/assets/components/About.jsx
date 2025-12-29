import React from 'react'
import { Brain, Code, Rocket } from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        {" "}
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <div className='space-y-6 '>
                    <h3> a passionate AI and Full-Stack Developer </h3>
                    <p>I am a passionate AI and Full-Stack Developer focused on building
intelligent, scalable, and user-centric web applications.</p>
                    <p>I specialize in modern frontend development and AI-driven solutions,
combining clean UI design with data-driven intelligence.</p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href='#contact' className='cosmic-button'>
                            Get In Touch
                            </a>
                        <a href='' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center'>
                            Download Resume
                        </a>
                    </div>
            </div>
            <div className='grid grid-cols-1 gap-6'>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Brain className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>AI & Data</h4>
                            <p className='text-muted-foreground'>
I explore machine learning concepts and apply AI techniques to create smarter applications that solve real-world problems.                            </p>

                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Code className='h-6 w-6 text-primary'/>

                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Full-Stack Development</h4>
                            <p className='text-muted-foreground'>
I build responsive frontends and efficient backends using modern web technologies, focusing on clean code and performance.                            </p>

                        </div>
                    </div>
                </div>
                <div className='gradient-border p-6 card-hover'>
                    <div className='flex items-start gap-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                            <Rocket className='h-6 w-6 text-primary'/>
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>Learning & Growth</h4>
                            <p className='text-muted-foreground'>
I consistently upskill, work on projects, and strengthen my problem-solving abilities to grow as a professional developer.                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </section>
  )
}

export default About