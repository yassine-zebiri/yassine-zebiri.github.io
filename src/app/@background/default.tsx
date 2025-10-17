"use client"
import './index.css';
import UseStars from "./stars"

export default function Background(){
    const {stars}=UseStars();
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