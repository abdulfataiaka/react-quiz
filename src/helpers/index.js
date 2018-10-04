export const timerCallback = (timer) => {
  let { handler, minutes, seconds } = timer;

  if (seconds <= 0) {
    seconds = 59;
    minutes -= 1;
  } else {
    seconds -= 1;
  }

  if (minutes < 0) {
    clearInterval(handler);
    handler = null;
    seconds = 0;
    minutes = 0;
  }

  return {
    handler,
    minutes,
    seconds
  };
};

export const random = maximum => (
  maximum <= 0
    ? 0
    : Math.floor(Math.random() * maximum) + 1
);

export default {};
