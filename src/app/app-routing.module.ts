import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCompComponent } from './search-comp/search-comp.component';
import { SearchedImageComponent } from './searched-image/searched-image.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'searched', component:SearchedImageComponent},
  {path:'image/:id', component:SearchCompComponent},
  {path:'**',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
