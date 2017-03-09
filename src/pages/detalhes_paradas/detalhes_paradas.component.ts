import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


import { NavController,NavParams,ToastController } from 'ionic-angular';
import { Paradas } from '../paradas/paradas';

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
	brightness = 5;
	circle : any;
	directionsService = new google.maps.DirectionsService;
	directionsDisplay;

	mapOptions = {
	      center: new google.maps.LatLng(-5.0782647, -42.7940927),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP

	}

	constructor(public navCtrl : NavController, public navParams : NavParams, public tc : ToastController) {
		this.dados = navParams.get('dados');
		
	}




	ngOnInit(){
		this.loadMap();
		console.log(this.dados);
	}


	loadMap(){

	    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
	    if(this.dados.Paradas)
	    	this.marcar_pontos_mapa_paradas('23123');
	    else
	    	this.marcar_parada_mais_proxima();
	 
	  }

  marcar_parada_mais_proxima(){
  	let marker = new google.maps.Marker({
  		position: {lat: parseFloat(this.dados.Lat), lng: parseFloat(this.dados.Long)},
  		map: this.map
  	});

  	let marker2 = new google.maps.Marker({
  		position: {lat: -5.118302, lng: -42.761196},
  		map: this.map
  	});

  	this.circle = new google.maps.Circle({
  		strokeColor: '#FF0000',
	    strokeOpacity: 0.8,
	    strokeWeight: 2,
	    fillColor: '#FF0000',
	    fillOpacity: 0.35,
	    map: this.map,
	    center: marker.position,
	    radius: this.brightness * 5

  	});
  	this.map.setCenter(marker.position);


  }


  aumentar_circulo(event){
  	this.circle.setRadius(this.brightness * 5);
  	let marker_distance = new google.maps.LatLng(parseFloat(this.dados.Lat),parseFloat(this.dados.Long));
  	let marker2_distance = new google.maps.LatLng(-5.118302,-42.761196)
  	let distance = google.maps.geometry.spherical.computeDistanceBetween(marker_distance, marker2_distance);
  	if(distance <= this.brightness * 5){
  		console.log("Ta dentro");
  	}else{
  		console.log("Ta fora");
  	}

  }


  marcar_pontos_mapa_paradas(paradas){
  	// let waypts = [];

  	for(let i = 0; i < this.dados.Paradas.length; i++){
  		console.log(i + ": " + this.dados.Paradas[i].CodigoParada + " | " + this.dados.Paradas[i].Denomicao);

		let _markerpoint = new google.maps.Marker({
		    position: {lat: parseFloat(this.dados.Paradas[i].Lat), lng: parseFloat(this.dados.Paradas[i].Long)},
		    map: this.map//,
		    //icon: "/assets/icon/button_S-6.png"
  			});

		this._marker.push(_markerpoint);


		let content2 = "Denominação : "+this.dados.Paradas[i].Denomicao.toString()+ "\n" +"Endereço : "+this.dados.Paradas[i].Endereco.toString();

		var infowindow = new google.maps.InfoWindow({
				    content: content2
		});

		google.maps.event.addListener(_markerpoint,'click', (marker,content,infowindow) => this.criar_toast(content2))




		/*waypts.push({
			location : new google.maps.LatLng(parseFloat(this.dados.Paradas[i].Lat),parseFloat(this.dados.Paradas[i].Long))

		});*/
			
		  	
  	}



  	
  	
	/*let request = {
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
	 });*/
  }


  criar_toast(mensagem){
  	let toast = this.tc.create({
  		message : mensagem,
  		duration: 3000,
  		showCloseButton: true,
  		closeButtonText: "OK",
  		position: 'top'
  	});
  	

  	toast.present();
  }
}
