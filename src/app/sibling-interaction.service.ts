import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SiblingInteractionService {

  constructor() { }

  message: any = new Subject<any>();

}
