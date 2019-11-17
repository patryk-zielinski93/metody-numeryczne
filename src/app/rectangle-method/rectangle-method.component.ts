import { Component, OnInit } from '@angular/core';

function funkcjaPodcalkowa(x: number): number {
  return Math.sqrt(1 - x * x);
}

@Component({
  selector: 'app-rectangle-method',
  templateUrl: './rectangle-method.component.html',
  styleUrls: ['./rectangle-method.component.scss']
})
export class RectangleMethodComponent implements OnInit {
  ngOnInit() {
    const n = 1e+6;
    let results = [];
    for (let i = 10; i <= n; i *= 10) {
      const result = 2 * this.rectangleMethod(funkcjaPodcalkowa, -1, 1, i);
      results = results.concat({i, result});
    }

    console.log(results);
  }

  rectangleMethod(
    fn: (x: number) => number,
    a: number,
    b: number,
    n: number
  ): number {
    if (n === 0) {
      return 0;
    }
    let sum = 0;
    const h = (b - a) / n;

    for (let i = 0; i < n; i++) {
      sum += fn(a + (i + 0.5) * h);
    }

    return h * sum;
  }
}
