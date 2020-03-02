
import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'table-root',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  headers = [];
  books = [];
  @Input() set theaders(headers) {
    this.headers = JSON.parse(headers);
    this.chref.detectChanges();
  }
  @Input() set tbooks(books) {
    this.books = JSON.parse(books);
    this.chref.detectChanges();
  }
  bookType = 0;
  @Output() bookList: EventEmitter<number> = new EventEmitter();
  constructor(private chref: ChangeDetectorRef) { }


  ngOnInit() {
  }

  changeBookType(num: number) {
    this.bookType = num;
    this.bookList.emit(this.bookType);
  }
}
