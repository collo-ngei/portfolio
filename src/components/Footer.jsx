import React from 'react';
import { FaWhatsapp, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    
      <div className='p-5 flex justify-between items-center bg-black w-full max-w-full overflow-x-hidden'>
        <div className='bg-gray-600 flex items-center justify-between w-full px-3'>
        <span className='text-white'>K. Collins</span>
        <div className='flex gap-24'>
          <a href='https://wa.me/254727326978' target='_blank' rel='noopener noreferrer' className='text-white'>
            <FaWhatsapp size={24} />
          </a>
          <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='text-white'>
            <FaGithub size={24} />
          </a>
         
        </div>
        <p className='bg-gray-600 text-white'>ccheruiyot868@gmail.com <br /> #SoftwareDeveloper2024</p>
      </div>
    </div>
  );
};

export default Footer;
