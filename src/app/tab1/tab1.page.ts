import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  darkMode: any
  constructor(
    private themeService: ThemeService,
  ) {

    // this.darkMode = this.themeService.darkMode;
  }

}
