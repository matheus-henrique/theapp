import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// Components
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TempoReal } from '../pages/temporeal/temporeal';
import { Paradas } from '../pages/paradas/paradas';
import { Linhas } from '../pages/linhas/linhas';

//Services
import { TempoRealService } from '../pages/temporeal/temporeal.service'


@NgModule({
  declarations: [
    MyApp,
    TempoReal,
    Paradas,
    Linhas,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TempoReal,
    Paradas,
    Linhas,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TempoRealService]
})
export class AppModule {}
