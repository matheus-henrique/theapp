import { Component } from '@angular/core';

import { TempoReal } from '../temporeal/temporeal';
import { Paradas } from '../paradas/paradas';
import { Linhas } from '../linhas/linhas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TempoReal;
  tab2Root: any = Paradas;
  tab3Root: any = Linhas;

  constructor() {

  }
}
