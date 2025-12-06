import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Publication } from '../publications.model';



@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit{

@Input() publication: Publication | undefined;
@Input() year: number | undefined;
  ngOnInit(): void {

  }


}
