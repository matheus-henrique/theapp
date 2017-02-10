var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TempoRealService } from './temporeal.service';
var TempoReal = (function () {
    function TempoReal(navCtrl, _temposervice) {
        this.navCtrl = navCtrl;
        this._temposervice = _temposervice;
        this.mapOptions = {
            center: new google.maps.LatLng(-5.0782647, -42.7940927),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    }
    TempoReal.prototype.ngOnInit = function () {
        var _this = this;
        this.carregarMapa();
        this._temposervice.todos_veiculos_tempo_real()
            .subscribe(function (res) { return _this.mostrarVeiculos(res); });
    };
    TempoReal.prototype.carregarMapa = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    };
    TempoReal.prototype.mostrarVeiculos = function (veiculos) {
        this._veiculos = veiculos;
        var content2;
        console.log(veiculos);
        for (var i = 0; i < veiculos.length; i++) {
            for (var y = 0; y < veiculos[i].Linha.Veiculos.length; y++) {
                this._marker = new google.maps.Marker({
                    position: { lat: parseFloat(veiculos[i].Linha.Veiculos[y].Lat), lng: parseFloat(veiculos[i].Linha.Veiculos[y].Long) },
                    map: this.map,
                    title: 'Hello World!'
                });
                content2 = veiculos[i].Linha.CodigoLinha + " " + veiculos[i].Linha.Denomicao + "<br>" +
                    "Codigo do Veiculo : " + veiculos[i].Linha.Veiculos[y].CodigoVeiculo + "<br>" +
                    "Origem : " + veiculos[i].Linha.Origem + "<br>" +
                    "Retorno : " + veiculos[i].Linha.Retorno;
                var infowindow = new google.maps.InfoWindow({
                    content: content2
                });
                this._marker.setMap(this.map);
                google.maps.event.addListener(this._marker, 'click', (function (marker, content, infowindow) {
                    return function () {
                        infowindow.setContent(content);
                        infowindow.open(this.map, marker);
                    };
                })(this._marker, content2, infowindow));
            }
        }
    };
    return TempoReal;
}());
__decorate([
    ViewChild('map'),
    __metadata("design:type", ElementRef)
], TempoReal.prototype, "mapElement", void 0);
TempoReal = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'temporeal.html'
    }),
    __metadata("design:paramtypes", [NavController, TempoRealService])
], TempoReal);
export { TempoReal };
//# sourceMappingURL=temporeal.js.map