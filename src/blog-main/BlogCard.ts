export interface IBlog{
    id:number;
    header:string;
    title:string;
    text:string;
    description:string;
    picture:string;
    date:string;
    link:string;
    categoryName:string;
}
export class BlogCard implements IBlog{
    //Field
    id:number;
    header:string;
    title:string;
    text:string;
    description:string;
    picture:string;
    date:string;
    link:string;
    categoryName:string;

        constructor(id:number,header:string,title:string,text:string,date:string,description:string,picture:string,link:string,categoryName:string)
        {
         this.id=id;
         this.header=header;
         this.categoryName=categoryName;
         this.title=title;
         this.text=text;
         this.description=description;
         this.picture=picture;
         this.date=date;
         this.link=link;   
        }    
        
}