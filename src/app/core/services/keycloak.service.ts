import { inject, Injectable } from '@angular/core';
import Keycloak, { KeycloakProfile } from 'keycloak-js';
import { ClientProfile } from '../interfaces/ClientKeycloak.interface';
import { defer, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeycloakService {
  private readonly keycloak = inject(Keycloak);

  getUserId(): Observable<ClientProfile> {
    return defer(async () => {
      const isAuthenticated = await this.keycloak.authenticated;
      let profile: any;
      if (isAuthenticated) {
        profile = await this.keycloak.loadUserProfile();
      }
      return profile as ClientProfile;
    });
  }
}
