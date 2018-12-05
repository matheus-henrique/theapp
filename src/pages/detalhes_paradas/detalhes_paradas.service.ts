import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DetalhesParadasService {
	
	constructor(public _http : HttpClient) {}



	calcular_raio_paradas(){



		return this._http.get("http://thebusapi.herokuapp.com/paradas/").
			map(res => res);

	}
}