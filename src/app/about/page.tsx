'use client';

import Footer from '@/components/pages/footer';
import Navbar from '@/components/pages/Navbar';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className='w-full h-full bg-black'>
      <Navbar/>
      <section className="bg-black flex flex-col items-center justify-center px-6 pt-28">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Joy TV India Pvt. Ltd. is a leading media and entertainment company specializing in
          cutting-edge OTT (Over-the-Top) streaming solutions, IPTV setups, and broadcasting
          technologies. With a strong foundation in the streaming industry, we are committed to
          revolutionizing the way content is delivered and consumed.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        <div className="p-6 bg-white bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To innovate and redefine the digital entertainment landscape by providing seamless and
            high-quality streaming solutions to users worldwide.
          </p>
        </div>

        <div className="p-6 bg-white shadow-xl rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be the most trusted and pioneering OTT and broadcasting solutions provider,
            bridging the gap between technology and entertainment.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-8 max-w-6xl">
        <div className="md:w-1/2">
          <Image
            src="/images/06.jpeg"
            alt="Our Team"
            width={500}
            height={300}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-white mb-4">Meet Our Team</h2>
          <p className="text-gray-400">
            Our team consists of industry experts and passionate innovators dedicated to pushing the
            boundaries of digital content delivery. Together, we bring creativity and technology
            together to shape the future of entertainment.
          </p>
        </div>
      </div>
    </section>

    <Footer/>
    </div>
  );
}
