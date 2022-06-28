import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersByCompanyService {
@Output() TriggerUserByCompany :EventEmitter <any>=new EventEmitter();
constructor() { }

}
