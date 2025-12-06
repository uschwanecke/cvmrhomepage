import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ResearchList } from './research.model';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit{
  http: HttpClient = inject(HttpClient)
  data: ResearchList| undefined = undefined;
  ngOnInit(): void {
    this.http.get('assets/content/research.json').subscribe(data => {
    this.data = data as ResearchList;
      console.log(this.data)
})
  }

}
