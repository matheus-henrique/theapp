import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// Components
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TempoReal } from '../pages/temporeal/temporeal';
import { Paradas } from '../pages/paradas/paradas';
import { Linhas } from '../pages/linhas/linhas';
import { ConfiguracoesComponent } from '../pages/configuracoes/configuracoes.component';
import { ReclamacaoComponent } from '../pages/reclamacoes/reclamacoes.component';

//Services
import { TempoRealService } from '../pages/temporeal/temporeal.service';
import { LinhasService } from '../pages/linhas/linhas.service';

@NgModule({
  declarations: [
    MyApp,
    TempoReal,
    Paradas,
    Linhas,
    TabsPage,
    ConfiguracoesComponent,
    ReclamacaoComponent 
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TempoReal,
    Paradas,
    Linhas,
    TabsPage,
    ConfiguracoesComponent,
    ReclamacaoComponent 
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TempoRealService,LinhasService]
})
export class AppModule {}
