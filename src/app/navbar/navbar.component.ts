import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServices } from '../translate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  direction = 'ltr';

constructor(private translateService:TranslateServices , private translateServices:TranslateServices){
this.translateServices.direction.subscribe((value)=>{
  this.direction = value
})
}

changeLang(e:any){
  console.log(e.target.value);
  this.translateServices.direction.next('rtl')
  this.translateService.changeLang(e.target.value)
}
}
