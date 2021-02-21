import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public toggleSidenav$: EventEmitter<any> = new EventEmitter();

}
