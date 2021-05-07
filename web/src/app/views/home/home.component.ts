import { Component, HostListener, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.pageYOffset > 175) {
      document.querySelector('nav.sblack').classList.add('black');
    } else {
      document.querySelector('nav.sblack').classList.remove('black');
    }
  }
  ngOnInit(): void {
    // $(document).ready(function () {
    //   $('.menu-icon').on('click', function () {
    //     $('nav ul').toggleClass('showing');
    //   });
    // });
    // // Scrolling Effect
    // $(window).on('scroll', function () {
    //   console.log('asd');
    //   if ($(window).scrollTop()) {
    //     $('nav').addClass('black');
    //   } else {
    //     $('nav').removeClass('black');
    //   }
    // });
  }
}
