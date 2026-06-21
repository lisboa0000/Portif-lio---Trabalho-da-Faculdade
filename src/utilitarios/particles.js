export function spawnParticles(el) {
  const rect = el.getBoundingClientRect();
  const color = window.getComputedStyle(el).color;

  for (let i = 0; i < 6; i++) {
    const dot = document.createElement('span');
    dot.style.cssText = `
      position: absolute;
      width: 5px; height: 5px;
      border-radius: 50%;
      background: ${color};
      pointer-events: none;
      z-index: 9999;
      left: ${rect.left + window.scrollX + Math.random() * rect.width}px;
      top:  ${rect.top + window.scrollY + Math.random() * rect.height}px;
    `;
    document.body.appendChild(dot);

    const angle = Math.random() * Math.PI * 2;
    const dist = 20 + Math.random() * 25;

    dot.animate(
      [
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        {
          transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist - 15}px) scale(0)`,
          opacity: 0,
        },
      ],
      {
        duration: 450 + Math.random() * 200,
        easing: 'ease-out',
        delay: Math.random() * 80,
      }
    ).onfinish = () => dot.remove();
  }
}
