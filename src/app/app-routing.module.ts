import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './views/book/book.component';
import { ContactComponent } from './views/contact/contact.component';
import { HomeComponent } from './views/home/home.component';
import { UserLoginComponent } from './views/user-login/user-login.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cont', component: ContactComponent },
  // { path: 'about', component: About },
  { path: 'book', component: BookComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
