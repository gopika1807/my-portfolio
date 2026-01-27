import { useState, useEffect } from 'react';
import './LanyardAnimation.css';

export default function LanyardAnimation() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = e.currentTarget.parentElement.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="lanyard-container">
      <div className="lanyard-string"></div>
      <div 
        className={`lanyard-card ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="card-content">
          <div className="card-header">
            <div className="card-logo">👩‍💻</div>
            <h3>Gopika Shree</h3>
          </div>
          <div className="card-title">Frontend Developer</div>
          <div className="card-skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}