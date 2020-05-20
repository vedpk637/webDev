import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { SearchCompComponent } from './search-comp/search-comp.component';
// import { DataFilterPipe } from './data-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { SearchedImageComponent } from './searched-image/searched-image.component';
import { DataServiceService } from './data-service.service';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    SearchCompComponent,
    // DataFilterPipe,
    SearchedImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatChipsModule,
    MatDividerModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
