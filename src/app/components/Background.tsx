"use client";
import React, { useEffect, useState } from 'react';


const images = [
  '/movie1.jpg',
  '/movie2.jpg',
  '/movie3.jpg',
  '/movie4.jpg',
  '/movie5.jpg',
  '/movie6.jpg',
];

const Background = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 z-[-1]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
  );
};

export default Background;