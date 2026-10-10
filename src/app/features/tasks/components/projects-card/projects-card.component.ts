import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projects-card',
  imports: [MatCardModule],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.scss',
})
export class ProjectsCardComponent {}
