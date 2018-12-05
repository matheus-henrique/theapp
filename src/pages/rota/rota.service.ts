import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class RotaService {
	
	constructor(private _http: HttpClient) {}


	parada_mais_proxima_user(latitude,longitude, linha){
		let headers = new HttpHeaders();
		headers.append('Latitude',latitude);
		headers.append('Longitude',longitude);
		headers.append('Linha',linha);
		return this._http.get("https://thebusapi.herokuapp.com/linhas/parada_proxima/", {headers:headers})
			.map(res => res)
	}
}