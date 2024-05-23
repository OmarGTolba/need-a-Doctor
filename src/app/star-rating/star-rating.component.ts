import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  @Input() starColor: string = '';


color:any =''
  stars: boolean[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      this.updateStars();
    }
    this.color = this.starColor
  }

  private updateStars() {
    this.stars = Array(5).fill(false).map((_, i) => i < this.rating);
  }
}
