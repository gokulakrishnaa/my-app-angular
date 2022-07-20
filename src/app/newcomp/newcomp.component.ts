import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css'],
})
export class NewcompComponent implements OnInit {
  li: any;
  lis = new Array();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://pixabay.com/api/?key=27966403-0a048ec62372550d4def29287&category=nature'
      )
      .subscribe((Response) => {
        this.li = Response;
        this.lis = this.li.hits;
        console.log(this.li.hits);
      });
  }
}
