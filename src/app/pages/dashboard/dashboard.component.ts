import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/stores/new/new.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private newService: NewService) { }

  ngOnInit(): void {
    this.newService.getNews();
  }

}
