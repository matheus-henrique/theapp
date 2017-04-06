import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';


import { NavController,NavParams,ToastController } from 'ionic-angular';
import { Paradas } from '../paradas/paradas';
import { Geolocation } from 'ionic-native';

import { DetalhesParadasService } from './detalhes_paradas.service';

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
	brightness = 30;
	circle : any;
	latitude : any;
	longitude : any;
	modificou = false;
	directionsService = new google.maps.DirectionsService;
	directionsDisplay;
	paradas_radio : any;
	paradas : any;
	menu = 'detalhes';

	mapOptions = {
	      center: new google.maps.LatLng(-5.0782647, -42.7940927),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP

	}

	constructor(public navCtrl : NavController, public navParams : NavParams, public tc : ToastController, public ds : DetalhesParadasService) {
		this.dados = navParams.get('dados');
		
		
	}




	ngOnInit(){
		this.loadMap();
		console.log(this.dados);
		
	}

	pegar_localizao_user(latitude,longitude){
		this.latitude = latitude;
		this.longitude = longitude;
	}


	loadMap(){

	    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
	    Geolocation.getCurrentPosition().then((position) => {
	    	this.latitude = position.coords.latitude;
	    	this.longitude = position.coords.longitude;
		    if(this.dados){
		    	if(this.dados.Paradas)
		    		this.marcar_pontos_mapa_paradas('23123');
		    	else
		    		this.marcar_parada_mais_proxima();
		    }  
		   	else
		   		this.raio_paradas_mais_proximas(position.coords.latitude,position.coords.longitude);

	   	});
	 
	  }


  raio_paradas_mais_proximas(latitude, longitude){
  	this.menu = 'mapa';

  	let marker = new google.maps.Marker({
  		position: {lat : latitude, lng : longitude},
  		icon: '/assets/icon/male.png',
  		map: this.map
  	});

  	console.log(latitude,longitude);

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

  marcar_parada_mais_proxima(){
  	let marker = new google.maps.Marker({
  		position: {lat: parseFloat(this.dados.Lat), lng: parseFloat(this.dados.Long)},
  		icon :'/assets/icon/busstop.png',
  		map: this.map,

  	});

  }


  aumentar_circulo(event){
  	this.modificou = true;
  	this.circle.setRadius(this.brightness * 5);
  	console.log(this.paradas_radio);
  	
  }


  mostrarParadasRaio(){
  	if(!this.paradas){
  		this.ds.calcular_raio_paradas().
  			subscribe(res => this.marcar_pontos_raio_paradas(res))
  	}else{
  		this.marcar_pontos_raio_paradas(this.paradas);
  	}
  
  }



  marcar_pontos_raio_paradas(paradas){
  	this.paradas = paradas;
  	this.paradas_radio = [];
  	let markers = [];
  	let marker = new google.maps.LatLng(parseFloat(this.latitude),parseFloat(this.longitude)); //origem
  	let marker_parada;
  	let distance;
  	for(let i = 0; i < paradas.length; i++){
  		marker_parada = new google.maps.LatLng(paradas[i].Lat,paradas[i].Long)
  		distance = google.maps.geometry.spherical.computeDistanceBetween(marker, marker_parada);
  		if(distance <= this.brightness * 5){
  			this.paradas_radio.push(paradas[i]);
  			let _markerpoint = new google.maps.Marker({
  				position: {lat: parseFloat(paradas[i].Lat), lng: parseFloat(paradas[i].Long)},
  				icon :'/assets/icon/busstop.png',
  				map : this.map
  			});

  			markers.push(_markerpoint);
  		}else{
  			console.log("Esta fora")
  		}
  	}
  }

  marcar_pontos_mapa_paradas(paradas){
  	// let waypts = [];

  	for(let i = 0; i < this.dados.Paradas.length; i++){
  		console.log(i + ": " + this.dados.Paradas[i].CodigoParada + " | " + this.dados.Paradas[i].Denomicao);

		let _markerpoint = new google.maps.Marker({
		    position: {lat: parseFloat(this.dados.Paradas[i].Lat), lng: parseFloat(this.dados.Paradas[i].Long)},
		    map: this.map,//,
		    icon :'/assets/icon/busstop.png',
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
