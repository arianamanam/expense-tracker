import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appRoutes } from './app.routes'; // وارد کردن مسیرها

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // RouterOutlet برای نمایش محتوا
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  title = 'expense-tracker';
}
