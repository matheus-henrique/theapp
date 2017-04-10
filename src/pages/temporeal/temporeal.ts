import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { NavController,AlertController,LoadingController } from 'ionic-angular';

import { TempoRealService } from './temporeal.service';

import { ConfiguracoesComponent } from '../configuracoes/configuracoes.component';
import { ReclamacaoComponent } from '../reclamacoes/reclamacoes.component';
import { DetalhesOnibusComponent } from '../detalhes_onibus/detalhes_onibus.component';
import { Storage } from '@ionic/storage';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'temporeal.html'
})
export class TempoReal implements OnInit{
	menu = 'detalhes';
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	_veiculos: any;
	_marker = [];
	encontrado = false;
	distancia: any;
	icon = 'search';
	mostrar_pesquisa = true;
	
	tipo_mapa : any;
	localizacao : any;
	zoom : any;
	vec_temp : any;
	
	opc_selecionado = 'naoselecionado';


	icon_zonas= ['bus','bus','bus','bus'];
	

	mapOptions = {
	      center: new google.maps.LatLng(-5.0782647, -42.7940927),
	      zoom: 8,
	      mapTypeId: google.maps.MapTypeId.SATELLITE

	}

	constructor(public navCtrl: NavController, private _temposervice: TempoRealService, private ac: AlertController,public loadingCtrl: LoadingController,public storage: Storage) {
			  storage.ready().then(() => {

		      storage.get('tipo_mapa').then((val) => {
		         	if(val == null){
		         		storage.set('tipo_mapa','ROADMAP');
		         		// this.mapOptions.mapTypeId = 'val';
		         	}
		      })

		       storage.get('localizacao').then((val) => {
		         	if(val == null){
		         		storage.set('localizacao',false);
		         	}else{
		         		console.log('Fonte')
		         	}


		      })


		        storage.get('zoom').then((val) => {
		         	if(val == null){
		         		storage.set('zoom','15')
		         	}else{
		         		this.mapOptions.zoom = val;
		         	}
		      })

		     });
	 }


	adicionarFavoritos(linha){
		let fav_temp : any;
		let teste = {linha : linha}

		console.log(linha)
		this.opc_selecionado = 'selecionado';
		  this.storage.ready().then(() => {

		      this.storage.get('favoritos').then((val) => {
		         	if(val == null){
		         		this.storage.set('favoritos', []);
		         		// this.mapOptions.mapTypeId = 'val';
		         	}else{
		         		this.storage.get('favoritos').then((val) =>{
		         			fav_temp = val;
		         			fav_temp.push(teste);
		         			
		         			this.storage.set('favoritos',fav_temp);
		         			console.log(val);
		         		});

		         	}
		      })
		  });
	}


	 ngOnInit(){
	 	this.carregarMapa();
	 	
	 	 console.log(this.mapElement.nativeElement);
	 	 let loading = this.loadingCtrl.create({
		    content: 'Carregando...'
		  });

		 loading.present();
	 	this._temposervice.todos_veiculos_tempo_real()
	 		.subscribe(res => this.mostrarVeiculos(res),
	 			err => console.log(err),
	 			() => loading.dismiss())
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
		      		google.maps.event.trigger(this.mapElement.nativeElement, 'resize');
		      })
		  });

	} 

	carregarMapa(){
	 
	    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

  }


  menumudar(){
  	google.maps.event.trigger(this.mapElement.nativeElement, 'resize');
  }


  mostrarDetalhesOnibus(onibus,infoonibus){
  	console.log(onibus);
  	onibus.Zona = infoonibus.Zona;
  	onibus.Linha = infoonibus.CodigoLinha;
  	this.navCtrl.push(DetalhesOnibusComponent,{onibus : onibus})
  }

  sumirOnibus(zona){
  		for(let i = 0; i < this._marker.length; i++){
  				if(this._marker[i].title == zona){
  					if(this._marker[i].getVisible()){
  						this._marker[i].setVisible(false);	
  						if(zona == "Sudeste"){
				  			this.icon_zonas[0] = 'undo';
				  		}
				  		else if(zona == "Leste"){
				  			this.icon_zonas[1] = 'undo';
				  		}
				  		else if(zona == "Norte"){
				  			this.icon_zonas[2] = 'undo';
				  		}
				  		else{
				  			this.icon_zonas[3] = 'undo';
				  		}
  					}
  					else{
  						this._marker[i].setVisible(true);
  						if(zona == "Sudeste"){
				  			this.icon_zonas[0] = 'bus';
				  		}
				  		else if(zona == "Leste"){
				  			this.icon_zonas[1] = 'bus';
				  		}
				  		else if(zona == "Norte"){
				  			this.icon_zonas[2] = 'bus';
				  		}
				  		else{
				  			this.icon_zonas[3] = 'bus';
				  		}	
  					}
  				}
  		}
  }


  abrirConfiguracoes(){
  	this.navCtrl.push(ConfiguracoesComponent);
  }


  veiculoEspecifico(ev){
  		var valor = ev.target.value;
  		this._veiculos = this.vec_temp;
  		this._veiculos = this._veiculos.filter((vec) => {
  			 return (vec.CodigoLinha.indexOf(valor.toLowerCase()) > -1);
  		});

  }


  mostrar_onibus_especifico(){
  	let aa;
  	let primeiro = false;
  	if(this.icon == 'undo'){
  		for(let i = 0; i < this._marker.length; i++){
  			this._marker[i].setVisible(true);		
  		}

  		this.icon = 'search'
  		primeiro = true;
  	}
  	if(this.icon == 'search' && primeiro == false){
	  	let prompt = this.ac.create({
	      title: 'Procurar linha',
	      message: "Digite o prefixo da linha, para mostrar somente ela no mapa.",
	      inputs: [
	        {
	          name: 'title',
	          placeholder: 'Prefixo da linha, ex : 508,517'
	        },
	      ],
	      buttons: [
	        {
	          text: 'Cancelar',
	          handler: data => {
	            console.log('Cancel clicked');
	          }
	        },
	        {
	          text: 'Save',
	          handler: data => {
	          	console.log(data);
	          	this.filtrar_markers_pelo_num_linha(data.title);
	            console.log('Procurar');
	          }
	        }
	      ]
	    });

		prompt.present();
  	}
  }


  filtrar_markers_pelo_num_linha(num){
  	let existe_num_linha = false;

  	for(let i = 0; i < this._marker.length; i++){
  		if(this._marker[i].num_linha == num){
  			existe_num_linha = true;
  			this.map.setCenter(this._marker[i].position);
  			break
  		}
  	}

  	if(existe_num_linha == true){
  		this.icon = 'undo';
  		for(let i = 0; i < this._marker.length; i++){
  			if(this._marker[i].num_linha != num){
	  			this._marker[i].setVisible(false);
	  		}
  		}
  	}
  	else{
  		let alert = this.ac.create({
  			title: "Erro",
  			subTitle: "Não foi encontrado ônibus, para a linha : "+num,
  			buttons: ['OK']
  		});

  		alert.present();
  	}
  }

    mostrarVeiculos(veiculos){
    	let date = new Date();
    	let minuto = date.getMinutes();
  		let texto : any;
  		var content2 : any;
  		let img_cadeirante : any;
  		let img = '';
  		for(let i = 0; i < veiculos.length; i++){
  			for(let y = 0; y < veiculos[i].Veiculos.length; y++){
  				if(veiculos[i].Zona == "Norte"){
  					img = '/assets/icon/norte.png'
				}
				else if(veiculos[i].Zona == "Leste"){
  					img = '/assets/icon/leste.png'
				}
				else if(veiculos[i].Zona == "Sudeste"){
  					img = '/assets/icon/sudeste.png'
				}
				else if(veiculos[i].Zona == "Sul"){
  					img = '/assets/icon/sul.png'
				}
				else{
					img = '/assets/icon/outros.png'
				}

				

  				let _markerpoint = new google.maps.Marker({
				    position: {lat: parseFloat(veiculos[i].Veiculos[y].Lat), lng: parseFloat(veiculos[i].Veiculos[y].Long)},
				    map: this.map,
				    num_linha: veiculos[i].CodigoLinha,
				    title: veiculos[i].Zona,
				    icon: img
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

			  	veiculos[i].Veiculos[y].texto = texto;


			  	veiculos[i].favorito = false;
			  	 this.storage.ready().then(() => {

			      this.storage.get('favoritos').then((val) => {
			         	if(val == null){
			         		this.storage.set('favoritos', []);
			         	}else{
			         		console.log(val);
			         		console.log(val.length)
			         		/*for(let k = 0; k < val.length; k++){
			         			if(val[k].linha == veiculos[i].CodigoLinha)
			         				veiculos[i].favorito = true;
			         				console.log("Entrou aqui");
	
			         		}*/
			         	}
			         		
			 		 })
			 	 });



			  	
			  	
			  	if(veiculos[i].Veiculos[y].Cadeirante){
			  		img_cadeirante = "http://pessoascomdeficiencia.com.br/site/wp-content/uploads/2016/04/unnamed.jpg"
			  	}else{
			  		img_cadeirante = "http://2.bp.blogspot.com/_Xo1nI_2EICc/TK0PNesxoII/AAAAAAAABVI/g8Q51G7wXp8/s1600/naoentra.jpg"
			  	}

			  	
			  	
			
		  		content2 = veiculos[i].CodigoLinha + " " + veiculos[i].Denomicao + "  <img src='"+img_cadeirante+"' width='20'/>"+"<br>" +
					"Codigo do Veiculo : " + veiculos[i].Veiculos[y].CodigoVeiculo + "<br>" + 
					"Origem : " + veiculos[i].Origem + "<br>" +
					"Retorno : " + veiculos[i].Retorno + "<br>" +
					"Visto por ultimo : " + texto + "<br>";




  			
			  	
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
  		console.log(veiculos);
  		this._veiculos = veiculos;
  		this.vec_temp = veiculos;
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
