import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { DetalhesOnibusService } from './detalhes_onibus.service';
import { RotaComponent } from '../rota/rota.component';

import { Geolocation } from 'ionic-native';

declare var google;

@Component({
	selector: 'detalhes_onibus',
	templateUrl: 'detalhes_onibus.component.html'
})

export class DetalhesOnibusComponent implements OnInit {
	dados : any;
	endereco_atual_onibus : any;
	@ViewChild('map') mapElement: ElementRef;
 	map: any
 	latitude : any;
 	longitude : any;
 	distancia : any;




	constructor(public navCtrl : NavController, public navParams: NavParams, public dos : DetalhesOnibusService) {
		this.dados = navParams.get('onibus');
		this.calcula_visto_por_ultimo(this.dados);

	}

	ngOnInit() {
		Geolocation.getCurrentPosition().then((position) => {
	    	this.latitude = position.coords.latitude;
	    	this.longitude = position.coords.longitude;
		   	this.dos.cal_distantancia_user_veic(this.latitude,this.longitude,this.dados.Lat,this.dados.Long).subscribe(
		   		res => this.distancia = res)


	   	});
		this.dos.trans_lat_lon_end(this.dados.Lat, this.dados.Long).subscribe(res => this.endereco_atual_onibus = res);
		this.loadMap();
	}



	detalhes_rota(){
		this.navCtrl.push(RotaComponent,{dados : this.dados});
	}

	calcula_visto_por_ultimo(veiculo){
			let d = new Date();
			let texto;
		  	let teste = veiculo.Hora.substr(0,2);

		  	let teste2 = veiculo.Hora.substr(3,2);
		  
		  	let teste3 = veiculo.Hora.substr(6,2);
		  	
		  	d.setHours(d.getHours() - teste);
		  	d.setMinutes(d.getMinutes() - teste2);
		  	d.setSeconds(d.getSeconds() - teste3);

		  	if(d.getHours() > 0){
		  		texto = "Há "+ d.getHours() + " Horas e "+ d.getMinutes() + " minuto(s) atrás";
		  		this.dados.Hora = texto;
		  	}
		  	else{
			  	if(d.getMinutes() > 0){
			  		texto = "Há " + d.getMinutes() + " minuto(s) atrás";
			  		this.dados.Hora = texto;
			  	}else{
			  		texto = "Há 30 segundos atrás";
			  		this.dados.Hora = texto;
			  	}

		  	}

	}


	loadMap(){
 		let img;
	    let latLng = new google.maps.LatLng(this.dados.Lat, this.dados.Long);
	 
	    let mapOptions = {
	      center: latLng,
	      zoom: 15,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    }
	 
	    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

	    var myLatlng = new google.maps.LatLng(this.dados.Lat,this.dados.Long);

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


	    var marker = new google.maps.Marker({
		    position: myLatlng,
		    title:"Hello World!",
		    icon : img
		});

		// To add the marker to the map, call setMap();
		marker.setMap(this.map);
 
  	}


}