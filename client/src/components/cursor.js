// Cursor.js
import React, { useEffect, useState, useRef } from 'react';
import './cursor.css';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shadowOffset, setShadowOffset] = useState({ x: -20, y: -20 });
  const prevPositionRef = useRef({ x: 120000, y: 120000 });
  const shadowOffsetRef = useRef(shadowOffset);

  useEffect(() => {
    const updateMousePosition = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;

      const deltaX = newX - prevPositionRef.current.x;
      const deltaY = newY - prevPositionRef.current.y;

      // Calculate the distance between the cursor and the shadow
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      // Move the shadow 10000 times more away from the cursor
      const newShadowOffset = {
        x: shadowOffsetRef.current.x - deltaX * 1000000 / distance,
        y: shadowOffsetRef.current.y - deltaY * 1000000 / distance,
      };

      // Update the cursor position
      setPosition({ x: newX, y: newY });

      // Save the current position for the next update
      prevPositionRef.current.x = newX;
      prevPositionRef.current.y = newY;

      // Set the shadow offset with a slight delay for better animation
      setTimeout(() => {
        setShadowOffset(newShadowOffset);
        shadowOffsetRef.current = newShadowOffset; // Update the ref for the next iteration
      }, 0);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <div
        className="cursor-shadow"
        style={{
          left: `calc(${position.x}px + ${shadowOffset.x}px)`,
          top: `calc(${position.y}px + ${shadowOffset.y}px)`,
        }}
      ></div>
      <div className="cursor-inner"></div>
    </div>
  );
}
