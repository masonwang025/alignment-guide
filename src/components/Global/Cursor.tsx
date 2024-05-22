import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null); // use ref to directly manipulate the DOM element

    useEffect(() => {
        // function to move the cursor
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                const x = e.clientX;
                const y = e.clientY;

                // update cursor position and ensure it's visible
                cursorRef.current.style.left = `${x}px`;
                cursorRef.current.style.top = `${y}px`;
                cursorRef.current.style.display = 'block';
            }
        };

        // function to hide the cursor on mouse out
        const handleMouseOut = (e: MouseEvent) => {
            if (cursorRef.current && (!e.relatedTarget || e.relatedTarget === null)) {
                cursorRef.current.style.display = 'none';
            }
        };

        // add event listeners if the device does not support touch events
        if (!('ontouchstart' in window || navigator.maxTouchPoints)) {
            document.addEventListener('mousemove', moveCursor);
            document.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            // clean up event listeners
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div ref={cursorRef} className='fixed left-0 top-0 z-1000 pointer-events-none hidden transform -translate-x-1/2 -translate-y-1/2'>
            <div className='size-14 rounded-full backdrop-blur-[2px] border border-dark flex justify-center items-center'>
                {/* centered inner div */}
                <div className='size-2.5 rounded-full bg-dark'></div>
            </div>
        </div>
    );
};

export default Cursor;
