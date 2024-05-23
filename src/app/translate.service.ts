import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateServices {

  direction = new BehaviorSubject<string>('ltr');

  constructor(private translate:TranslateService){

    translate.setDefaultLang('en')
  
    }
    changeLang(e:any){
    this.translate.setDefaultLang(e)
  if(e === 'ar'){

    this.direction.next('rtl');    
    return
  }
  
  this.direction.next('ltr');    
}
  
}
