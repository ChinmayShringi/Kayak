import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

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
