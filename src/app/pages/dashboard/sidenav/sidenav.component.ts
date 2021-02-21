import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sideNav: MatSidenav | undefined;

  constructor(private dashboardService: DashboardService){}

  ngOnInit(): void {
    this.dashboardService.toggleSidenav$.subscribe(() => {
      this.toggleSidenav();
    });
  }

  public toggleSidenav(): void {
    this.sideNav?.toggle();
  }

}
