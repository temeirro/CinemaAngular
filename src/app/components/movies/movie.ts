import { Time } from "@angular/common";

export interface IMovie{
    id:number;
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:string;
    // isCurrent:boolean;
    genres?:IGenre[];
}

export interface IGenre{
    id:number;
    name:string;
}

export interface ICreateMovie{
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:string;
    // isCurrent:boolean;
    genresIds?:number[];
}

export interface IEditMovie{
    id:number;
    title:string;
    year:number;
    imageUrl:string;
    description?: string;
    duration:string;
    // isCurrent:boolean;
    genresIds?:number[];
}