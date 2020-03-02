import { Component, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  headers = [
    { name: 'ID', selector: 'bookId' },
    { name: 'Name', selector: 'name' },
    { name: 'Author', selector: 'author.name' },
    { name: 'Category', selector: 'category' },
    { name: 'Number Of Pages', selector: 'numberOfPages' },
    { name: 'Price', selector: 'price' },
    { name: 'Total Unit Sold', selector: 'totalUnitSold' },
    { name: 'Publication Date', selector: 'publicationDate' }
  ];
  bookType: number = null;
  books = [];

  constructor(private tableService: TableServiceService) { }

  stringify = JSON.stringify;
  ngOnInit() {
    this.handleBookType({detail: 0});
  }

  handleBookType(type) {
    this.bookType = type.detail;
    console.log(type);
    if (this.bookType === 0) {
      this.books = [];
      this.tableService.getData('Konklux').subscribe((res: any[]) => {
        res.forEach(element => {
          if (('netReleaseDate' in element)) {
            this.books.push(element);
          }
        });
        console.log(this.books);
      });
    } else {
      this.books = [];
      this.tableService.getData('Konklux').subscribe((res: any[]) => {
        res.forEach(element => {
          if (('storySummary' in element)) {
            this.books.push(element);
          }
        });
      });
    }
  }
}
