import { transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { New } from 'src/app/stores/new/new.model';
import { NewService } from 'src/app/stores/new/new.service';
import { cardAnimation } from 'src/app/useful/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', useAnimation(cardAnimation)),
    ])
  ]
})
export class HomeComponent {

  public news$: Observable<Array<New>>;

  constructor(private newService: NewService) {
    this.news$ = this.newService.getNews$();
  }
}
