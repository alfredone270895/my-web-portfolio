export function initializeHeadroom() {
  const header = document.getElementById('site-header');
  const doc = document.documentElement;
  const w = window;

  let curScroll: number;
  let prevScroll = w.scrollY || doc.scrollTop;
  let curDirection = 0;
  let prevDirection = 0;
  let toggled: boolean;
  const threshold = 200;

  const toggleHeader = function () {
    toggled = true;
    if (curDirection === 2 && curScroll > threshold) {
      header?.classList.add('hide');
    } else if (curDirection === 1) {
      header?.classList.remove('hide');
    } else {
      toggled = false;
    }
    return toggled;
  };

  const checkScroll = function () {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scrolled down
      curDirection = 2;
    } else {
      //scrolled up
      curDirection = 1;
    }

    if (curDirection !== prevDirection) {
      toggled = toggleHeader();
    }

    prevScroll = curScroll;
    if (toggled) {
      prevDirection = curDirection;
    }
  };

  window.addEventListener('scroll', checkScroll);
}
