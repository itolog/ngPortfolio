import { Injectable } from '@angular/core';

@Injectable()
export class ThrottleService {
  constructor() { }
  // Оптимизация скрола
  throttle(action) {
    let isRunning = false;
    return function() {
      if (isRunning) return;
      isRunning = true;
      window.requestAnimationFrame(() => {
        action();
        isRunning = false;
      });
  }
  }
}
