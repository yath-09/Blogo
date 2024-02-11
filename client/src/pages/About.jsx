import CallToAction from '../Components/CallToAction'

const About = () => {
  return (
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3 '>
      <div className='min-h-10xl'>
        <h1 className='text-5xl font-semibold bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-200 text-transparent bg-clip-text' >About</h1>
      </div>
      
       <p className='text-md text-gray-500'>
             Welcome to Blogo! This blog was created by Yatharth 
              as a personal project to share his thoughts and ideas with the
              world. Yatharth is a passionate developer who loves to make websites and interact with the technology
      </p>
      <CallToAction />
    </div>
  )
}

export default About