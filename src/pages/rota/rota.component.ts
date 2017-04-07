import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';
import { NavController,NavParams,LoadingController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { RotaService } from './rota.service';

import { Storage } from '@ionic/storage';

declare var google;

@Component({
	selector: 'rota',
	templateUrl: 'rota.component.html'
})
export class RotaComponent implements OnInit {

	@ViewChild('map') mapElement: ElementRef;
  	map: any;
  	dados : any;
  	markers = [];
	mapOptions = {
	  center: '',
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    marker : any;
	constructor(public navCtlr : NavController, public navParams : NavParams, public rs : RotaService, public loadingCtrl: LoadingController,public storage : Storage) {
		this.dados = this.navParams.get('dados');
		console.log(this.dados);
	}

	ngOnInit() {
		this.loadMap();
	}	

	ionViewWillEnter(){
	let tipo_do_mapa;
	 this.storage.ready().then(() => {
	      this.storage.get('tipo_mapa').then((val) => {
	      		 switch(val){
	      		 	case 'ROADMAP':
	      		 		tipo_do_mapa = google.maps.MapTypeId.ROADMAP
	      		 		break;
	      		 	case 'HYBRID':
	      		 		tipo_do_mapa = google.maps.MapTypeId.HYBRID
	      		 		break;
	      		 	case 'SATELLITE':
	      		 		tipo_do_mapa = google.maps.MapTypeId.SATELLITE
	      		 		break;
	      		 	case 'TERRAIN':
	      		 		tipo_do_mapa = google.maps.MapTypeId.TERRAIN
	      		 		break;

	      		 }
	      		 console.log(tipo_do_mapa);
	      		 this.map.setMapTypeId(tipo_do_mapa);
	      })
	  });

	} 


	loadMap(){
		this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

		Geolocation.getCurrentPosition().then((position) => {
			 let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			 let directionsService = new google.maps.DirectionsService();
			 let directionsDisplay = new google.maps.DirectionsRenderer();
			 let way : any;
			 let img;
			 let _m;
			 this.mapOptions.center = latLng;
			  let loading = this.loadingCtrl.create({
			    content: 'Carregando...'
			  });


			 
			 loading.present();
			 this.rs.parada_mais_proxima_user(position.coords.latitude, position.coords.longitude, "0"+this.dados.Linha).subscribe(
			 	res => {
			 		

					 let request = { 
					 	origin : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
					 	destination : new google.maps.LatLng(this.dados.Lat,this.dados.Long),
					 	waypoints: [{location : new google.maps.LatLng(res.Lat,res.Long)}],
					 	travelMode: google.maps.TravelMode.DRIVING
					 }




					 let marker = new google.maps.Marker({
					    position: latLng,
					    title:"Hello World!",
					    icon: '/assets/icon/male.png'
					});

					if(this.dados.Zona == "Norte"){
			  			img = '/assets/icon/norte.png'
					}
					else if(this.dados.Zona == "Leste"){
						img = '/assets/icon/leste.png'
					}
					else if(this.dados.Zona == "Sudeste"){
						img = '/assets/icon/sudeste.png'
					}
					else if(this.dados.Zona == "Sul"){
						img = '/assets/icon/sul.png'
					}
					else{
						img = '/assets/icon/outros.png'
					}

					 let market_onibus = new google.maps.Marker({
					 	position: new google.maps.LatLng(this.dados.Lat,this.dados.Long),
					 	icon : img
					 });


				    
					 let marker_parada = new google.maps.Marker({
					 	position: new google.maps.LatLng(res.Lat,res.Long),
					 	icon :'/assets/icon/busstop.png'
					 });


					 directionsService.route(request, function(result, status) {
				      if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
				         directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
				      }
				   	});

					
					 directionsDisplay.setOptions({suppressMarkers: true});
					 directionsDisplay.setMap(this.map);
					 marker.setMap(this.map);
					 market_onibus.setMap(this.map);
					 marker_parada.setMap(this.map);
				 },
				 err => console.log(err),
				 () => loading.dismiss());
		});
 
	  
	 
	    

  }


}