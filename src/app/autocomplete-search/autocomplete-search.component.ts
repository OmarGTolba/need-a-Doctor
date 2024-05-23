import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.css']
})
export class AutocompleteSearchComponent implements OnInit, OnDestroy {
  @Input() placeholder!: string;
  @Input() width!: string;
  query: string = '';
  items: string[] = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango'];
  filteredItems: string[] = [];
  clicked: boolean = false;

  private clickListener: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.clickListener = this.onClickOutside.bind(this);
    document.addEventListener('click', this.clickListener);
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.clickListener);
  }

  clickInput() {
    this.filteredItems = this.items;
    this.clicked = true;
  }

  filterItems() {
    if (this.query.length > 0) {
      this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.query.toLowerCase()));
    } else {
      this.filteredItems = [];
    }
  }

  selectItem(item: string) {
    this.query = item;
    this.filteredItems = [];
  }

  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.clicked = false;
    this.filteredItems = [];
  }
}
