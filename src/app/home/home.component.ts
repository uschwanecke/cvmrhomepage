import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Home, Image } from './home.model';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  http: HttpClient = inject(HttpClient)
  data: Home| undefined = undefined;
  images: Image[]|undefined;

  ngOnInit(): void {
    this.http.get('assets/content/home.json').subscribe(data => {
    this.data = data as Home;
    console.log('data', this.data);
    this.images = this.data?.carousel

})
  }
}

