import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TempoRealService } from './temporeal.service';

import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'temporeal.html'
})
export class TempoReal implements OnInit{

	@ViewChild('map') mapElement: ElementRef;
	map: any;
	_veiculos: any;
	_marker : any;
	mapOptions = {
	      center: new google.maps.LatLng(-5.0782647, -42.7940927),
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP

	}

	constructor(public navCtrl: NavController, private _temposervice: TempoRealService) {

	 }

	 ngOnInit(){
	 	this.carregarMapa();
	 	this._temposervice.todos_veiculos_tempo_real()
	 		.subscribe(res => this.mostrarVeiculos(res))
	 }

	carregarMapa(){
	 
	    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

  }


  abrirConfiguracoes(){
  	this.navCtrl.push(ConfiguracoesComponent);
  }


    mostrarVeiculos(veiculos){
  		this._veiculos = veiculos;
  		var content2 : any;
  		console.log(veiculos);
  		for(let i = 0; i < veiculos.length; i++){
  			for(let y = 0; y < veiculos[i].Linha.Veiculos.length; y++){
  				this._marker = new google.maps.Marker({
				    position: {lat: parseFloat(veiculos[i].Linha.Veiculos[y].Lat), lng: parseFloat(veiculos[i].Linha.Veiculos[y].Long)},
				    map: this.map,
				    title: 'Hello World!'
				    // icon: '/assets/icon/icon.png'
			  	});
  				content2 = veiculos[i].Linha.CodigoLinha + " " + veiculos[i].Linha.Denomicao + "<br>" +
  					"Codigo do Veiculo : " + veiculos[i].Linha.Veiculos[y].CodigoVeiculo + "<br>" + 
  					"Origem : " + veiculos[i].Linha.Origem + "<br>" +
  					"Retorno : " + veiculos[i].Linha.Retorno;
			  	
			  	var infowindow = new google.maps.InfoWindow({
				    content: content2
				});

				this._marker.setMap(this.map);

				google.maps.event.addListener(this._marker,'click', (function(marker,content,infowindow){ 
			        return function() {
			           infowindow.setContent(content);
			           infowindow.open(this.map,marker);
			        };
			    })(this._marker,content2,infowindow)); 
			  	
  			}
  		}
  	}


}
