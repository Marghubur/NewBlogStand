import { Route } from "@angular/router";
import { Books, Home, Videos, ViewBooks, ViewPost } from "../Provider/constrant";

export const Home_Route: Route[] = [
    {path: "", loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)},
    {path: Home, loadComponent: () => import("./home/home.component").then(m => m.HomeComponent)},
    {path: Videos, loadComponent: () => import("./videos/videos.component").then(m => m.VideosComponent)},
    {path: Books, loadComponent: () => import("./book-list/book-list.component").then(m => m.BookListComponent)},
    {path: ViewBooks, loadComponent: () => import("./view-book/view-book.component").then(m => m.ViewBookComponent)},
    {path: ViewPost, loadComponent: () => import("./view-post/view-post.component").then(m => m.ViewPostComponent)},
    {path: "editor", loadComponent: () => import("./editor/editor.component").then(m => m.EditorComponent)}
]