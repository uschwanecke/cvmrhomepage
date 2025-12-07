import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Teaching } from './teaching.model';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss']
})
export class TeachingComponent  implements OnInit{
  http: HttpClient = inject(HttpClient)
  data: Teaching| undefined = undefined;
  ngOnInit(): void {
    this.http.get('assets/content/teaching.json').subscribe(data => {
    this.data = data as Teaching;
      console.log(this.data)
});
  }
}
