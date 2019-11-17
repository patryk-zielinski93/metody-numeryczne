import { Component, OnInit } from '@angular/core';

function fn(x: number): number {
  return 1 / (1 + Math.exp(-x)) - 0.5;
}

@Component({
  selector: 'app-bisection',
  templateUrl: './bisection.component.html',
  styleUrls: ['./bisection.component.scss']
})
export class BisectionComponent implements OnInit {
  bisection(f: (x: number) => number, a: number, b: number, e: number): number | undefined {
    while (Math.abs(b - a) > e) {
      const m = (a + b) / 2;
      const fa = f(a);
      const fb = f(b);
      const fm = f(m);

      if (fa === 0) {
        return a;
      }

      if (fb === 0) {
        return b;
      }

      if (fm === 0) {
        return m;
      }

      if (Math.sign(fa) * Math.sign(fm) < 0) {
        b = m;
      } else if (Math.sign(fb) * Math.sign(fm) < 0) {
        a = m;
      } else {
        return undefined;
      }
    }
    return (a + b) / 2;
  }

  ngOnInit() {
    const results = [];

    for (let i = 1; i < 10; i++) {
      results.push({i, x0: this.bisection(fn, -7, 6, 1 / Math.pow(10, i))});
    }

    console.log(results);
  }
}
