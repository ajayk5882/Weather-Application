import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForcastListComponent } from './forcast-list/forcast-list.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';

const routes: Routes = [
  { path: 'forecast/:id', component: ForcastListComponent },
  { path: '', component: ZipcodeEntryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
