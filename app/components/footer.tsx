'use client'

import logo from '@/public/iqralogo.png'



import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CgFacebook, CgInstagram, CgTwitter } from 'react-icons/cg'
import { CiLinkedin, CiTwitter } from 'react-icons/ci'

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      className="bg-[#061036] text-white py-8"
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={footerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* <h3 className="text-xl font-bold">About Us</h3> */}
            <Image src={logo} alt='' />
            <p className="text-gray-300">We are a company dedicated to providing innovative solutions.</p>
            <div className='flex gap-4'>
              <CgFacebook className='w-6 h-6 cursor-pointer' />
              <CiLinkedin className='w-6 h-6 cursor-pointer' />
              <CiTwitter className='w-6 h-6 cursor-pointer' />
              <CgInstagram className='w-6 h-6 cursor-pointer' />
            </div>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold">Pages</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Categories</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors duration-300">Contact</a></li>
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="flex flex-col gap-6">
              <a href="#" className="text-xl hover:text-gray-300 transition-colors duration-300">
                08163667372
              </a>
              <a href="#" className="text-xl hover:text-gray-300 transition-colors duration-300">
                johndoe@gmail.com
              </a>
              <a href="#" className="text-2xl hover:text-gray-300 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className='text-left'>© 2024 IqraKids. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
