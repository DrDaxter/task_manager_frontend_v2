import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  // temporary backend url, will be replaced with env variable in the future
  private readonly baseUrl = 'http://localhost:5227/api';

  private readonly httpClient = inject(HttpClient);

  getProjectsByUserId(userId: string): Observable<any> {
    return this.httpClient.get(
      this.baseUrl + '/Project/GetProjectsByUserId/' + userId,
    );
  }
}
