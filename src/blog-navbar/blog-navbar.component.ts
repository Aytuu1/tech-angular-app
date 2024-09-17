import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-navbar',
  standalone: true,
  imports: [],
  templateUrl: './blog-navbar.component.html',
  styleUrl: './blog-navbar.component.css'
})
export class BlogNavbarComponent {


navbar:{
  logo:{
    logoName:string;
    logoFontAwesome:string;
    logoPicture:string;
    logoLink:string;
    logoTitle:string;
  };
  navbarLink:Array<any>
}={
    logo:{
      logoName:'Tech',
      logoFontAwesome:'fab fa-angular',
      logoPicture:'assets/img/logo.png',
      logoLink:'/',
      logoTitle:'Techcareeer.net'
    },
    navbarLink:[
      {
        linkName:'Anasayfa',
        linkFontAwesome:'fas fa-home',
        linkLink:'/',
        linkTitle:'Home'
      },
      {
        linkName:'Hakkımızda',
        linkFontAwesome:'fas fa-info-circle',
        linkLink:'/about',
        linkTitle:'About'
      },
      {
        linkName:'İletişim',
        linkFontAwesome:'fas fa-envelope',
        linkLink:'/contact',
        linkTitle:'Contact'
      },
      {
        linkName:'Blog',
        linkFontAwesome:'fa fa-blog',
        linkLink:'/blog',
        linkTitle:'Blog'
      }
    ]
  }  
}

