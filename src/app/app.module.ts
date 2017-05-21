import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { SpecialComponent } from './buy/special.component';
import { IndexComponent } from './index/index.component';
import { OnlineServiceComponent } from './index/OnlineServices/online-service.component';
import { RedLineTitleComponent } from './titles/red-line-title.component';
import { routing } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialComponent,
    IndexComponent,
    RedLineTitleComponent,
    OnlineServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RedLineTitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
