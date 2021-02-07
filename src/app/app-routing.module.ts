import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Guards
import { AuthGuard } from './guards/auth.guard'
import { AccessGuard } from './guards/access.guard'

// Components
import { LoginComponent } from './pages/login/login.component'
import { MainComponent } from './pages/main/main.component'
import { HomeComponent } from './pages/home/home.component'
import { ClientTableComponent } from './pages/client-table/client-table.component'
import { AdminTableComponent } from './pages/admin-table/admin-table.component'


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'client/table',
        component: ClientTableComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'admin/table',
        component: AdminTableComponent,
        canActivate: [AccessGuard]
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
