import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ParadasService } from './paradas.service';

import { DetalhesParadas } from '../detalhes_paradas/detalhes_paradas.component';
 


@Component({
  selector: 'page-contact',
  templateUrl: 'paradas.html'
})
export class Paradas{

  constructor(public navCtrl: NavController, public ps: ParadasService){

  }

  parada_especifica(num){
  	this.ps.pegar_linha_especifica(num).subscribe(res => {
	  			this.navCtrl.push(DetalhesParadas,{dados : res})
	  			}
  		)
  }



  marcar_pontos_mapa_paradas(paradas){
  	for(let i = 0; i < paradas.Paradas.length; i++){

  	}
  }

}
