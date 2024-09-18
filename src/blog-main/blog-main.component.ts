import { Component } from '@angular/core';
import { BlogCard } from './BlogCard';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog-main.component.html',
  styleUrl: './blog-main.component.css'
})
export class BlogMainComponent {
  detailPage(){
    alert("DetailPage ")
    if (window.confirm("Detay Sayfasına gitmek istiyor musunuz ?")){
      window.location.href="http://localhost:4200/blog-detail/1";
    }
    else{
      alert("Detay sayfasına gitmediniz.")
    }
  }

blogCard:BlogCard[]=
[
  {
  id:1,
  header:"Header-1",
  title:"Title-1",
  text:"text-1",
  description:"description-1",
  picture:"https://cdn.pixabay.com/photo/2024/04/12/23/11/nature-8692760_1280.jpg",
  date:String(new Date()),
  link:"blog",
  categoryName:"frontend"
},
{
  id:2,
  header:"Header-2",
  title:"Title-2",
  text:"text-2",
  description:"description-2",
  picture:"https://cdn.pixabay.com/photo/2024/04/12/23/11/nature-8692760_1280.jpg",
  date:String(new Date()),
  link:"blog",
  categoryName:"frontend"
},
{
  id:3,
  header:"Header-3",
  title:"Title-3",
  text:"text-3",
  description:"description-3",
  picture:"https://cdn.pixabay.com/photo/2024/04/12/23/11/nature-8692760_1280.jpg",
  date:String(new Date()),
  link:"blog",
  categoryName:"frontend"
},
{
  id:4,
  header:"Header-4",
  title:"Title-4",
  text:"text-4",
  description:"description-4",
  picture:"https://cdn.pixabay.com/photo/2024/04/12/23/11/nature-8692760_1280.jpg",
  date:String(new Date()),
  link:"blog",
  categoryName:"frontend"
},
{
  id:5,
  header:"Header-5",
  title:"Title-5",
  text:"text-5",
  description:"description-5",
  picture:"https://cdn.pixabay.com/photo/2024/04/12/23/11/nature-8692760_1280.jpg",
  date:String(new Date()),
  link:"blog",
  categoryName:"frontend"
},
{
  id:6,
  header:"Header-6",
  title:"Title-6",
  text:"text-6",
  description:"description-6",
  picture:"https://cdn.pixabay.com/photo/2024/04/12/23/11/nature-8692760_1280.jpg",
  date:String(new Date()),
  link:"blog",
  categoryName:"frontend"
},
];
}
