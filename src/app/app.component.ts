import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'mean';
}
