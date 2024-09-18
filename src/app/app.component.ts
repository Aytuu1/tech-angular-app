import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogHeaderComponent } from '../blog-header/blog-header.component';
import { BlogMainComponent } from '../blog-main/blog-main.component';
import { BlogFooterComponent } from '../blog-footer/blog-footer.component';
import { ContentComponent } from '../content/content.component';
import { BlogNavbarComponent } from '../blog-navbar/blog-navbar.component';
import { BlogAboutComponent } from '../blog-about/blog-about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
    ,CommonModule
    ,BlogHeaderComponent
    ,BlogMainComponent
    ,BlogFooterComponent
    ,ContentComponent
    ,BlogNavbarComponent
    ,BlogAboutComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './../styles.css'
})
export class AppComponent {
  title = 'tech-angular-app';
}
