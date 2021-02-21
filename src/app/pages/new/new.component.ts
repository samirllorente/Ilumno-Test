import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { New } from 'src/app/stores/new/new.model';
import { NewService } from 'src/app/stores/new/new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {

  public item: New | undefined;
  private slug: string | undefined;

  constructor(
    private newService: NewService,
    private route: ActivatedRoute
  ) {
    this.slug = this.route.snapshot.params.slug;
    this.newService.getNews$().subscribe(data => {
      this.item = data.find(x => x.slug === this.slug);
    });
  }
}
