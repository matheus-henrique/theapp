import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable()
export class LinhasService {

	url = "https://thebusapi.herokuapp.com/linha/zona/"
	
	constructor(private _http : HttpClient) {}


	pegarTodasAsLinhas(){
		return this._http.get("https://thebusapi.herokuapp.com/todasaslinhasestaticas/").map(res => res)
	}

	linhasZonaSul(){
		return this._http.get(this.url+"Sul").map(res => res)
	}
	linhasZonaSudeste(){
		return this._http.get(this.url+"Sudeste").map(res => res)
	}
	linhasZonaLeste(){
		return this._http.get(this.url+"Leste").map(res => res)
	}
	linhasZonaNorte(){
		return this._http.get(this.url+"Norte").map(res => res)
	}
	linhasZonaTerminal(){
		return this._http.get(this.url+"Terminal").map(res => res)
	}
	linhasZonaOutros(){
		return this._http.get(this.url+"Outros").map(res => res)
	}
}