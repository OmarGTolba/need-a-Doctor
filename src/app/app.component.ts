import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateServices } from './translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iNeedADoctor';
  direction = 'ltr';

  constructor(private translate: TranslateService, private translateServices: TranslateServices) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.translateServices.direction.subscribe(direction => {
      this.direction = direction;
      console.log('Direction changed toooooooooo:', direction);
    });
  }

}
