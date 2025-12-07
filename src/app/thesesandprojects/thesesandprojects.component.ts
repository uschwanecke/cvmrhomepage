import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ThesesAndProjects } from './thesesandprojects.model';

@Component({
  selector: 'app-thesesandprojects',
  templateUrl: './thesesandprojects.component.html',
  styleUrls: ['./thesesandprojects.component.scss']
})
export class ThesesandprojectsComponent implements OnInit{
  http: HttpClient = inject(HttpClient)
  data: ThesesAndProjects| undefined = undefined;
  ngOnInit(): void {
    this.http.get('assets/content/theses.json').subscribe(data => {
    this.data = data as ThesesAndProjects;
      console.log(this.data)
});
  }

}
