"use client"

import Link from 'next/link';
// import { Element } from 'react-scroll'
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // <Element name='home'>
    //  <div className="pb-[100px]">
    //   <video
    //     className="absolute top-0 left-0 w-full h-full object-cover"
    //     src="/videos/video2.mp4" // Add your video source here
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //   />  
    //   </div>

    
    //   <div className="absolute text-white gap-[10px] text-center inset-0 flex flex-col items-center justify-center">
        
    //       <h1 className= "text-4xl px-[0.75rem] sm-text-6xl md:text-5xl lg:text-6xl mb-4 ">
    //        The Art and Brilliance of Diamonds
    //       </h1>
       

    //     <p className="text-md px-[1.4rem] font-semibold md:px-[6rem] lg:px-[7rem] md:text-md lg:text-xl mb-8">With a legacy of over three decades in the diamond industry, 'your company' is India's leading 
    //       manufacturer of cut and polished diamonds.</p>
       
    //     <Link
    //       href="#"
    //       className="bg-transparent text-white px-6 py-4 border-[1px] border-solid border-white
    //       font-semibold hover:bg-gray-900 
    //       transition-colors duration-300"
    //     >
    //       Explore Our Diamonds →
    //     </Link>
     
    //   </div>
    //   {/* <div className="container relative mx-auto px-4 py-12 flex items-center justify-center">
    //   <div className='flex items-center justify-between md:flex-row flex-col relative '>
    //     <section className='md:w-[30rem] gap-[15px] flex items-center flex-col bg-red-400' >
    //       <h1 className='md:text-6xl text-3xl' >I'm Ares <br /> i am <span>Frontend Developer</span></h1>
    //       <p className='px-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et neque eaque, iure minus itaque obcaecati sint rem fugiat suscipit temporibus quos nihil doloremque. Reiciendis asperiores consequatur labore repudiandae tempore!
    //       </p>
    //       <button className='text-3xl border-solid border-[1px] border-black px-[10px] rounded-2xl'>Hire Me</button>
    //     </section>

    //     <section className=''>
          
    //         <Image
    //          src="/images/01.png"
    //          alt="Various diamond cuts on display"
    //          width={600}
    //          height={600}
    //          className='w-full h-auto'
    //         />
          
    //     </section>
    //   </div>
    //   </div> */}
    // </Element>
    <div>
       <section className="relative flex items-center justify-center h-screen bg-black text-white px-6 text-center">
      <div className="max-w-4xl">
        <motion.p 
          className="text-sm uppercase tracking-wide text-gray-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Joy TV India Pvt. Ltd  //  India
        </motion.p>

        <motion.h1 
          className="text-6xl font-bold leading-tight mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Cutting-Edge OTT Streaming,<br />Broadcasting
          Technologies.
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We launch <span className="text-green-400">MVPs</span>, redefine <span className="text-blue-400">existing products</span>, & continuously dive into <span className="text-green-400">customer development</span>
        </motion.p>
      </div>
    </section>
    </div>
  )
}