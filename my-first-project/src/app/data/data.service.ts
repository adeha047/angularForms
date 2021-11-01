import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  postUserSettingsForm(userSettings: UserSettings) :Observable<UserSettings> {

  }
}
