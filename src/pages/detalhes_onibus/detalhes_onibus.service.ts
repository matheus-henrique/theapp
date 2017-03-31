import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'

import 'rxjs/Rx';

@Injectable()
export class DetalhesOnibusService {
	
	constructor(private _http: Http) {}



	trans_lat_lon_end(latitude,longitude){
		let headers = new Headers();
		headers.append('Latitude',latitude);
		headers.append('Longitude',longitude);
		let options = new RequestOptions({ headers : headers});
		return this._http.get("http://127.0.0.1:8000/trans_lat_long_in_end/",options)
			.map(res => res.json())
	}
}