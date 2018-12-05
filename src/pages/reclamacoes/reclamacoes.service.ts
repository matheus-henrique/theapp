import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class ReclamacaoService {
	
    constructor(private _http: HttpClient) {}
    


    get_all_reclamacao(){
        return this._http.get("http://localhost:8000/reclamacoes/")
			.map((res) => res)
    }

}