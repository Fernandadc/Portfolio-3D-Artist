import React, { useEffect, useRef } from 'react';

const Slider = ({ children, speed = 0.1, itemWidth = 320 }) =>
{
  const ref = useRef(null);
  const scroll = useRef(0);
  const velocity = useRef(0);
  const animationFrame = useRef(0);

  const childrenArray = React.Children.toArray(children);
  const totalChildren = childrenArray.length;
  const totalWidth = itemWidth * totalChildren;

  const onWheel = (e) =>
  {
    if (ref.current?.matches(':hover'))
    {
      velocity.current += e.deltaY * speed * -1;
    }
  };

  const animate = () =>
  {
    scroll.current += velocity.current;
    if (scroll.current > 0) scroll.current = -totalWidth;
    if (scroll.current < -totalWidth * 2) scroll.current = 0;

    if (ref.current)
    {
      ref.current.style.transform = `translateX(${scroll.current}px)`;
    }

    velocity.current *= 0.9;

    if (Math.abs(velocity.current) > 0.05)
    {
      animationFrame.current = requestAnimationFrame(animate);
    } else
    {
      velocity.current = 0;
    }
  };

  useEffect(() =>
  {
    const handleWheel = (e) =>
    {
      onWheel(e);
      cancelAnimationFrame(animationFrame.current);
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('wheel', handleWheel);
    return () =>
    {
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div className="slider-container" style={{ overflow: 'hidden' }}>
      <div
        className="slider"
        ref={ref}
        style={{ display: 'flex', willChange: 'transform' }}
      >
        {[...childrenArray, ...childrenArray, ...childrenArray].map((child, idx) => (
          <div
            key={idx}
            style={{ minWidth: `${itemWidth}px`, maxWidth: `${itemWidth}px`, flexShrink: 0 }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;