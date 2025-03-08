import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">Contact Us</h3>
          <p>📢 Get in Touch with Joy TV India Pvt. Ltd.</p>
          <p>📞 Phone: <a href="tel:+917300999001" className="text-blue-400 hover:underline">+91-7300999001</a></p>
          <p>🌐 Website: <a href="https://www.joytvindia.com" className="text-blue-400 hover:underline">www.joytvindia.com</a></p>
          <p>📍 Address: 148 BC Lince, Meerut - 250001, Uttar Pradesh, India</p>
          <p>📧 Email: <a href="mailto:mail.us@joytv.com" className="text-blue-400 hover:underline">mail.us@joytv.com</a></p>
        </div>

        {/* Representative Info */}
        <div className="space-y-4 border-t border-gray-700 md:border-t-0 md:border-l md:pl-8">
          <h3 className="text-2xl font-semibold text-white">Our Representative</h3>
          <p>👤 Sohil Rathod</p>
          <p>📌 Business Development Manager</p>
          <p>📡 Joy TV | Joy Infotainment Media Pvt. Ltd.</p>
        </div>

        {/* Logo & Social Media */}
        <div className="flex flex-col items-center space-y-4 border-t border-gray-700 pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8">
          <Image
            src={"/logo/joytv.png"}
            width={120}
            height={120}
            alt="Joy TV Logo"
            className="w-[120px] h-[120px]"
          />
          {/* Social Media Icons (Optional) */}
          <div className="flex space-x-4">
            <Link href="#"><span className="text-blue-400 hover:text-white text-xl">🌐</span></Link>
            <Link href="#"><span className="text-blue-400 hover:text-white text-xl">📘</span></Link>
            <Link href="#"><span className="text-blue-400 hover:text-white text-xl">📷</span></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Joy TV India Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
