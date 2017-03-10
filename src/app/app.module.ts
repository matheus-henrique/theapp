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
import { DetalhesParadas } from '../pages/detalhes_paradas/detalhes_paradas.component';



//Services
import { TempoRealService } from '../pages/temporeal/temporeal.service';
import { LinhasService } from '../pages/linhas/linhas.service';
import { ParadasService } from '../pages/paradas/paradas.service';
import { DetalhesParadasService } from '../pages/detalhes_paradas/detalhes_paradas.service';

@NgModule({
  declarations: [
    MyApp,
    TempoReal,
    Paradas,
    Linhas,
    TabsPage,
    ConfiguracoesComponent,
    ReclamacaoComponent,
    DetalhesParadas
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
    ReclamacaoComponent,
    DetalhesParadas
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TempoRealService,LinhasService,ParadasService,DetalhesParadasService]
})
export class AppModule {}
