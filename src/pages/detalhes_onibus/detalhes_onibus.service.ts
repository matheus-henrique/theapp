import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http'


import 'rxjs/Rx';

@Injectable()
export class DetalhesOnibusService {
	
	constructor(private _http: Http) {}
	latitude : any;
	longitude : any;


	trans_lat_lon_end(latitude,longitude){
		let headers = new Headers();
		headers.append('Latitude',latitude);
		headers.append('Longitude',longitude);
		let options = new RequestOptions({ headers : headers});
		return this._http.get("http://127.0.0.1:8000/trans_lat_long_in_end/",options)
			.map(res => res.json())
	}


	cal_distantancia_user_veic(latitude_user,longitude_user,latitude_bus,longitude_bus){
		return this._http.get("https://maps.googleapis.com/maps/api/distancematrix/json?mode=bicycling&origins="+latitude_bus+","+longitude_bus+"&destinations="+latitude_user+","+longitude_user+"&key=AIzaSyBzoi-NFSqX9lo1mCotxpe6tktxlb5j14A")
			.map(res => res.json())
	 
	}


	mostrar_foto_onibus(numvec){

		return this._http.get("http://onibusbrasil.com/ajax/busca.php?o1=&o2="+numvec+"&o3=&o4=&o5=&o6=41820&o7=&o8=&o9=&o10=d&o11=1&o12=15&o13=1&o14=0&o15=")
			.map(res => res.json())
	}
}