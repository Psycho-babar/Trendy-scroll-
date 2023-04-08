let scrollTimeoutId;
let scrolling = true;

function scroll() {
  if (!scrolling) {
    return;
  }
  const distance = 500;
  const delay = 1000;
  const scrollHeight = document.documentElement.scrollHeight;
  window.scrollBy(0, distance);
  if (window.pageYOffset + window.innerHeight >= scrollHeight) {
    window.scrollTo(0, 0);
  }
  scrollTimeoutId = setTimeout(scroll, delay);
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'q') {
    scrolling = !scrolling;
    if (scrolling) {
      scroll();
    } else {
      clearTimeout(scrollTimeoutId);
    }
  }
});

scroll();
