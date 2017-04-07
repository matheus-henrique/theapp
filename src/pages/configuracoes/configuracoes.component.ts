import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
	templateUrl: ' configuracoes.html'
})
export class ConfiguracoesComponent implements OnInit {
	opc_selecionado = true;
	opc = [true,false,false,false]
	opc_mapa = 'ROADMAP';
	zoom : any;
	constructor(navCtrl : NavController,public storage: Storage) {
		storage.ready().then(() => {

	      storage.get('tipo_mapa').then((val) => {
	      		this.opc_mapa = val;

	      })


	      storage.get('zoom').then((val) => {
	      		console.log(val);
	         	this.zoom = val;

	      })

		});
	}

	ngOnInit() {
		
	}


	notify(){ // 1 e apertei 0
		this.storage.set('tipo_mapa',this.opc_mapa);
		console.log(this.opc_mapa);
	}
}