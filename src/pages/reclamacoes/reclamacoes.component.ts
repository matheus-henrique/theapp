import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
	templateUrl: 'reclamacoes.html'
})
export class ReclamacaoComponent implements OnInit {
	private imageSrc: string;
	constructor(navController : NavController) {}

	ngOnInit() {
		
	}

	private openGallery (): void {
	  let cameraOptions = {
	    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	    destinationType: Camera.DestinationType.FILE_URI,      
	    quality: 100,
	    targetWidth: 1000,
	    targetHeight: 1000,
	    encodingType: Camera.EncodingType.JPEG,      
	    correctOrientation: true
	  }

	  Camera.getPicture(cameraOptions)
	    .then(file_uri => this.imageSrc = file_uri, 
	    err => console.log(err));   
	}
}