import { Component } from '@angular/core';
import { Footer } from "./footer/footer";
import { RouterOutlet } from "@angular/router";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Sidebar,
    Footer
  ],
  templateUrl: './layout.html',
})
export class Layout {

}
