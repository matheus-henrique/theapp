import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class CriarPublicacaoService {

	
	
	constructor(public _http : HttpClient) {}

	enviar_nova_postagem(msg,foto){
		let headers = new Headers();
		headers.append('texto',msg);
		headers.append('img',foto);
		console.log(foto);

		let options = new RequestOptions({ headers : headers});
		return this._http.post("http://thebusapi.herokuapp.com/reclamacoes/",{'texto':msg,'img':foto}).
			map(res => res);

	}
}