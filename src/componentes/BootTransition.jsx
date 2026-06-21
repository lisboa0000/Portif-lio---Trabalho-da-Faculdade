import { useEffect, useState } from 'react';
import { useTheme } from '../contextos/useTheme';

export default function BootTransition({ onDone }) {
  const { theme } = useTheme();
  const [lines, setLines] = useState({ line1: '', line2: '', line3: '' });
  const [showProgress, setShowProgress] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers = [];

    timers.push(setTimeout(() => setLines(l => ({ ...l, line1: 'active' })), 200));
    timers.push(setTimeout(() => setLines(l => ({ ...l, line1: 'done' })), 600));

    timers.push(setTimeout(() => setLines(l => ({ ...l, line2: 'active' })), 700));
    timers.push(setTimeout(() => {
      setLines(l => ({ ...l, line2: 'done' }));
      setShowProgress(true);
    }, 1200));

    timers.push(setTimeout(() => setLines(l => ({ ...l, line3: 'active' })), 1300));
    timers.push(setTimeout(() => setLines(l => ({ ...l, line3: 'done' })), 1600));

    timers.push(setTimeout(() => setFadeOut(true), 2200));
    timers.push(setTimeout(() => onDone && onDone(), 2500));

    return () => timers.forEach(clearTimeout);

  }, []);

  useEffect(() => {
    if (!showProgress) return;
    let width = 0;
    const interval = setInterval(() => {
      width += 5;
      setProgress(width);
      if (width >= 100) clearInterval(interval);
    }, 10);
    return () => clearInterval(interval);
  }, [showProgress]);

  const isDark = theme !== 'light';

  return (
    <div
      id="boot-screen"
      data-theme={!isDark ? 'light' : undefined}
      style={{ transition: 'opacity 0.3s ease', opacity: fadeOut ? 0 : 1 }}
    >
      <div className="boot-content">
        <div className={`boot-line ${lines.line1}`}>BOOTING SYSTEM...</div>
        <div className={`boot-line ${lines.line2}`}>LOADING INTERFACE...</div>
        <div className={`boot-line ${lines.line3}`}>WELCOME HELENO.EXE</div>
        <div className="progress-bar-container" style={{ display: showProgress ? 'block' : 'none' }}>
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
