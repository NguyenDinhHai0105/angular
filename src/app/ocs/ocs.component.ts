import { Component, OnInit } from '@angular/core';
import { OcsService } from '../ocs.service';

@Component({
  selector: 'app-ocs',
  templateUrl: './ocs.component.html',
  styleUrls: ['./ocs.component.css']
})
export class OcsComponent implements OnInit {

  public books!: any;

  constructor(
    private ocs: OcsService
  ){}

  ngOnInit(): void {
    this.getAllBooks();
    console.log(this.getAllBooks());
  }

  getAllBooks() {
    this.ocs.getBookList().subscribe(
      (respone: any) => {
        this.books = respone;
      }
    )
  }


}