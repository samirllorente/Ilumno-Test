import { Component } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private dashboardService: DashboardService) { }

  public toggleSidenav(): void {
    this.dashboardService.toggleSidenav$.emit();
  }

}
