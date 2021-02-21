import {
    animate,
    animation,
    keyframes,
    stagger,
    style,
    transition,
    query
  } from '@angular/animations';
  
  export const cardAnimation = animation([
    // Initially the all cards are not visible
    query(':enter', style({ opacity: 0 }), { optional: true }),

    // Each card will appear sequentially with the delay of 300ms
    query(':enter', stagger('300ms', [
        animate('300ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
    ]), { optional: true })
]);