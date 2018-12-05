import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'

@Injectable()
export class RotaService {
	
	constructor(private _http: Http) {}


	parada_mais_proxima_user(latitude,longitude, linha){
		let headers = new Headers();
		headers.append('Latitude',latitude);
		headers.append('Longitude',longitude);
		headers.append('Linha',linha);
		let options = new RequestOptions({ headers : headers});
		return this._http.get("https://thebusapi.herokuapp.com/linhas/parada_proxima/",options)
			.map(res => res.json())
	}
}