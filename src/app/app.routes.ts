import { Routes } from '@angular/router';
import { BlogMainComponent } from '../blog-main/blog-main.component';
import { BlogAboutComponent } from '../blog-about/blog-about.component';

export const routes: Routes = [
    {path:'index',component:BlogMainComponent},
    {path:'',redirectTo:'index',pathMatch:'full'},
    {path:'about',component:BlogAboutComponent},

];
