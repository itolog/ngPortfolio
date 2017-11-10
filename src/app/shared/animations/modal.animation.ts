import {animate, state, style, transition, trigger} from '@angular/animations';

export const modalAnim = trigger('modalAnim', [
  state('hide', style({
    transform: 'scale(0, 0)'
  })),
  state('show', style({
    transform: 'scale(1, 1)'
  })),
   transition('hide <=> show', animate(400)),
]);

