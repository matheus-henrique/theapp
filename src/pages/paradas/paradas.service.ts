import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'
import 'rxjs/Rx';


@Injectable()
export class ParadasService {
	
	constructor(private _http: Http) {}




	pegar_linha_especifica(num){
		return this._http.get("https://thebusapi.herokuapp.com/parada_especifica/"+num)
			.map(res => res.json())
	}


	parada_mais_proxima(latitude, longitude){
		let headers = new Headers();
		headers.append('Latitude',latitude);
		headers.append('Longitude',longitude);
		let options = new RequestOptions({ headers : headers});
		return this._http.get("https://thebusapi.herokuapp.com/parada_proxima/",options)
			.map(res => res.json())
	}
}