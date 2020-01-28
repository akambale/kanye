function Timer(fn, delay) {
  this.fn = fn;
  this.delay = delay;
  this.timerObj = setInterval(this.fn, this.delay);
}

Timer.prototype.stop = function() {
  if (this.timerObj) {
    clearInterval(this.timerObj);
    this.timerObj = null;
  }
  return this;
};

// start timer using current settings (if it's not already running)
Timer.prototype.start = function() {
  if (!this.timerObj) {
    this.stop();
    this.timerObj = setInterval(this.fn, this.delay);
  }
  return this;
};

// start with new or original interval, stop current interval
Timer.prototype.reset = function(delay) {
  if (delay) {
    this.delay = delay;
  }
  return this.stop().start();
};

window.Timer = Timer;
