function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendMessage(message) {
  console.log(message);
}

const sendMessageWithThrottle = throttle(sendMessage, 1000);

sendMessageWithThrottle("Hi");
setTimeout(function () {
  sendMessageWithThrottle("Hello");
}, 1000);
setTimeout(function () {
  sendMessageWithThrottle("How are you?");
}, 500);
setTimeout(function () {
  sendMessageWithThrottle("Where are you from?");
}, 2000);
