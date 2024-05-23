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
  currentSlideIndex =0
  constructor(private translate: TranslateService, private translateServices: TranslateServices) {
    translate.setDefaultLang('en');
  }
  setCurrentSlideIndex(index: number) {
    this.currentSlideIndex = index;
  }
  ngOnInit() {
    this.translateServices.direction.subscribe(direction => {
      this.direction = direction;
      console.log('Direction changed toooooooooo:', direction);
    });
  }

}
