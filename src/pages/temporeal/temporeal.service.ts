import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx'

import 'rxjs/Rx';

@Injectable()
export class TempoRealService {
	
	constructor(private _http: HttpClient) {}



	todos_veiculos_tempo_real(){
		return this._http.get("https://thebusapi.herokuapp.com/linhas/")
			.map(res => res)
	}


	veiculo_especifico_tempo_real(valor : string){
		return this._http.get("http://thebusapi.herokuapp.com/linhas/"+valor+"/")
			.take(10)
			.map(res => res)
	}


	distancia_onibus_usuario(latitude,longitude){
		return this._http.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+latitude+","+longitude+"&destinations=-5.0823736,-42.799119&mode=bicycling&language=pt-BR&key=AIzaSyChAXtrYJ9zWrk5hdERf9yeIGLLScpoqec").
			map(res => res)
	}
}