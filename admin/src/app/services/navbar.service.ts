import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
  private subject = new Subject<any>();


  sendClickEvent() {
    this.subject.next(null);
  }
  getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
