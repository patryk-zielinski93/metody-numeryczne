import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LagrangeComponent } from './lagrange/lagrange.component';
import { RectangleMethodComponent } from './rectangle-method/rectangle-method.component';
import { BisectionComponent } from './bisection/bisection.component';

@NgModule({
  declarations: [
    AppComponent,
    LagrangeComponent,
    RectangleMethodComponent,
    BisectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
