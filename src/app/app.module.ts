import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// Components
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { TempoReal } from '../pages/temporeal/temporeal';
import { Paradas } from '../pages/paradas/paradas';
import { Linhas } from '../pages/linhas/linhas';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfiguracoesComponent } from '../pages/configuracoes/configuracoes.component';
import { ReclamacaoComponent } from '../pages/reclamacoes/reclamacoes.component';
import { DetalhesParadas } from '../pages/detalhes_paradas/detalhes_paradas.component';
import { DetalhesOnibusComponent } from '../pages/detalhes_onibus/detalhes_onibus.component';
import { RotaComponent } from '../pages/rota/rota.component';
import { FavoritosComponent } from '../pages/favoritos/favoritos.component';
import { CriarPublicacaoPage } from '../pages/criar-publicacao/criar-publicacao';


import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';
//Services
import { TempoRealService } from '../pages/temporeal/temporeal.service';
import { LinhasService } from '../pages/linhas/linhas.service';
import { ParadasService } from '../pages/paradas/paradas.service';
import { DetalhesParadasService } from '../pages/detalhes_paradas/detalhes_paradas.service';
import { DetalhesOnibusService } from '../pages/detalhes_onibus/detalhes_onibus.service';
import { RotaService } from '../pages/rota/rota.service';
import { ReclamacaoService } from '../pages/reclamacoes/reclamacoes.service';
import { CriarPublicacaoService } from '../pages/criar-publicacao/criar-publicacao.service';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    TempoReal,
    Paradas,
    Linhas,
    TabsPage,
    ConfiguracoesComponent,
    ReclamacaoComponent,
    DetalhesParadas,
    DetalhesOnibusComponent,
    RotaComponent,
    FavoritosComponent,
    CriarPublicacaoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot(),
    BrowserModule,
    HttpClientModule
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
    DetalhesParadas,
    DetalhesOnibusComponent,
    RotaComponent,
    CriarPublicacaoPage,
    FavoritosComponent
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    Camera,
    PhotoLibrary,
    TempoRealService,
    LinhasService,
    ParadasService,
    DetalhesParadasService,
    DetalhesOnibusService,
    RotaService, 
    ReclamacaoService,
    CriarPublicacaoService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
