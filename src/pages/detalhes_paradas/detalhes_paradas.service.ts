import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DetalhesParadasService {
	
	constructor(public _http : Http) {}



	calcular_raio_paradas(){



		return this._http.get("http://127.0.0.1:8000/paradas/").
			map(res => res.json());

	}
}