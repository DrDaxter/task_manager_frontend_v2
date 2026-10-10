import { Component, inject, OnInit } from '@angular/core';
import { ProjectsCardComponent } from '../../components/projects-card/projects-card.component';
import { KeycloakService } from '../../../../core/services/keycloak.service';
import { forkJoin, map, switchMap } from 'rxjs';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-tasks-page',
  imports: [ProjectsCardComponent],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.scss',
})
export class TasksPageComponent implements OnInit {
  private readonly keycloakService = inject(KeycloakService);
  private readonly projectService = inject(ProjectsService);

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.keycloakService
      .getUserId()
      .pipe(
        map((item) => item.id),
        switchMap((userId) => this.projectService.getProjectsByUserId(userId)),
      )
      .subscribe({
        next: (projects) => {
          console.log(projects);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
