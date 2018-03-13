import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Uno } from '../model/uno';
import {GLOBAL} from '../global';

const END_POINT = `$(GLOBAL).END_POINT`;
@Injectable()

export class ServicioService {

 

  constructor(public http: HttpClient) { 
    console.log("ServicioService constructor")

  }

  getId():Observable<any>{
    let url = GLOBAL + '/todos?userId=-1'; //+numero de Input
    console.log(`ServicioSerrvice getId ${url}`);
    return this.http.get(url);
  }

}
