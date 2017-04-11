import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'

import { Storage } from '@ionic/storage';

@Component({
	selector: 'favoritos',
	templateUrl: 'favoritos.component.html'
})
export class FavoritosComponent implements OnInit {
	favoritos : any;
	constructor(public navCtrl : NavController, public navParams : NavParams, public storage : Storage) {
		this.favoritos = navParams.get('favoritos');
	}

	ngOnInit() {
		
	}


	deletarFavorito(CodigoLinha,fav){
		let temp;
		this.storage.remove(CodigoLinha);
		let index = this.favoritos.indexOf(fav);
		this.favoritos.splice(index,1);
		this.storage.ready().then(() => {

	    this.storage.get('favoritos').then((val) => {
	         temp = val;
	         let index_storage = temp.indexOf(CodigoLinha);
			 temp.splice(index_storage + 1, 1);
			 this.storage.set('favoritos',temp);
	      })
	  	});

	  	
	}
}