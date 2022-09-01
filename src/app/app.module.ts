import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { TileComponent } from './tile/tile.component';
import { Comp4Component } from './hostbinding/comp4/comp4.component';
import { Tile4Component } from './hostbinding/tile4/tile4.component';
import { Tile5Component } from './hostbinding/comp5/tile5/tile5.component';
import { Comp5Component } from './hostbinding/comp5/comp5.component';
import { Comp6Component } from './host-context/comp6/comp6.component';
import { Tile6Component } from './host-context/tile6/tile6.component';
import { Comp7Component } from './host-context2/comp7/comp7.component';
import { Tile7Component } from './host-context2/tile7/tile7.component';
import { VarCssComponent } from './var-css/var-css.component';
import { Comp8Component } from './var-css/comp8/comp8.component';
import { VarClassComponent } from './var-class/var-class.component';
import { Comp9Component } from './var-class/comp9/comp9.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    TileComponent,
    Comp4Component,
    Tile4Component,
    Tile5Component,
    Comp5Component,
    Comp6Component,
    Tile6Component,
    Comp7Component,
    Tile7Component,
    VarCssComponent,
    Comp8Component,
    VarClassComponent,
    Comp9Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
