import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { People } from './people.model';



@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit{
  http: HttpClient = inject(HttpClient)
  data: People| undefined = undefined;
  ngOnInit(): void {
    this.http.get('assets/content/people.json').subscribe(data => {
    this.data = data as People;
    console.log('data', this.data.head);

})
  }


}
