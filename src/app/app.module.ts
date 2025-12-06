import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { ResearchComponent } from './research/research.component';
import { ResearchElementComponent } from './research/research-element/research-element.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ThesesandprojectsComponent } from './thesesandprojects/thesesandprojects.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './people/person/person.component';
import { PublicationComponent } from './publications/publication/publication.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    ResearchComponent,
    ResearchElementComponent,
    PublicationsComponent,
    TeachingComponent,
    ThesesandprojectsComponent,
    PersonComponent,
    HomeComponent,
    PublicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
