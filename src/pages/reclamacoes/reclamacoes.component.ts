import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { CriarPublicacaoPage } from '../criar-publicacao/criar-publicacao'

import { ReclamacaoService } from './reclamacoes.service';
@Component({
	templateUrl: 'reclamacoes.html'
})
export class ReclamacaoComponent implements OnInit {
	private imageSrc: string;
	public reclamacaosobj;
	constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private _reclamacaoservice : ReclamacaoService, public camera: Camera) {}

	ngOnInit() {
			let loading = this.loadingCtrl.create({
	          content: 'Carregando...'
	        });
	        loading.present();
			this._reclamacaoservice.get_all_reclamacao().
  			subscribe(res => {
					loading.dismiss();
					this.reclamacaosobj = res;
				})
	}

	abrirCriarReclamacao(){
		this.navCtrl.push(CriarPublicacaoPage);
	}

	private openGallery (): void {
	  let cameraOptions = {
	    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
	    destinationType: this.camera.DestinationType.FILE_URI,      
	    quality: 100,
	    targetWidth: 1000,
	    targetHeight: 1000,
	    encodingType: this.camera.EncodingType.JPEG,      
	    correctOrientation: true
	  }

	  this.camera.getPicture(cameraOptions)
	    .then(file_uri => this.imageSrc = file_uri, 
	    err => console.log(err));   
	}
}