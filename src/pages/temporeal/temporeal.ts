import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TempoRealService } from './temporeal.service';

import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import { ReclamacaoComponent } from '../reclamacoes/reclamacoes.component';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'temporeal.html'
})
export class TempoReal implements OnInit{

	@ViewChild('map') mapElement: ElementRef;
	map: any;
	_veiculos: any;
	_marker = [];
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
  	this.navCtrl.push(ReclamacaoComponent);
  }


  veiculoEspecifico(ev){
  		var valor = ev.target.value;
  		setTimeout(this._temposervice.veiculo_especifico_tempo_real(valor)
  			.subscribe(res => console.log(res)),5000)

  }


    mostrarVeiculos(veiculos){
    	let date = new Date();
    	let minuto = date.getMinutes();
    	console.log(minuto);
  		this._veiculos = veiculos;
  		let texto : any;
  		var content2 : any;
  		let img_cadeirante : any;
  		for(let i = 0; i < veiculos.length; i++){
  			for(let y = 0; y < veiculos[i].Veiculos.length; y++){
  				let _markerpoint = new google.maps.Marker({
				    position: {lat: parseFloat(veiculos[i].Veiculos[y].Lat), lng: parseFloat(veiculos[i].Veiculos[y].Long)},
				    map: this.map,
				    title: 'Hello World!'
				    // icon: '/assets/icon/icon.png'
			  	});

			  	//let visto_por_ultimo = parseInt(minuto.toString()) - parseInt(veiculos[i].Veiculos[y].Hora.substr(4,5));
			  	//console.log(veiculos[i].Veiculos[y].CodigoVeiculo + " " + visto_por_ultimo)
			  	let d = new Date();
			  	let teste = veiculos[i].Veiculos[y].Hora.substr(0,2);

			  	let teste2 = veiculos[i].Veiculos[y].Hora.substr(3,2);
			  	let teste3 = veiculos[i].Veiculos[y].Hora.substr(6,2);
			  	d.setHours(d.getHours() - teste);
			  	d.setMinutes(d.getMinutes() - teste2);
			  	d.setSeconds(d.getSeconds() - teste3);
			  	if(d.getHours() > 0){
			  		texto = "Há "+ d.getHours() + " Horas e "+ d.getMinutes() + " minuto(s) atrás";
			  	}
			  	else{
				  	if(d.getMinutes() > 0){
				  		texto = "Há " + d.getMinutes() + " minuto(s) atrás";
				  	}else{
				  		texto = "Há 30 segundos atrás";
				  	}

			  	}
			  	
			  	if(veiculos[i].Veiculos[y].Cadeirante){
			  		img_cadeirante = "http://pessoascomdeficiencia.com.br/site/wp-content/uploads/2016/04/unnamed.jpg"
			  	}else{
			  		img_cadeirante = "http://2.bp.blogspot.com/_Xo1nI_2EICc/TK0PNesxoII/AAAAAAAABVI/g8Q51G7wXp8/s1600/naoentra.jpg"
			  	}
  				content2 = veiculos[i].CodigoLinha + " " + veiculos[i].Denomicao + "  <img src='"+img_cadeirante+"' width='20'/>"+"<br>" +
  					"Codigo do Veiculo : " + veiculos[i].Veiculos[y].CodigoVeiculo + "<br>" + 
  					"Origem : " + veiculos[i].Origem + "<br>" +
  					"Retorno : " + veiculos[i].Retorno + "<br>" +
  					"Visto por ultimo : " + texto;
			  	
			  	var infowindow = new google.maps.InfoWindow({
				    content: content2
				});

				this._marker.push(_markerpoint);
				google.maps.event.addListener(_markerpoint,'click', (function(marker,content,infowindow){ 
			        return function() {
			           infowindow.setContent(content);
			           infowindow.open(this.map,marker);
			        };
			    })(_markerpoint,content2,infowindow)); 
			  	
  			}
  		}
  	}



  	atualizar(){
  		console.log("Entrei");
  		for(let i = 0; i < this._marker.length; i++){
  				this._marker[i].setMap(null);
  		}

  		this._temposervice.todos_veiculos_tempo_real()
	 		.subscribe(res => this.mostrarVeiculos(res))
  	}


}
