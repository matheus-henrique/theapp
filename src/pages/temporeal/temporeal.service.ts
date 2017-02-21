import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Rx'

import 'rxjs/Rx';

@Injectable()
export class TempoRealService {
	
	constructor(private _http: Http) {}



	todos_veiculos_tempo_real(){
		return this._http.get("http://127.0.0.1:8000/post/veiculos/")
			.map(res => res.json())
	}


	veiculo_especifico_tempo_real(valor : string){
		return this._http.get("http://127.0.0.1:8000/linhas/"+valor+"/")
			.take(10)
			.map(res => res.json())
	}
}