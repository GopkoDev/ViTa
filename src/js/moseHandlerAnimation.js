const isMobile = () => {
  return window.matchMedia('(pointer:coarse)').matches;
};

const mouseAnimation = () => {
  const createMouseElement = () => {
    const mouseElement = document.createElement('div');
    mouseElement.classList.add('_mouse');
    document.body.appendChild(mouseElement);
    return mouseElement;
  };

  const mouseElement = createMouseElement();

  const addPosition = (e) => {
    const { clientX: x, clientY: y } = e;

    mouseElement.style.cssText = `transform: translate(-10px, -13px) translate3d(${x}px, ${y}px, 0)`;
    // Logic for disable custom cursor on hover element with css cursor !== 'auto'
    // const type = window.getComputedStyle(event.target)['cursor'];
    // mouseData.type !== 'auto'
    //   ? (mouseElement.style.display = 'none')
    //   : (mouseElement.style.display = 'block');
  };

  window.addEventListener('mousemove', addPosition);
};

!isMobile() ? mouseAnimation() : null;
