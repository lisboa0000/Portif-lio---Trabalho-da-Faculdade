import { useEffect, useRef, useState } from 'react';

const BLUR_AMOUNT = 6;
const ANIM_DURATION_MS = 900;
const PAUSE_BETWEEN_MS = 600;

export default function TrueFocus({ sentence = 'Systems Analyst and Developer' }) {
  const containerRef = useRef(null);
  const focusBoxRef = useRef(null);
  const wordRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const words = sentence.trim().split(' ');

  const moveFocusBox = (index) => {
    const container = containerRef.current;
    const focusBox = focusBoxRef.current;
    const wordEl = wordRefs.current[index];
    if (!container || !focusBox || !wordEl) return;

    const parentRect = container.getBoundingClientRect();
    const wordRect = wordEl.getBoundingClientRect();

    const x = wordRect.left - parentRect.left;
    const y = wordRect.top - parentRect.top;

    focusBox.style.transform = `translate(${x}px, ${y}px)`;
    focusBox.style.width = `${wordRect.width}px`;
    focusBox.style.height = `${wordRect.height}px`;
    focusBox.style.opacity = '1';
  };

  useEffect(() => {
    let cycleInterval = null;
    let resizeTimer = null;

    const focusBox = focusBoxRef.current;
    if (focusBox) focusBox.style.transition = 'none';

    document.fonts.ready.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          moveFocusBox(0);
          setTimeout(() => {
            if (focusBox) {
              focusBox.style.transition =
                `transform ${ANIM_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), ` +
                `width ${ANIM_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), ` +
                `height ${ANIM_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), ` +
                `opacity 0.3s ease`;
            }
            setReady(true);

            const totalDuration = ANIM_DURATION_MS + PAUSE_BETWEEN_MS;
            cycleInterval = setInterval(() => {
              setCurrentIndex(prev => (prev + 1) % words.length);
            }, totalDuration);
          }, 50);
        });
      });
    });

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setCurrentIndex(prev => {
          moveFocusBox(prev);
          return prev;
        });
      }, 100);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (cycleInterval) clearInterval(cycleInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  useEffect(() => {
    if (ready) moveFocusBox(currentIndex);
  }, [currentIndex, ready]);

  return (
    <div className="true-focus" id="trueFocus" ref={containerRef}>
      {words.map((word, i) => (
        <span
          key={word + i}
          ref={el => (wordRefs.current[i] = el)}
          className="focus-word"
          style={{
            filter: i === currentIndex ? 'blur(0px)' : `blur(${BLUR_AMOUNT}px)`,
            opacity: i === currentIndex ? 1 : 0.35,
            transition: `filter ${ANIM_DURATION_MS}ms ease, opacity ${ANIM_DURATION_MS}ms ease`,
          }}
        >
          {word}
        </span>
      ))}
      <div className="focus-box" id="focusBox" ref={focusBoxRef}>
        <span className="corner tl"></span>
        <span className="corner tr"></span>
        <span className="corner bl"></span>
        <span className="corner br"></span>
      </div>
    </div>
  );
}
