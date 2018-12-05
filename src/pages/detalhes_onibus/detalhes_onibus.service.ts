import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'
import { HttpClient, HttpErrorResponse, HttpHeaders  } from '@angular/common/http';

import 'rxjs/Rx';

@Injectable()
export class DetalhesOnibusService {
	
	constructor(private _http: HttpClient) {}
	latitude : any;
	longitude : any;


	trans_lat_lon_end(latitude,longitude){
		let headers = new HttpHeaders();
		headers.set('Latitude',latitude);
		headers.set('Longitude',longitude);
		return this._http.get("http://thebusapi.herokuapp.com/trans_lat_long_in_end/",{headers : headers})
			.map(res => res)
	}


	cal_distantancia_user_veic(latitude_user,longitude_user,latitude_bus,longitude_bus){
		return this._http.get("https://maps.googleapis.com/maps/api/distancematrix/json?mode=bicycling&origins="+latitude_bus+","+longitude_bus+"&destinations="+latitude_user+","+longitude_user+"&key=AIzaSyBzoi-NFSqX9lo1mCotxpe6tktxlb5j14A")
			.map(res => res)
	 
	}


	mostrar_foto_onibus(numvec){

		return this._http.get("http://onibusbrasil.com/ajax/busca.php?o1=&o2="+numvec+"&o3=&o4=&o5=&o6=41820&o7=&o8=&o9=&o10=d&o11=1&o12=15&o13=1&o14=0&o15=")
			.map(res => res)
	}
}