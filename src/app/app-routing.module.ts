import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutoparkComponent } from './components/autopark/autopark.component';
import { Fh2008refComponent } from './components/autopark/fh2008ref/fh2008ref.component';
import { Fh2014refComponent } from './components/autopark/fh2014ref/fh2014ref.component';
import { Fh2020Component } from './components/autopark/fh2020/fh2020.component';
import { AutoserviceComponent } from './components/autoservice/autoservice.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'autopark',
    component: AutoparkComponent
  },
  {
    path: 'autoservice',
    component: AutoserviceComponent
  },
  {
    path: 'fh2020',
    component: Fh2020Component
  },
  {
    path: 'fh12',
    component: Fh2014refComponent
  },
  {
    path: 'fm',
    component: Fh2008refComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
