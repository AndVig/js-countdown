let count = 11;
const timer = setInterval(function() {
  count--;
  console.log('count');
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);