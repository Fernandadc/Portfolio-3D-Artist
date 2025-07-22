import React, { useRef, useState } from 'react';

const Slider = ({ children, speed = 0.3, itemWidth = 320 }) => {
  const ref = useRef(null);
  const [scroll, setScroll] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;
  const totalWidth = itemWidth * totalChildren;

  const onScroll = (e) => {
    const hovered = ref.current?.matches(':hover') ?? false;
    if (hovered) setScroll(curScroll => {
      let resultScroll = curScroll + (e.deltaY * speed * -1);

      if (resultScroll > 0) resultScroll = -totalWidth;
      if (resultScroll < -totalWidth * 2) resultScroll = 0;

      return resultScroll;
    });
  };

  window.addEventListener('wheel', onScroll);

  return (
    <div className="slider-container">
      <div
        className="slider"
        ref={ref}
        style={{ transform: `translate(${scroll}px)` }}
      >
        {[...childrenArray, ...childrenArray, ...childrenArray].map((child, idx) => (
          <div key={idx} style={{ minWidth: `${itemWidth}px`, maxWidth: `${itemWidth}px` }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
