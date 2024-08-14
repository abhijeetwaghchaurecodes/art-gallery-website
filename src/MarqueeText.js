import React, { useEffect, useRef } from 'react';

function MarqueeText({ text }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const marqueeWidth = marquee.scrollWidth;
      marquee.style.animation = `scroll ${marqueeWidth / 50}s linear infinite`;
    }
  }, []);

  return (
    <div className="marquee-container bg-red-500 text-white overflow-hidden whitespace-nowrap">
      <div
        ref={marqueeRef}
        className="marquee-content inline-block"
        style={{ display: 'inline-block' }}
      >
        {text} {text} {text} {text} {text}
      </div>
    </div>
  );
}

export default MarqueeText;
