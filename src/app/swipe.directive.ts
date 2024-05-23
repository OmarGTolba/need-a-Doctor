import { Directive, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';
import Hammer from 'hammerjs';

@Directive({
  selector: '[appSwipe]'
})
export class SwipeDirective implements OnInit {
  @Output() swipeLeft = new EventEmitter();
  @Output() swipeRight = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const hammertime = new Hammer(this.el.nativeElement);
    hammertime.on('swipeleft', (event) => {
      this.swipeLeft.emit(event);
    });
    hammertime.on('swiperight', (event) => {
      this.swipeRight.emit(event);
    });
  }
}
