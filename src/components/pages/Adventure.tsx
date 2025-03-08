'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Element } from "react-scroll";


// Define the type for each timeline item
type TimelineItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
};

// Define the props for the TimelineItem component
type TimelineItemProps = {
  item: TimelineItemType;
  isActive: boolean;
  setActiveId: (id: number) => void;
};

// Timeline data array
const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: 'Unmatched Reliability',
    description: 'Our high-capacity infrastructure ensures seamless contentdelivery with 99.99% uptime.',
    image: '/images/05.jpeg',
    icon: '🔍',
  },
  
  {
    id: 2,
    title: 'Innovative Solutions',
    description: 'From multi-device compatibility to AI-driven content personalization, we integrate the latest technology to enhance user engagement.',
    image: '/images/06.jpeg',
    icon: '⛏️',
  },
  {
    id: 3,
    title: 'Scalability & Flexibility',
    description: 'Whether you are a startup or an established media house, our solutions are designed to scale as your business grows',
    image: '/images/07.jpeg',
    icon: '💎',
  },
  {
    id: 4,
    title: 'End-to-End Support',
    description: 'Our team of streaming experts, engineers, and content specialists is available to provide 24/7 technical support and consultation.',
    image: '/images/08.jpeg',
    icon: '✨',
  },
  {
    id: 5,
    title: 'Grading & Certification',
    description: 'At Joy TV India Pvt. Ltd., we are shaping the future of digital entertainment with unparalleled expertise, creativity',
    image: '/images/09.jpeg',
    icon: '📜',
  },
];

// Update the TimelineItem component with TypeScript types
const TimelineItem: React.FC<TimelineItemProps> = ({ item, isActive, setActiveId }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      setActiveId(item.id);
    }
  }, [controls, inView, item.id, setActiveId]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center mb-16 ${isActive ? 'scale-105' : ''} transition-all duration-300`}
      onClick={() => setActiveId(item.id)}
    >
      <motion.div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
          isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        {item.icon}
      </motion.div>
      <h3 className="mt-4 text-black px-2 py-[1px] text-xl z-20 bg-white rounded-xl">{item.title}</h3>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-center"
          >
            <div className=''>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4 z-20" />
            <p className=" text-xl text-white z-20">{item.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Update the Adventure component with TypeScript types
const Adventure: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (timeline) {
        const items = timeline.querySelectorAll('.timeline-item');
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setActiveId(parseInt(item.getAttribute('data-id') || '1'));
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Element name="journey">
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 border-t-[1px] border-white/30 ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[#2A55C7] text-4xl md:text-5xl uppercase  font-bold text-center mb-12">Why Choose US</h1>
        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full">
            <motion.div
              className="w-full bg-blue-500"
              style={{ originY: 0 }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: activeId / timelineData.length }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {timelineData.map((item) => (
            <div key={item.id} className="timeline-item" data-id={item.id}>
              <TimelineItem item={item} isActive={activeId === item.id} setActiveId={setActiveId} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Adventure;
