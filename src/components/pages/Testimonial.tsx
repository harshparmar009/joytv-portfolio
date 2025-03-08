"use client"

import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { User, Star } from 'lucide-react';

const testimonials = [
  { name: 'John Doe', feedback: 'This platform has revolutionized our IPTV experience!' },
  { name: 'Jane Smith', feedback: 'Seamless streaming and top-notch support!' },
  { name: 'Michael Brown', feedback: 'Cloud-based broadcasting at its best.' },
  { name: 'Emily Davis', feedback: 'Reliable, scalable, and secure streaming solutions.' },
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const animateCarousel = async () => {
      await controls.start({
        x: -width,
        transition: { duration: 20, ease: 'linear' },
      });
      controls.set({ x: 0 });
      animateCarousel();
    };

    animateCarousel();
  }, [controls, width, isMounted]);

  return (
    <section className="w-full bg-gray-900 shadow-lg overflow-hidden bg-[#0A0E25]">
      <div className="p-12 text-white">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-center text-primary">- Testimonials -</h2>
        </div>
        <div className="overflow-hidden">
          <motion.div
            ref={carousel}
            className="flex"
            animate={controls}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div key={index} className="min-w-[300px] p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 text-center">
                  <User className="w-20 h-20 mx-auto text-gray-700 mb-4" />
                  <h3 className="text-xl text-black font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-gray-700 mt-2">{testimonial.feedback}</p>
                  <div className="flex justify-center mt-3 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
