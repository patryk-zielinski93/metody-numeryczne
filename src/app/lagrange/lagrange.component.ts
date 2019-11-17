import { Component, OnInit } from '@angular/core';

interface XF {
  f: number;
  x: number;
}

@Component({
  selector: 'app-lagrange',
  templateUrl: './lagrange.component.html',
  styleUrls: ['./lagrange.component.scss']
})
export class LagrangeComponent implements OnInit {
  lagrange(xf: XF[], x: number) {
    let t;
    let y = 0;
    const length = xf.length;

    for (let i = 0; i < length; i++) {
      t = xf[i].f;

      for (let j = 0; j < length; j++) {
        if (j !== i) {
          t = t * (x - xf[j].x) / (xf[i].x - xf[j].x);
        }
      }

      y += t;
    }

    return y;
  }

  ngOnInit(): void {
    const fn1 = [
      {x: 2, f: 0},
      {x: 3, f: 2},
      {x: 10, f: 1}
    ];
    const fn = [
      {x: -4, f: 16},
      {x: -2, f: 4},
      {x: 0, f: 0},
      {x: 1, f: 1},
      {x: 3, f: 9}
    ];
    console.log(this.lagrange(fn, 5));
  }
}
