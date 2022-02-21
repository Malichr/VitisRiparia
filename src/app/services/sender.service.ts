import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  public userEmail: any;
  public orderId: any;

  constructor() { }
}
