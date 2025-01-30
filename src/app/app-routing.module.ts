import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparshbotComponent } from '../app/sparshbot/sparshbot.component';  // Update the path based on your file structure


const routes: Routes = [ { path: 'sparshbot', component: SparshbotComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
