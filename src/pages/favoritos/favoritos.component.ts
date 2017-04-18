import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'

import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
	selector: 'favoritos',
	templateUrl: 'favoritos.component.html'
})
export class FavoritosComponent implements OnInit {
	favoritos : any;
	constructor(public navCtrl : NavController, public navParams : NavParams, public storage : Storage, public tc : ToastController) {
		this.favoritos = navParams.get('favoritos');
	}

	ngOnInit() {
		let toast =  this.tc.create({
			message : 'Arraste um item para excluir',
			duration: 3000
		});

		toast.present();
	}


	deletarFavorito(CodigoLinha,fav){
		let temp;
		let index = this.favoritos.indexOf(fav);
		this.favoritos.splice(index,1);
		this.storage.ready().then(() => {

		    this.storage.get('favoritos').then((val) => {
				 temp = val;
				 temp.splice(this.procuraFavorito(val,CodigoLinha), 1);
				 this.storage.set('favoritos',temp);
		      })
		  	});

	  	
	}


	procuraFavorito(favoritos, codigoLinha){
		for(let i = 0; i < favoritos.length; i++){
			if(favoritos[i].linha.indexOf(codigoLinha) > - 1)
				return i
		}
	}

}