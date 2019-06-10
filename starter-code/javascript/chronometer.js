

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
  }
 startClick() {
   this.intervalId =
  setInterval(() => {this.currentTime += 1; 
  }, 1000)
 }

getMinutes() {
  var minutes = Math.floor(this.currentTime / 60);
  return minutes; 
}

getSeconds() {
  var seconds = this.currentTime % 60;
  return seconds;
}
 twoDigitsNumber(digits) {
   if (digits < 10) {
     return "0" + digits;
   } else if (digits >= 10)
   return digits.toString();
 }

stopClick() {
  clearInterval(this.intervalId)
  }

resetClick() {
  this.currentTime = 0
}
  // splitClick() {}
}