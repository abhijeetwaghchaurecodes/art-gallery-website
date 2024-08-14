import React, { useEffect, useRef, useState } from 'react';

function MarqueeText({ text }) {
  const marqueeRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const marqueeWidth = marquee.scrollWidth;
      const containerWidth = marquee.parentElement.offsetWidth;

      // Calculate how many times we need to repeat the text to cover the width of the container
      const newRepeatCount = Math.ceil(containerWidth / marqueeWidth) + 1;
      setRepeatCount(newRepeatCount);

      const animationDuration = 20; // Adjust this value for speed (lower = faster)
      marquee.style.animation = `scroll ${animationDuration}s linear infinite`;
    }
  }, [text]);

  return (
    <div 
      className="marquee-container bg-rose-600 text-white font-bold overflow-hidden whitespace-nowrap m-0" 
      style={{ width: '200%' }} // Increase the width here
    >
      <div
        ref={marqueeRef}
        className="marquee-content inline-block"
        style={{
          whiteSpace: 'nowrap',
          fontSize: '1.5rem', // Increase font size here
          padding: '0.75rem 1.5rem', // Adjust padding for readability
        }}
      >
        {/* Repeat the text based on the calculated repeat count */}
        {Array.from({ length: repeatCount }).map((_, index) => (
          <span key={index} className="mx-4">{text}</span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeText;
