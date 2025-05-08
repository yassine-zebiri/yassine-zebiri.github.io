"use client"
import './index.css'
import React, { useEffect, useState } from "react";

type Star = {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  };
  
  export const StarsBackground = () => {
    const [stars, setStars] = useState<Star[]>([]);
  
    useEffect(() => {
      const starCount = 400;
      const newStars: Star[] = [];
  
      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1, // حجم النجمة
          duration: Math.random() * 20 + 10, // مدة الحركة
        });
      }
  
      setStars(newStars);
    }, []);
  
    return (
      <div className="stars-background">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
        
      </div>
    );
  };