import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/Rx';


@Injectable()
export class ParadasService {
	
	constructor(private _http: Http) {}




	pegar_linha_especifica(num){
		return this._http.get("http://127.0.0.1:8000/parada_especifica/"+num)
			.map(res => res.json())
	}


	parada_mais_proxima(){
		return this._http.get("http://127.0.0.1:8000/parada_proxima/")
			.map(res => res.json())
	}
}