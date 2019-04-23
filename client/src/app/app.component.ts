import { Component } from '@angular/core';
import { MatchDetailService } from './service/match-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatchDetailService]
})
export class AppComponent {
  title = 'homework15';
}
