import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { ServiceComponent } from './views/home/service/service.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './views/footer/footer.component';
import { ContactComponent } from './views/contact/contact.component';
import { BookComponent } from './views/book/book.component';
import { UserComponent } from './views/user/user.component';
import { UserLoginComponent } from './views/user-login/user-login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    BookComponent,
    UserComponent,
    UserLoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
