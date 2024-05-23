import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-specialities-carousel',
  templateUrl: './specialities-carousel.component.html',
  styleUrl: './specialities-carousel.component.css'
})
export class SpecialitiesCarouselComponent {
  @ViewChild('carouselInner') carouselInner!: ElementRef;

  carouselItems = [
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 1', text: 'Some text for card 1' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 2', text: 'Some text for card 2' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 2', text: 'Some text for card 2' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 2', text: 'Some text for card 2' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 2', text: 'Some text for card 2' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 2', text: 'Some text for card 2' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 2', text: 'Some text for card 2' },
    { imgSrc: 'https://via.placeholder.com/300', title: 'Card 3', text: 'Some text for card 3' }
  ];

  cardWidth = 300; // Adjust this according to your card width
  scrollPosition = 0;

  handleNavigation(direction: string) {
    const carouselWidth = this.carouselInner.nativeElement.scrollWidth;

    if (direction === 'next' && this.scrollPosition < carouselWidth - this.cardWidth * 3) {
      this.scrollPosition += this.cardWidth;
    } else if (direction === 'prev' && this.scrollPosition > 0) {
      this.scrollPosition -= this.cardWidth;
    }

    this.carouselInner.nativeElement.scrollTo({ left: this.scrollPosition, behavior: 'smooth' });
  }

}
