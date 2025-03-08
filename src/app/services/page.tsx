'use client';

import Footer from '@/components/pages/footer';
import Navbar from '@/components/pages/Navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'SCTE 35 Integration',
    description: 'Seamless Ad Insertion & Content Monetization with real-time analytics.',
    image: '/images/09.jpeg',
  },
  {
    title: 'Digital Marketing for News & Broadcasting',
    description: 'Maximize reach, build brand authority with strategic digital marketing solutions.',
    image: '/images/02.jpeg',
  },
  {
    title: 'OTT Distribution',
    description: 'Expand your reach with global CDN integration and multi-platform support.',
    image: '/images/04.jpeg',
  },
  {
    title: 'Broadcast Beyond Boundaries',
    description: 'Break geographical limits with cloud-based and IP-based broadcasting solutions.',
    image: '/images/06.jpeg',
  },
  {
    title: 'News Portal Development',
    description: 'Develop feature-rich news websites optimized for real-time reporting and high traffic.',
    image: '/images/04.jpeg',
  },
  {
    title: 'Smart TV App Development',
    description: 'Innovative TV experiences for platforms like Android TV, Apple TV, Roku, and more.',
    image: '/images/08.jpeg',
  },
  {
    title: 'Live Streaming Services',
    description: 'Deliver real-time content with ultra-low latency and multi-platform distribution.',
    image: '/images/03.jpeg',
  },
];


export default function OurServices() {
  return (
   <div className='w-full h-full bg-black'>
    <Navbar/>
     <section className="bg-black min-h-screen pt-28 px-6 flex flex-col items-center">
      <motion.h1 
        className="text-4xl font-bold text-white mb-6" 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}>
        Our Services
      </motion.h1>
      
      <motion.p 
        className="text-lg text-white text-center max-w-4xl mb-12"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}>
        At Joy TV India Pvt. Ltd., we specialize in providing end-to-end solutions for digital broadcasting, OTT platforms, and streaming services.
      </motion.p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: index * 0.2, duration: 0.6 }}>
            <Image 
              src={service.image} 
              alt={service.title} 
              width={300} 
              height={200} 
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer/>
   </div>
  );
}
