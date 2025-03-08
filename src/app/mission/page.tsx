'use client';

import Footer from '@/components/pages/Footer';
import Navbar from '@/components/pages/Navbar';
import Image from 'next/image';

export default function OurMission() {
  return (
    <div className='w-full h-full bg-black'>
      <Navbar/>
      
    <section className="bg-black min-h-screen flex flex-col items-center justify-center px-6 pt-28">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">Our Mission</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          At Joy TV India, our mission is to empower content creators, broadcasters, and
          businesses with state-of-the-art digital streaming solutions. We aim to bridge the gap
          between technology and entertainment by delivering seamless, high-quality streaming
          experiences to audiences worldwide.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-8 max-w-6xl">
        <div className="md:w-1/2">
          <Image
            src="/images/02.jpeg"
            alt="Our Mission"
            width={500}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-4">Why It Matters</h2>
          <p className="text-gray-300">
            The future of media lies in digital transformation. We are dedicated to enabling
            businesses and creators to reach global audiences with cutting-edge technology,
            ensuring superior content delivery, accessibility, and engagement.
          </p>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
