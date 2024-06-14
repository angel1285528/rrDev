'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ComingSoon: React.FC = () => {
    const [velocity, setVelocity] = useState(10);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setVelocity(3); // slower speed for small screens
        } else {
          setVelocity(15); // default speed for larger screens
        }
      };
  
      handleResize(); // Set initial velocity
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      
        
        <div className="py-6">
          <Marquee
            speed= {10}
            direction="right"
        
          >
 <span className=" text-pink-600 text-4xl">Coomigs soon... or when Mr David send me the excell</span>
          </Marquee>
        </div>

      
    );
  };

export default ComingSoon;