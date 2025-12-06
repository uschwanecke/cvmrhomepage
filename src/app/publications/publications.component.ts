import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Publications } from './publications.model';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit{
  http: HttpClient = inject(HttpClient)
  data: Publications| undefined = undefined;
  ngOnInit(): void {
    this.http.get('assets/content/publications.json').subscribe(data => {
    this.data = data as Publications;
    console.log('data', this.data);

})
  }
}
