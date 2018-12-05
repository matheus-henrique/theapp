import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class ParadasService {
	
	constructor(private _http: HttpClient) {}




	pegar_linha_especifica(num){
		return this._http.get("https://thebusapi.herokuapp.com/parada_especifica/"+num)
			.map(res => res)
	}


	parada_mais_proxima(latitude, longitude){
		let headers = new HttpHeaders();
		headers.append('Latitude',latitude);
		headers.append('HTTP_LONGITUDE',longitude);
		console.log(headers);
		return this._http.get("https://thebusapi.herokuapp.com/parada_proxima/",{headers: headers})
			.map(res => res)
	}
}