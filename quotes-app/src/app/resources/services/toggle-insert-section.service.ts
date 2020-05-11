import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleInsertSectionService {

  private toggleObs = new Subject<boolean>();
  private toggle = false;

  constructor() { }

  changeVariable(){
    this.toggle = !this.toggle;
    this.toggleObs.next(this.toggle);
  }

  getToggle(): Observable<boolean>{
    return this.toggleObs.asObservable();
  }

}
