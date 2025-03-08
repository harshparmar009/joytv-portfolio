'use client'

import React from 'react';
import Image from 'next/image';
import BlurFade from '../utils/BlurFade';
import Link from 'next/link';

export default function Shops() {
  return (
    <div className='w-full h-full bg-black'>

    <div className='w-full h-[80px]'>
    <Image
    src={"/logo/wave.png"}
    width={1000}
    height={100}
    alt='logo'
    className='w-full h-full object-cover'    
    />

    </div>

      <main className="relative bg-black container mx-auto px-4 py-12">
      <h1 className="text-3xl text-[#2A55C7] uppercase font-bold text-center mb-6">- Business -</h1>
      <h1 className="text-5xl text-white font-bold text-center mb-6">What We Do</h1>
      <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-gray-200 font-semibold">
        We provide a wide range of customized streaming solutions and services, including
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "OTT Platform Development",
            description: "End-to-end custom OTT solutions for Live Streaming, Video-on-Demand (VOD), and Subscription-based services.",
            image: "/images/01.jpeg"
          },
          {
            title: "IPTV & VOD Solutions",
            description: "IPTV setup for cable operators, broadcasters, and hospitality industries. VOD (Video-On-Demand) solutions for seamless content distribution.",
            image: "/images/02.jpeg"
          },
          {
            title: "Cloud-Based Broadcasting & CDN Solutions",
            description: "Global Content Delivery Network (CDN) for smooth and buffer-free streaming. ABR (Adaptive Bitrate Streaming) for optimized quality.",
            image: "/images/03.jpeg"
          },
          {
            title: "Live TV & Video Transmission",
            description: "24/7 live broadcasting for TV channels, sports events, religious channels, and corporate streaming.",
            image: "/images/04.jpeg"
          }
        ].map((card, index) => (
          <BlurFade key={index} delay={0.25} inView>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-xl text-gray-900 font-semibold mb-3">{card.title}</h2>
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      <div className='w-full flex items-center justify-center mt-4'>
        <Link href={"/services"}>
           <button className='bg-white hover:bg-white/60 hover:text-white text-black px-6 py-[6px] rounded-lg text-lg'>
              More 
           </button>
        </Link>
      </div>
    </main>
    </div>
  );
}
