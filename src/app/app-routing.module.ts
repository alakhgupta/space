import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceComponent } from './components/space/space.component';


export const routes: Routes = [
  { path: '', redirectTo: 'space', pathMatch:'full'},
  { path: 'space/:id', component:  SpaceComponent },
  { path: 'space', component:  SpaceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
