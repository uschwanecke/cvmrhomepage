import { Component, Input } from '@angular/core';
import { Research } from '../research.model';

@Component({
  selector: 'app-research-element',
  templateUrl: './research-element.component.html',
  styleUrls: ['./research-element.component.scss']
})
export class ResearchElementComponent {
@Input() research: Research | undefined;
}
