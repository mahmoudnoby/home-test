import { Component, OnInit } from '@angular/core';
import { UserSettings } from './app-data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name:'Mahmoud',
    emailOffer:true,
    interfaceStyle: 'Dark',
    subscriptionType: 'Annual',
    notes:'here are some notes',
  }
  userSettings: UserSettings = {...this.originalUserSettings};
  constructor() { }

  ngOnInit() {
  }

}
