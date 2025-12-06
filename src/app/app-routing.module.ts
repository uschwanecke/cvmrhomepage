import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PublicationsComponent } from './publications/publications.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ThesesandprojectsComponent } from './thesesandprojects/thesesandprojects.component';

const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'home', component: HomeComponent, },
    { path: 'people', component: PeopleComponent, },
    { path: 'publications', component: PublicationsComponent, },
    { path: 'research', component: ResearchComponent, },
    { path: 'teaching', component: TeachingComponent, },
    { path: 'thesesandprojects', component: ThesesandprojectsComponent, },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
