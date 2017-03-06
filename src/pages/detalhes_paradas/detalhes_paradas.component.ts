import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


import { NavController,NavParams } from 'ionic-angular';

declare var google;

@Component({
	selector: 'paradas',
	templateUrl: 'detalhes_paradas.html'
})
export class DetalhesParadas implements OnInit{

	@ViewChild('map') mapElement: ElementRef;
	map: any;
	dados : any;
	_marker = [];
	inicio : any;
	final : any;
	directionsService = new google.maps.DirectionsService;
	directionsDisplay;

	mapOptions = {
	      center: new google.maps.LatLng(-5.0782647, -42.7940927),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP

	}

	constructor(public navCtrl : NavController, public navParams : NavParams) {
		this.dados = navParams.get('dados');
		
	}




	ngOnInit(){
		this.loadMap();
	}


	loadMap(){

		
 

	    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
	    this.marcar_pontos_mapa_paradas('23123');
	 
	  }


  marcar_pontos_mapa_paradas(paradas){
  	let waypts = [];
  	for(let i = 0; i < this.dados.Paradas.length; i++){
  		console.log(i + ": " + this.dados.Paradas[i].CodigoParada + " | " + this.dados.Paradas[i].Denomicao);

		let _markerpoint = new google.maps.Marker({
		    position: {lat: parseFloat(this.dados.Paradas[i].Lat), lng: parseFloat(this.dados.Paradas[i].Long)},
		    map: this.map,
  			});

		this._marker.push(_markerpoint);

		waypts.push({
			location : new google.maps.LatLng(parseFloat(this.dados.Paradas[i].Lat),parseFloat(this.dados.Paradas[i].Long))

		});
			
		  	
  	}

  	console.log(this.dados.Paradas[0].Lat);

  	
	let request = {
  		origin : new google.maps.LatLng(parseFloat(this.dados.Paradas[0].Lat),parseFloat(this.dados.Paradas[0].Long)),
  		destination: new google.maps.LatLng(parseFloat(this.dados.Paradas[50].Lat),parseFloat(this.dados.Paradas[50].Long)),
  		// waypoints : waypts,
  		travelMode: google.maps.TravelMode.DRIVING
  	}

	this.directionsService.route(request,(result, status) =>{
	      if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
	      		this.directionsDisplay = new google.maps.DirectionsRenderer;
	      	 	this.directionsDisplay.setMap(this.map);
	        	this.directionsDisplay.setDirections(result);
	      }
	 });
  }
}