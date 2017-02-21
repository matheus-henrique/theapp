import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/Rx';

@Injectable()
export class LinhasService {

	url = "http://127.0.0.1:8000/linha/zona/"
	
	constructor(private _http : Http) {}


	pegarTodasAsLinhas(){
		return this._http.get("http://127.0.0.1:8000/todasaslinhasestaticas/").map(res => res.json())
	}

	linhasZonaSul(){
		return this._http.get(this.url+"Sul").map(res => res.json())
	}
	linhasZonaSudeste(){
		return this._http.get(this.url+"Sudeste").map(res => res.json())
	}
	linhasZonaLeste(){
		return this._http.get(this.url+"Leste").map(res => res.json())
	}
	linhasZonaNorte(){
		return this._http.get(this.url+"Norte").map(res => res.json())
	}
	linhasZonaTerminal(){
		return this._http.get(this.url+"Terminal").map(res => res.json())
	}
	linhasZonaOutros(){
		return this._http.get(this.url+"Outros").map(res => res.json())
	}
}