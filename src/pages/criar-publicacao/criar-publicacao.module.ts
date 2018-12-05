import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarPublicacaoPage } from './criar-publicacao';

@NgModule({
  declarations: [
    CriarPublicacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarPublicacaoPage),
  ],
})
export class CriarPublicacaoPageModule {}
