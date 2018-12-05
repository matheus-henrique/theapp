webpackJsonp([1],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__criar_publicacao_criar_publicacao__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reclamacoes_service__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReclamacaoComponent = (function () {
    function ReclamacaoComponent(loadingCtrl, navCtrl, _reclamacaoservice, camera) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this._reclamacaoservice = _reclamacaoservice;
        this.camera = camera;
    }
    ReclamacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this._reclamacaoservice.get_all_reclamacao().
            subscribe(function (res) {
            loading.dismiss();
            _this.reclamacaosobj = res;
        });
    };
    ReclamacaoComponent.prototype.abrirCriarReclamacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__criar_publicacao_criar_publicacao__["a" /* CriarPublicacaoPage */]);
    };
    ReclamacaoComponent.prototype.openGallery = function () {
        var _this = this;
        var cameraOptions = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(cameraOptions)
            .then(function (file_uri) { return _this.imageSrc = file_uri; }, function (err) { return console.log(err); });
    };
    ReclamacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\reclamacoes\reclamacoes.html"*/'<ion-header></ion-header>\n\n<ion-content>\n\n    <ion-fab right bottom>\n\n        <button ion-fab (click)="abrirCriarReclamacao()"><ion-icon name="add"></ion-icon></button>\n\n      </ion-fab>\n\n  <ion-card *ngFor="let item of reclamacaosobj;">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAMFBMVEX29vKdnZPKysOoqJ/V1c6+vrejo5ng4Nrw8Oyzs6vr6+bExL3a2tSurqW5ubHl5eBEZuBoAAAEKUlEQVR4nO2di5KDIAxFxSfa1v7/324dd7cPbVW44aZMzhdwJwRCCKEoDMMwDMMwDMMwDMMwDMN4puvKcuyrqh/LsuvYowljKJvKvVA15cAe1zGup4WIfzGnK3t0exnKtyp+tXyFXbrms4qZRrvDdP0eGRO9ZinDLmv8W0XtBCvbIzqca0v2iFcZLsdkTFwUGqU+aI5fo9Tscb9yCpExcWKP/Al/yMufaTx79Hd8gHvcuahREqdDkZKIeTXTsBXMBPv5HRUef47X4dyZreK2DwbtH6+0fDcZETqcG9k6IBNrgj25Ns5Q+6m4OmqUDue4URfMIGSTAA3CNQnQIFSTdEgdzvFO8dFB1jO8kAuyqd9pWTpgm+EfrE0RPLN4cws8s2hzC7xmTXDWrRIvhJOx253m3U9PEYLX4RxDx1VCCOMSCBow/sFwEkDyZAkjnSLg6xxvh2+HE4Qt0UvocC59WkhgX59Iv7fDQ9+Z9AGwQIAykX79zUYIKFX6SvrUqcg2wthIshESed32jktyITI6CIG8CTEhJsSEmBATYkJyEiIUa1n0a0KETojpL62yObNnI0Qor5U+QZdNpjGb3K/Q1p5eh8zWnj6JktFFj8j6y7hDFLkMZVTRiay/lBoOCSEMHRLLFmPREijXYhVsZVMdJFCMQnqPnEsFHf6QyHp7AXcS1pNXuJPQnuxDS+OZxfHgki3e2zfwuZ34Ogm6ANNK4wtwlMJ8HwoN5alNIHJ5Y4XcE7kNIAacEHL7B1i8xX7jCnN3er8XkLuTX7gWsKyQgrYiEJPwDQIyiQKDQEyiwSAQk6gwCMAkOgwCMIkSg0SbRItBok2ixiCRJuFkrteJMgk9ynokwiR6PGQiwiSKPOSGD86nMHMnawTnU1R0pHogOFenytWLiNIU9sAXBK5bmjaRmcCKDs5T/E8Eers2Xw9O1enry2pCtGFCtGFCtGFCtJGNkMAQRUmr3weyCRoDw3hdqYci4mDFb/T7TPBRl90e95VMGuBHZOiUOUlEwZOuuRXxBkPVAhxVNqAos+WjrhUqPStwZP2ZmjAllzvEXK6nIbVn/Gjeo74kIHt8h+vkz1yFB+h7hZFVDHjsH7E9UP4aw8ugSDkLtXy4hV4Jg8jNDw/jSPRdoq+F2lY8MtbSq/G5EWkqu6RtBKfYh59AJRD6XVTYMd5oQbuLr8VWqS16oLtcUznGOm2DmWI8Y9zpo+N8z/CMNaoyZob5o9+ZStIGS1ElYyJQSthvprIE/JXaCbVmi+Vy7PzlRf4bwHA6ML9wB1gJ9h+KFZtjZt9VRMjXy6nZ89XzVeFitaTdjFpEOgJJsLEQf42ODSVfpOOjkq/S8UGJyD9Ikrzx+PBCfRZvvhVWcIA6yupFqlBPT1lW7lUwf0inpl1u8SI5aXkWF6nAngdp+TPJDwwXRUtT6q+sAAAAAElFTkSuQmCC">\n\n      </ion-avatar>\n\n      <h2>{{item.user}}</h2>\n\n      <p>{{item.created_at}}</p>\n\n    </ion-item>\n\n  \n\n    <img src="http://localhost:8000{{item.img}}">\n\n  \n\n    <ion-card-content>\n\n      <p>{{item.texto}}</p>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>{{item.like}} Curtiram</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-start clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>0 Comentarios</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          11h ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\reclamacoes\reclamacoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__reclamacoes_service__["a" /* ReclamacaoService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], ReclamacaoComponent);
    return ReclamacaoComponent;
}());

//# sourceMappingURL=reclamacoes.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarPublicacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__criar_publicacao_service__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reclamacoes_reclamacoes_component__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CriarPublicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CriarPublicacaoPage = (function () {
    function CriarPublicacaoPage(loadingCtrl, cp, photoLibrary, camera, navCtrl, navParams) {
        this.loadingCtrl = loadingCtrl;
        this.cp = cp;
        this.photoLibrary = photoLibrary;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.photo = '';
    }
    CriarPublicacaoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CriarPublicacaoPage');
    };
    CriarPublicacaoPage.prototype.enviarPublicacao = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.cp.enviar_nova_postagem(this.msgproblema, this.photo).subscribe(function (res) {
            loading.dismiss();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reclamacoes_reclamacoes_component__["a" /* ReclamacaoComponent */]);
        });
    };
    CriarPublicacaoPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        console.log(sourceType);
        this.photo = '';
        var source = null;
        if (sourceType == 0) {
            source = this.camera.PictureSourceType.CAMERA;
        }
        else {
            source = this.camera.PictureSourceType.PHOTOLIBRARY;
        }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            targetWidth: 100,
            targetHeight: 100,
            sourceType: source
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            var base64image = 'data:image/jpeg;base64,' + imageData;
            _this.photo = base64image;
        }, function (error) {
            console.error(error);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    CriarPublicacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-criar-publicacao',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\criar-publicacao\criar-publicacao.html"*/'<!--\n\n  Generated template for the CriarPublicacaoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Criar Publicação</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-buttons center>\n\n                <button ion-button larger (click)="takePicture(1)">\n\n                  <ion-icon name="images"></ion-icon>\n\n                </button>\n\n              </ion-buttons> <ion-buttons center>\n\n                  <button ion-button larger (click)="takePicture(0)">\n\n                    <ion-icon name="camera"></ion-icon>\n\n                  </button>\n\n                </ion-buttons>\n\n        </ion-item>\n\n        <ion-item>\n\n          <img src="{{photo}}">\n\n        </ion-item>\n\n       \n\n\n\n        <ion-item>\n\n            <ion-textarea [(ngModel)]="msgproblema" placeholder="Problemas ? Conte para gente"></ion-textarea>\n\n          </ion-item>\n\n      \n\n\n\n          <button ion-button full (click)="enviarPublicacao()">Enviar</button>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\criar-publicacao\criar-publicacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__criar_publicacao_service__["a" /* CriarPublicacaoService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_photo_library__["a" /* PhotoLibrary */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CriarPublicacaoPage);
    return CriarPublicacaoPage;
}());

//# sourceMappingURL=criar-publicacao.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/criar-publicacao/criar-publicacao.module": [
		698,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 213;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriarPublicacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CriarPublicacaoService = (function () {
    function CriarPublicacaoService(_http) {
        this._http = _http;
    }
    CriarPublicacaoService.prototype.enviar_nova_postagem = function (msg, foto) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('texto', msg);
        headers.append('img', foto);
        console.log(foto);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://thebusapi.herokuapp.com/reclamacoes/", { 'texto': msg, 'img': foto }).
            map(function (res) { return res; });
    };
    CriarPublicacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CriarPublicacaoService);
    return CriarPublicacaoService;
}());

//# sourceMappingURL=criar-publicacao.service.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReclamacaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReclamacaoService = (function () {
    function ReclamacaoService(_http) {
        this._http = _http;
    }
    ReclamacaoService.prototype.get_all_reclamacao = function () {
        return this._http.get("http://thebusapi.herokuapp.com/reclamacoes/")
            .map(function (res) { return res; });
    };
    ReclamacaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ReclamacaoService);
    return ReclamacaoService;
}());

//# sourceMappingURL=reclamacoes.service.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__temporeal_temporeal__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paradas_paradas__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__linhas_linhas__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__temporeal_temporeal__["a" /* TempoReal */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__paradas_paradas__["a" /* Paradas */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__linhas_linhas__["a" /* Linhas */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\tabs\tabs.html"*/'<ion-tabs color="appcolor">\n\n  <ion-tab [root]="tab1Root" tabTitle="Tempo Real" tabIcon="map" tabBadge="3" tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Paradas" tabIcon="bus"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Linhas" tabIcon="information"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoReal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__temporeal_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuracoes_configuracoes_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reclamacoes_reclamacoes_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalhes_onibus_detalhes_onibus_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favoritos_favoritos_component__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TempoReal = (function () {
    function TempoReal(navCtrl, _temposervice, ac, loadingCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._temposervice = _temposervice;
        this.ac = ac;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.menu = 'detalhes';
        this._marker = [];
        this.encontrado = false;
        this.icon = 'search';
        this.mostrar_pesquisa = true;
        this.atualizou = false;
        this.favoritos = [];
        this.opc_selecionado = 'naoselecionado';
        this.icon_zonas = ['bus', 'bus', 'bus', 'bus'];
        this.mapOptions = {
            center: new google.maps.LatLng(-5.0782647, -42.7940927),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        storage.ready().then(function () {
            storage.get('tipo_mapa').then(function (val) {
                if (val == null) {
                    storage.set('tipo_mapa', 'ROADMAP');
                    // this.mapOptions.mapTypeId = 'val';
                }
            });
            storage.get('localizacao').then(function (val) {
                if (val == null) {
                    storage.set('localizacao', false);
                }
                else {
                    console.log('Fonte');
                }
            });
            storage.get('zoom').then(function (val) {
                if (val == null) {
                    storage.set('zoom', '15');
                }
                else {
                    _this.mapOptions.zoom = val;
                }
            });
        });
    }
    TempoReal.prototype.abrirFavoritos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__favoritos_favoritos_component__["a" /* FavoritosComponent */], { favoritos: this.favoritos });
    };
    TempoReal.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.atualizou = true;
        for (var i = 0; i < this._marker.length; i++) {
            this._marker[i].setMap(null);
        }
        this._temposervice.todos_veiculos_tempo_real()
            .subscribe(function (res) { return _this.mostrarVeiculos(res); }, function (err) { return console.log(err); }, function () { return refresher.complete(); });
    };
    TempoReal.prototype.adicionarFavoritos = function (linha, item) {
        var _this = this;
        var fav_temp;
        var teste = { linha: linha };
        this.favoritos.push(item);
        console.log(linha);
        console.log(this.favoritos);
        this.opc_selecionado = 'selecionado';
        this.storage.ready().then(function () {
            _this.storage.get('favoritos').then(function (val) {
                if (val == null) {
                    _this.storage.set('favoritos', []);
                    // this.mapOptions.mapTypeId = 'val';
                }
                else {
                    _this.storage.get('favoritos').then(function (val) {
                        fav_temp = val;
                        fav_temp.push(teste);
                        _this.storage.set('favoritos', fav_temp);
                        console.log(val);
                    });
                }
            });
        });
    };
    TempoReal.prototype.ngOnInit = function () {
        var _this = this;
        this.carregarMapa();
        console.log(this.mapElement.nativeElement);
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this._temposervice.todos_veiculos_tempo_real()
            .subscribe(function (res) { return _this.mostrarVeiculos(res); }, function (err) { return console.log(err); }, function () { return loading.dismiss(); });
    };
    TempoReal.prototype.ionViewWillEnter = function () {
        var _this = this;
        var tipo_do_mapa;
        this.storage.ready().then(function () {
            _this.storage.get('tipo_mapa').then(function (val) {
                switch (val) {
                    case 'ROADMAP':
                        tipo_do_mapa = google.maps.MapTypeId.ROADMAP;
                        break;
                    case 'HYBRID':
                        tipo_do_mapa = google.maps.MapTypeId.HYBRID;
                        break;
                    case 'SATELLITE':
                        tipo_do_mapa = google.maps.MapTypeId.SATELLITE;
                        break;
                    case 'TERRAIN':
                        tipo_do_mapa = google.maps.MapTypeId.TERRAIN;
                        break;
                }
                console.log(tipo_do_mapa);
                _this.map.setMapTypeId(tipo_do_mapa);
                google.maps.event.trigger(_this.mapElement.nativeElement, 'resize');
            });
        });
    };
    TempoReal.prototype.carregarMapa = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    };
    TempoReal.prototype.menumudar = function () {
        google.maps.event.trigger(this.mapElement.nativeElement, 'resize');
    };
    TempoReal.prototype.mostrarDetalhesOnibus = function (onibus, infoonibus) {
        console.log(onibus);
        onibus.Zona = infoonibus.Zona;
        onibus.Linha = infoonibus.CodigoLinha;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detalhes_onibus_detalhes_onibus_component__["a" /* DetalhesOnibusComponent */], { onibus: onibus });
    };
    TempoReal.prototype.sumirOnibus = function (zona) {
        for (var i = 0; i < this._marker.length; i++) {
            if (this._marker[i].title == zona) {
                if (this._marker[i].getVisible()) {
                    this._marker[i].setVisible(false);
                    if (zona == "Sudeste") {
                        this.icon_zonas[0] = 'undo';
                    }
                    else if (zona == "Leste") {
                        this.icon_zonas[1] = 'undo';
                    }
                    else if (zona == "Norte") {
                        this.icon_zonas[2] = 'undo';
                    }
                    else {
                        this.icon_zonas[3] = 'undo';
                    }
                }
                else {
                    this._marker[i].setVisible(true);
                    if (zona == "Sudeste") {
                        this.icon_zonas[0] = 'bus';
                    }
                    else if (zona == "Leste") {
                        this.icon_zonas[1] = 'bus';
                    }
                    else if (zona == "Norte") {
                        this.icon_zonas[2] = 'bus';
                    }
                    else {
                        this.icon_zonas[3] = 'bus';
                    }
                }
            }
        }
    };
    TempoReal.prototype.abrirConfiguracoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configuracoes_configuracoes_component__["a" /* ConfiguracoesComponent */]);
    };
    TempoReal.prototype.abrirReclamacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reclamacoes_reclamacoes_component__["a" /* ReclamacaoComponent */]);
    };
    TempoReal.prototype.veiculoEspecifico = function (ev) {
        var valor = ev.target.value;
        this._veiculos = this.vec_temp;
        this._veiculos = this._veiculos.filter(function (vec) {
            return (vec.CodigoLinha.indexOf(valor.toLowerCase()) > -1);
        });
    };
    TempoReal.prototype.mostrar_onibus_especifico = function () {
        var _this = this;
        var aa;
        var primeiro = false;
        if (this.icon == 'undo') {
            for (var i = 0; i < this._marker.length; i++) {
                this._marker[i].setVisible(true);
            }
            this.icon = 'search';
            primeiro = true;
        }
        if (this.icon == 'search' && primeiro == false) {
            var prompt_1 = this.ac.create({
                title: 'Procurar linha',
                message: "Digite o prefixo da linha, para mostrar somente ela no mapa.",
                inputs: [
                    {
                        name: 'title',
                        placeholder: 'Prefixo da linha, ex : 508,517'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log(data);
                            _this.filtrar_markers_pelo_num_linha(data.title);
                            console.log('Procurar');
                        }
                    }
                ]
            });
            prompt_1.present();
        }
    };
    TempoReal.prototype.filtrar_markers_pelo_num_linha = function (num) {
        var existe_num_linha = false;
        for (var i = 0; i < this._marker.length; i++) {
            if (this._marker[i].num_linha == num) {
                existe_num_linha = true;
                this.map.setCenter(this._marker[i].position);
                break;
            }
        }
        if (existe_num_linha == true) {
            this.icon = 'undo';
            for (var i = 0; i < this._marker.length; i++) {
                if (this._marker[i].num_linha != num) {
                    this._marker[i].setVisible(false);
                }
            }
        }
        else {
            var alert_1 = this.ac.create({
                title: "Erro",
                subTitle: "Não foi encontrado ônibus, para a linha : " + num,
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    TempoReal.prototype.mostrarVeiculos = function (veiculos) {
        var _this = this;
        var date = new Date();
        var minuto = date.getMinutes();
        var texto;
        var content2;
        var img_cadeirante;
        var img = '';
        this.favoritos = [];
        var _loop_1 = function (i) {
            for (var y = 0; y < veiculos[i].Veiculos.length; y++) {
                if (veiculos[i].Zona == "Norte") {
                    img = '/assets/icon/norte.png';
                }
                else if (veiculos[i].Zona == "Leste") {
                    img = '/assets/icon/leste.png';
                }
                else if (veiculos[i].Zona == "Sudeste") {
                    img = '/assets/icon/sudeste.png';
                }
                else if (veiculos[i].Zona == "Sul") {
                    img = '/assets/icon/sul.png';
                }
                else {
                    img = '/assets/icon/outros.png';
                }
                var _markerpoint = new google.maps.Marker({
                    position: { lat: parseFloat(veiculos[i].Veiculos[y].Lat), lng: parseFloat(veiculos[i].Veiculos[y].Long) },
                    map: this_1.map,
                    num_linha: veiculos[i].CodigoLinha,
                    title: veiculos[i].Zona,
                    icon: img
                });
                //let visto_por_ultimo = parseInt(minuto.toString()) - parseInt(veiculos[i].Veiculos[y].Hora.substr(4,5));
                //console.log(veiculos[i].Veiculos[y].CodigoVeiculo + " " + visto_por_ultimo)
                var d = new Date();
                var teste = veiculos[i].Veiculos[y].Hora.substr(0, 2);
                var teste2 = veiculos[i].Veiculos[y].Hora.substr(3, 2);
                var teste3 = veiculos[i].Veiculos[y].Hora.substr(6, 2);
                d.setHours(d.getHours() - teste);
                d.setMinutes(d.getMinutes() - teste2);
                d.setSeconds(d.getSeconds() - teste3);
                if (d.getHours() > 0) {
                    texto = "Há " + d.getHours() + " Horas e " + d.getMinutes() + " minuto(s) atrás";
                }
                else {
                    if (d.getMinutes() > 0) {
                        texto = "Há " + d.getMinutes() + " minuto(s) atrás";
                    }
                    else {
                        texto = "Há 30 segundos atrás";
                    }
                }
                veiculos[i].Veiculos[y].texto = texto;
                this_1.storage.ready().then(function () {
                    _this.storage.get('favoritos').then(function (val) {
                        if (val == null) {
                            _this.storage.set('favoritos', []);
                        }
                        else {
                            for (var k = 0; k < val.length; k++)
                                if (val[k].linha == veiculos[i].CodigoLinha && veiculos[i].favorito != true) {
                                    veiculos[i].favorito = true;
                                    _this.favoritos.push(veiculos[i]);
                                    veiculos.unshift(veiculos[i]);
                                    veiculos.splice(i + 1, 1);
                                }
                        }
                    });
                });
                if (veiculos[i].Veiculos[y].Cadeirante) {
                    img_cadeirante = "http://pessoascomdeficiencia.com.br/site/wp-content/uploads/2016/04/unnamed.jpg";
                }
                else {
                    img_cadeirante = "http://2.bp.blogspot.com/_Xo1nI_2EICc/TK0PNesxoII/AAAAAAAABVI/g8Q51G7wXp8/s1600/naoentra.jpg";
                }
                content2 = veiculos[i].CodigoLinha + " " + veiculos[i].Denomicao + "  <img src='" + img_cadeirante + "' width='20'/>" + "<br>" +
                    "Codigo do Veiculo : " + veiculos[i].Veiculos[y].CodigoVeiculo + "<br>" +
                    "Origem : " + veiculos[i].Origem + "<br>" +
                    "Retorno : " + veiculos[i].Retorno + "<br>" +
                    "Visto por ultimo : " + texto + "<br>";
                infowindow = new google.maps.InfoWindow({
                    content: content2
                });
                this_1._marker.push(_markerpoint);
                google.maps.event.addListener(_markerpoint, 'click', (function (marker, content, infowindow) {
                    return function () {
                        infowindow.setContent(content);
                        infowindow.open(this.map, marker);
                    };
                })(_markerpoint, content2, infowindow));
            }
        };
        var this_1 = this, infowindow;
        for (var i = 0; i < veiculos.length; i++) {
            _loop_1(i);
        }
        console.log(veiculos);
        this._veiculos = veiculos;
        this.vec_temp = veiculos;
    };
    TempoReal.prototype.atualizar = function () {
        var _this = this;
        console.log("Entrei");
        for (var i = 0; i < this._marker.length; i++) {
            this._marker[i].setMap(null);
        }
        this._temposervice.todos_veiculos_tempo_real()
            .subscribe(function (res) { return _this.mostrarVeiculos(res); });
    };
    TempoReal.prototype.marcarFavoritos = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TempoReal.prototype, "mapElement", void 0);
    TempoReal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\temporeal\temporeal.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n   <button [hidden] = "!mostrar_pesquisa" ion-button menuToggle icon-only>\n\n      <ion-icon name=\'menu\'></ion-icon>\n\n    </button>\n\n    <ion-title [hidden] = "!mostrar_pesquisa" style="text-align: center;">Tempo Real</ion-title>\n\n    <ion-searchbar [hidden] = mostrar_pesquisa\n\n      placeholder="Digite o numero da linha"\n\n      [showCancelButton]="shouldShowCancel"\n\n      (ionInput)="veiculoEspecifico($event)"\n\n      (ionCancel)="onCancel($event)">\n\n    </ion-searchbar>\n\n     <ion-buttons end>\n\n      <button [hidden] = "!mostrar_pesquisa" ion-button icon-only (click)="mostrar_pesquisa = false">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n   </ion-buttons>\n\n   <ion-buttons end>\n\n      <button [hidden] = "mostrar_pesquisa" ion-button icon-only (click)="mostrar_pesquisa = true">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n    <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="menu">\n\n      <ion-segment-button value="detalhes">\n\n        Detalhes\n\n      </ion-segment-button>\n\n      <ion-segment-button value="mapa" (click)="menumudar()">\n\n        Mapa\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header >\n\n    <ion-toolbar color="appcolor">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content >\n\n    <ion-list>\n\n      <button ion-item (click)="abrirConfiguracoes()">\n\n       Configurações <ion-icon name="construct" color="appcolor"></ion-icon>\n\n      </button>\n\n       <button  ion-item (click)="abrirFavoritos()">\n\n        Favoritos ({{favoritos.length}}) <ion-icon name="star" color="appcolor"></ion-icon>\n\n      </button>\n\n      <button  ion-item (click)="abrirReclamacao()">\n\n        Reclamações <ion-icon name="alert" color="appcolor"></ion-icon>\n\n      </button>\n\n      <button  ion-item (click)="openPage(signupPage)">\n\n        Sobre <ion-icon name="alert" color="appcolor"></ion-icon>\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n\n\n<ion-content>\n\n <ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="menu == \'detalhes\'">\n\n    <ion-refresher-content\n\n       pullingIcon="arrow-dropdown"\n\n       pullingText="Atualizar"\n\n       refreshingSpinner="circles"\n\n       refreshingText="Atualizando...">\n\n    </ion-refresher-content>\n\n </ion-refresher> \n\n <div #map id="map" [hidden]="menu == \'detalhes\'">\n\n     \n\n </div>\n\n\n\n<div *ngIf="menu == \'detalhes\'">\n\n   <ion-list>\n\n    <div *ngFor="let item of _veiculos">\n\n     <ion-list-header color="appcolor">\n\n     {{item.CodigoLinha}} - {{item.Denomicao}} \n\n      <button ion-button icon-center [disabled]="item.favorito" (click)="adicionarFavoritos(item.CodigoLinha, item); item.favorito = true" color="dark" clear >\n\n   <ion-icon name="star" [class.selecionado]="item.favorito"></ion-icon>\n\n</button>\n\n    </ion-list-header>\n\n        <ion-item *ngFor="let item2 of item.Veiculos" (click)="mostrarDetalhesOnibus(item2,item)">\n\n          <ion-icon name=\'bus\' item-left [style.color]="{Leste:\'rgb(236,27,36)\',Norte:\'rgb(34,177,75)\',Sul:\'#FFD500\',Sudeste:\'rgb(0,128,254)\',Terminal:\'rgb(0,128,254)\'}[item.Zona]"></ion-icon>\n\n             Codigo do veiculo : {{item2.CodigoVeiculo}}\n\n           <p>\n\n              Visto por ultimo {{item2.texto}}  <ion-icon style="font-size: 15px" name="clock"></ion-icon>\n\n            </p>\n\n            <ion-note item-right *ngIf="item2.Cadeirante"><img width="25px" src="/assets/icon/adpt.png"></ion-note>\n\n            <ion-note item-right *ngIf="!item2.Cadeirante && item.Zona != \'Outros\'"><img width="25px" src="/assets/icon/noadpt.png"></ion-note>\n\n            <ion-note item-right *ngIf="!item2.Cadeirante && item.Zona == \'Outros\'"><img width="25px" src="https://image.freepik.com/icones-gratis/ponto-de-interrogacao-dentro-de-um-contorno-de-caixa_318-51427.jpg"></ion-note>\n\n            \n\n        </ion-item>\n\n    </div>\n\n    </ion-list>\n\n</div>\n\n <ion-fab right top (click)="atualizar()" *ngIf="menu == \'mapa\'">\n\n      <button ion-fab secondary class="fab-map" color="appcolor">\n\n        <ion-icon name=\'refresh\'></ion-icon>\n\n      </button>\n\n  </ion-fab>\n\n  <ion-fab right bottom *ngIf="menu == \'mapa\'">\n\n    <button ion-fab><ion-icon name="arrow-dropleft"></ion-icon></button>\n\n    <ion-fab-list side="left">\n\n      <button  [hidden]="icon != \'search\'" (click)="sumirOnibus(\'Sudeste\')" ion-fab><ion-icon style="color : blue "[name]="icon_zonas[0]"></ion-icon></button>\n\n      <button  [hidden]="icon != \'search\'" (click)="sumirOnibus(\'Leste\')" ion-fab><ion-icon style="color : red "[name]="icon_zonas[1]"></ion-icon></button>\n\n      <button  [hidden]="icon != \'search\'" (click)="sumirOnibus(\'Norte\')" ion-fab><ion-icon style="color : green "[name]="icon_zonas[2]"></ion-icon></button>\n\n      <button  [hidden]="icon != \'search\'" (click)="sumirOnibus(\'Sul\')" ion-fab><ion-icon style="color : yellow "[name]="icon_zonas[3]" ></ion-icon></button>\n\n      <button  [hidden]="icon_zonas[0] == \'undo\' || icon_zonas[1] == \'undo\' || icon_zonas[2] == \'undo\' || icon_zonas[3] == \'undo\'"(click)="mostrar_onibus_especifico()" ion-fab><ion-icon [name]="icon"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\temporeal\temporeal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__temporeal_service__["a" /* TempoRealService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], TempoReal);
    return TempoReal;
}());

//# sourceMappingURL=temporeal.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoRealService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TempoRealService = (function () {
    function TempoRealService(_http) {
        this._http = _http;
    }
    TempoRealService.prototype.todos_veiculos_tempo_real = function () {
        return this._http.get("https://thebusapi.herokuapp.com/linhas/")
            .map(function (res) { return res; });
    };
    TempoRealService.prototype.veiculo_especifico_tempo_real = function (valor) {
        return this._http.get("http://thebusapi.herokuapp.com/linhas/" + valor + "/")
            .take(10)
            .map(function (res) { return res; });
    };
    TempoRealService.prototype.distancia_onibus_usuario = function (latitude, longitude) {
        return this._http.get("https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + latitude + "," + longitude + "&destinations=-5.0823736,-42.799119&mode=bicycling&language=pt-BR&key=AIzaSyChAXtrYJ9zWrk5hdERf9yeIGLLScpoqec").
            map(function (res) { return res; });
    };
    TempoRealService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TempoRealService);
    return TempoRealService;
}());

//# sourceMappingURL=temporeal.service.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfiguracoesComponent = (function () {
    function ConfiguracoesComponent(navCtrl, storage) {
        var _this = this;
        this.storage = storage;
        this.opc_selecionado = true;
        this.opc = [true, false, false, false];
        this.opc_mapa = 'ROADMAP';
        storage.ready().then(function () {
            storage.get('tipo_mapa').then(function (val) {
                _this.opc_mapa = val;
            });
            storage.get('zoom').then(function (val) {
                console.log(val);
                _this.zoom = val;
            });
        });
    }
    ConfiguracoesComponent.prototype.ngOnInit = function () {
    };
    ConfiguracoesComponent.prototype.notify = function () {
        this.storage.set('tipo_mapa', this.opc_mapa);
        console.log(this.opc_mapa);
    };
    ConfiguracoesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\configuracoes\configuracoes.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n    <ion-title>\n\n      <ion-icon name="settings" item-left ></ion-icon>\n\n      Configurações\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<ion-list>\n\n	<ion-list-header color="appcolor">\n\n		<ion-icon name=\'construct\' item-left></ion-icon>	\n\n			Geral\n\n	</ion-list-header>\n\n\n\n 	 <ion-item>\n\n 		<ion-icon name=\'locate\' item-left></ion-icon>\n\n	    <ion-label>Localização</ion-label>\n\n	    <ion-toggle checked="true" [(ngModel)]="pepperoni"></ion-toggle>\n\n  	</ion-item>\n\n </ion-list>\n\n\n\n<ion-list radio-group [(ngModel)]="opc_mapa">\n\n	<ion-list-header color="appcolor">\n\n	 <ion-icon name=\'brush\' item-left></ion-icon>\n\n		Tipo do Mapa\n\n	</ion-list-header>\n\n	<ion-item>\n\n		 <ion-label>Roadmap</ion-label>\n\n		<ion-radio value="ROADMAP" (click)="notify()"></ion-radio>\n\n  	</ion-item>\n\n  	 <ion-note padding>\n\n  			Exibe o mapa de vias padrão. Esse é o tipo de mapa padrão.\n\n  	</ion-note>\n\n  	<ion-item>\n\n		 <ion-label>Hybrid</ion-label>\n\n		 <ion-radio value="HYBRID" (click)="notify()"></ion-radio>\n\n		 \n\n  	</ion-item>\n\n  	<ion-note padding>\n\n  			Exibe uma combinação de visualizações normais e de satélite\n\n  	</ion-note>\n\n	 <ion-item>\n\n		 <ion-label>Satellite</ion-label>\n\n		 <ion-radio value="SATELLITE" (click)="notify()"></ion-radio>\n\n  	</ion-item>\n\n  	<ion-note padding>\n\n				Exibe imagens de satélite do Google Earth\n\n	</ion-note>\n\n  	<ion-item>\n\n		 <ion-label>Terrain</ion-label>\n\n		 <ion-radio value="TERRAIN" (click)="notify()"></ion-radio>\n\n  	</ion-item>\n\n  	 <ion-note padding>\n\n  			Exibe um mapa físico baseado em informações do terreno. \n\n  	</ion-note>\n\n\n\n</ion-list>\n\n\n\n<ion-list>\n\n\n\n	<ion-list-header color="appcolor">\n\n	 <ion-icon name=\'map\' item-left></ion-icon>\n\n		Zoom\n\n	</ion-list-header>\n\n   <ion-item>\n\n	   <ion-range min="8" max="25" step="1" [(ngModel)]="zoom">\n\n	     <ion-icon small range-left name="search"></ion-icon>\n\n	     <ion-icon range-right name="search"></ion-icon>\n\n	   </ion-range>\n\n	</ion-item>\n\n\n\n  	 \n\n</ion-list>\n\n<ion-note padding></ion-note>\n\n<button color="appcolor" ion-button full icon-left>\n\n        <ion-icon name="eye"></ion-icon>\n\n          Previsualizar\n\n</button>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\configuracoes\configuracoes.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConfiguracoesComponent);
    return ConfiguracoesComponent;
}());

//# sourceMappingURL=configuracoes.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesOnibusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhes_onibus_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rota_rota_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetalhesOnibusComponent = (function () {
    function DetalhesOnibusComponent(navCtrl, navParams, dos, storage, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dos = dos;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.dados = navParams.get('onibus');
        this.calcula_visto_por_ultimo(this.dados);
    }
    DetalhesOnibusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadMap();
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            _this.dos.cal_distantancia_user_veic(_this.latitude, _this.longitude, _this.dados.Lat, _this.dados.Long).subscribe(function (res) { return _this.distancia = res; });
        });
        this.dos.trans_lat_lon_end(this.dados.Lat, this.dados.Long).subscribe(function (res) { return _this.endereco_atual_onibus = res; });
        console.log("Tou no OnInit");
    };
    DetalhesOnibusComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("entrou aqui");
        var tipo_do_mapa;
        this.storage.ready().then(function () {
            _this.storage.get('tipo_mapa').then(function (val) {
                switch (val) {
                    case 'ROADMAP':
                        tipo_do_mapa = google.maps.MapTypeId.ROADMAP;
                        break;
                    case 'HYBRID':
                        tipo_do_mapa = google.maps.MapTypeId.HYBRID;
                        break;
                    case 'SATELLITE':
                        tipo_do_mapa = google.maps.MapTypeId.SATELLITE;
                        break;
                    case 'TERRAIN':
                        tipo_do_mapa = google.maps.MapTypeId.TERRAIN;
                        break;
                }
                console.log(tipo_do_mapa);
                _this.map.setMapTypeId(tipo_do_mapa);
                google.maps.event.trigger(_this.mapElement.nativeElement, 'resize');
            });
        });
    };
    DetalhesOnibusComponent.prototype.detalhes_rota = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__rota_rota_component__["a" /* RotaComponent */], { dados: this.dados });
    };
    DetalhesOnibusComponent.prototype.mostraFotoVeiculo = function () {
        var _this = this;
        this.dos.mostrar_foto_onibus(this.dados.CodigoVeiculo).subscribe(function (res) {
            var link_img = res[0][1];
            var link_img_modificado = link_img.replace('/t/', '/p/');
            var alert = _this.alertCtrl.create({
                title: 'Foto',
                subTitle: "<img style='text-aling:center'src='" + link_img_modificado + "'>" + "<p style='text-align: center;'>© Todos os direitos reservados ao fotógrafo(nome no canto inferior direito da imagem) & o site <a href=http://onibusbrasil.com/''>Onibus Brasil.</a></p>" +
                    "<p style=font-size: 32>*Se você representa alguma das partes e não autoriza o uso da imagem, por favor entre em contato.<p>",
                cssClass: 'appcolor',
                buttons: ['OK']
            });
            alert.present();
        });
    };
    DetalhesOnibusComponent.prototype.calcula_visto_por_ultimo = function (veiculo) {
        var d = new Date();
        var texto;
        var teste = veiculo.Hora.substr(0, 2);
        var teste2 = veiculo.Hora.substr(3, 2);
        var teste3 = veiculo.Hora.substr(6, 2);
        d.setHours(d.getHours() - teste);
        d.setMinutes(d.getMinutes() - teste2);
        d.setSeconds(d.getSeconds() - teste3);
        if (d.getHours() > 0) {
            texto = "Há " + d.getHours() + " Horas e " + d.getMinutes() + " minuto(s) atrás";
            this.dados.Hora = texto;
        }
        else {
            if (d.getMinutes() > 0) {
                texto = "Há " + d.getMinutes() + " minuto(s) atrás";
                this.dados.Hora = texto;
            }
            else {
                texto = "Há 30 segundos atrás";
                this.dados.Hora = texto;
            }
        }
    };
    DetalhesOnibusComponent.prototype.loadMap = function () {
        var img;
        var latLng = new google.maps.LatLng(this.dados.Lat, this.dados.Long);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var myLatlng = new google.maps.LatLng(this.dados.Lat, this.dados.Long);
        if (this.dados.Zona == "Norte") {
            img = '/assets/icon/norte.png';
        }
        else if (this.dados.Zona == "Leste") {
            img = '/assets/icon/leste.png';
        }
        else if (this.dados.Zona == "Sudeste") {
            img = '/assets/icon/sudeste.png';
        }
        else if (this.dados.Zona == "Sul") {
            img = '/assets/icon/sul.png';
        }
        else {
            img = '/assets/icon/outros.png';
        }
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!",
            icon: img
        });
        // To add the marker to the map, call setMap();
        marker.setMap(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetalhesOnibusComponent.prototype, "mapElement", void 0);
    DetalhesOnibusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'detalhes_onibus',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\detalhes_onibus\detalhes_onibus.component.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n    <ion-title>\n\n      Veiculo : {{dados.CodigoVeiculo}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <div #map id="map" style="width: 100%; height: 300px;"></div>\n\n  <ion-fab right top>\n\n    <button ion-fab>\n\n      <ion-icon name="pin"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-item>\n\n    <ion-icon name="locate" item-left large></ion-icon>\n\n    <h2>Localização</h2>\n\n    <p>{{endereco_atual_onibus?.Endereco}}</p>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-icon name="clock" item-left large ></ion-icon>\n\n    <h2>Ultima vez que foi visto</h2>\n\n    <p>{{dados.Hora}}.</p>\n\n  </ion-item>\n\n   <ion-item>\n\n  <ion-icon name="image" item-left large></ion-icon>\n\n      <button ion-button color="appcolor" (click)="mostraFotoVeiculo()">Ver foto do veículo</button>\n\n  </ion-item>\n\n\n\n   <ion-item *ngIf="dados.Cadeirante">\n\n    <ion-icon item-left large ><img style="width: 25px ! important" src="/assets/icon/adpt.png"></ion-icon>\n\n    <h2>Este veículo é adaptado.</h2>\n\n  </ion-item>\n\n  <ion-item *ngIf="!dados.Cadeirante">\n\n    <ion-icon item-left large ><img style="width: 25px ! important" src="/assets/icon/noadpt.png"></ion-icon>\n\n    <h2>Este veículo não é adptado.</h2>\n\n  </ion-item>\n\n \n\n  <ion-item>\n\n    <span item-left>{{distancia?.rows[0].elements[0].duration.text}}</span>\n\n    <span item-left>({{distancia?.rows[0].elements[0].distance.text}})</span>\n\n    <button ion-button icon-left clear item-right (click)="detalhes_rota()">\n\n      <ion-icon name="navigate"></ion-icon>\n\n      Rota\n\n    </button>\n\n  </ion-item>\n\n\n\n</ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\detalhes_onibus\detalhes_onibus.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__detalhes_onibus_service__["a" /* DetalhesOnibusService */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DetalhesOnibusComponent);
    return DetalhesOnibusComponent;
}());

//# sourceMappingURL=detalhes_onibus.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesOnibusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhesOnibusService = (function () {
    function DetalhesOnibusService(_http) {
        this._http = _http;
    }
    DetalhesOnibusService.prototype.trans_lat_lon_end = function (latitude, longitude) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.set('Latitude', latitude);
        headers.set('Longitude', longitude);
        return this._http.get("http://thebusapi.herokuapp.com/trans_lat_long_in_end/", { headers: headers })
            .map(function (res) { return res; });
    };
    DetalhesOnibusService.prototype.cal_distantancia_user_veic = function (latitude_user, longitude_user, latitude_bus, longitude_bus) {
        return this._http.get("https://maps.googleapis.com/maps/api/distancematrix/json?mode=bicycling&origins=" + latitude_bus + "," + longitude_bus + "&destinations=" + latitude_user + "," + longitude_user + "&key=AIzaSyBzoi-NFSqX9lo1mCotxpe6tktxlb5j14A")
            .map(function (res) { return res; });
    };
    DetalhesOnibusService.prototype.mostrar_foto_onibus = function (numvec) {
        return this._http.get("http://onibusbrasil.com/ajax/busca.php?o1=&o2=" + numvec + "&o3=&o4=&o5=&o6=41820&o7=&o8=&o9=&o10=d&o11=1&o12=15&o13=1&o14=0&o15=")
            .map(function (res) { return res; });
    };
    DetalhesOnibusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DetalhesOnibusService);
    return DetalhesOnibusService;
}());

//# sourceMappingURL=detalhes_onibus.service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rota_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RotaComponent = (function () {
    function RotaComponent(navCtlr, navParams, rs, loadingCtrl, storage, geolocation) {
        this.navCtlr = navCtlr;
        this.navParams = navParams;
        this.rs = rs;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.geolocation = geolocation;
        this.markers = [];
        this.mapOptions = {
            center: '',
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.dados = this.navParams.get('dados');
        console.log(this.dados);
    }
    RotaComponent.prototype.ngOnInit = function () {
        this.loadMap();
    };
    RotaComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        var tipo_do_mapa;
        this.storage.ready().then(function () {
            _this.storage.get('tipo_mapa').then(function (val) {
                switch (val) {
                    case 'ROADMAP':
                        tipo_do_mapa = google.maps.MapTypeId.ROADMAP;
                        break;
                    case 'HYBRID':
                        tipo_do_mapa = google.maps.MapTypeId.HYBRID;
                        break;
                    case 'SATELLITE':
                        tipo_do_mapa = google.maps.MapTypeId.SATELLITE;
                        break;
                    case 'TERRAIN':
                        tipo_do_mapa = google.maps.MapTypeId.TERRAIN;
                        break;
                }
                console.log(tipo_do_mapa);
                _this.map.setMapTypeId(tipo_do_mapa);
            });
        });
    };
    RotaComponent.prototype.loadMap = function () {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var way;
            var img;
            var _m;
            _this.mapOptions.center = latLng;
            var loading = _this.loadingCtrl.create({
                content: 'Carregando...'
            });
            loading.present();
            _this.rs.parada_mais_proxima_user(position.coords.latitude, position.coords.longitude, "0" + _this.dados.Linha).subscribe(function (res) {
                var request = {
                    origin: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                    destination: new google.maps.LatLng(_this.dados.Lat, _this.dados.Long),
                    waypoints: [{ location: new google.maps.LatLng(res.Lat, res.Long) }],
                    travelMode: google.maps.TravelMode.DRIVING
                };
                var marker = new google.maps.Marker({
                    position: latLng,
                    title: "Hello World!",
                    icon: '/assets/icon/male.png'
                });
                if (_this.dados.Zona == "Norte") {
                    img = '/assets/icon/norte.png';
                }
                else if (_this.dados.Zona == "Leste") {
                    img = '/assets/icon/leste.png';
                }
                else if (_this.dados.Zona == "Sudeste") {
                    img = '/assets/icon/sudeste.png';
                }
                else if (_this.dados.Zona == "Sul") {
                    img = '/assets/icon/sul.png';
                }
                else {
                    img = '/assets/icon/outros.png';
                }
                var market_onibus = new google.maps.Marker({
                    position: new google.maps.LatLng(_this.dados.Lat, _this.dados.Long),
                    icon: img
                });
                var marker_parada = new google.maps.Marker({
                    position: new google.maps.LatLng(res.Lat, res.Long),
                    icon: '/assets/icon/busstop.png'
                });
                directionsService.route(request, function (result, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
                    }
                });
                directionsDisplay.setOptions({ suppressMarkers: true });
                directionsDisplay.setMap(_this.map);
                marker.setMap(_this.map);
                market_onibus.setMap(_this.map);
                marker_parada.setMap(_this.map);
            }, function (err) { return console.log(err); }, function () { return loading.dismiss(); });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], RotaComponent.prototype, "mapElement", void 0);
    RotaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'rota',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\rota\rota.component.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n    <ion-title>\n\n      Veiculo : {{dados.CodigoVeiculo}}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n <div #map id="map"></div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\rota\rota.component.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__rota_service__["a" /* RotaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__rota_service__["a" /* RotaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _g || Object])
    ], RotaComponent);
    return RotaComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=rota.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RotaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RotaService = (function () {
    function RotaService(_http) {
        this._http = _http;
    }
    RotaService.prototype.parada_mais_proxima_user = function (latitude, longitude, linha) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Latitude', latitude);
        headers.append('Longitude', longitude);
        headers.append('Linha', linha);
        return this._http.get("https://thebusapi.herokuapp.com/linhas/parada_proxima/", { headers: headers })
            .map(function (res) { return res; });
    };
    RotaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RotaService);
    return RotaService;
}());

//# sourceMappingURL=rota.service.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritosComponent = (function () {
    function FavoritosComponent(navCtrl, navParams, storage, tc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.tc = tc;
        this.favoritos = navParams.get('favoritos');
    }
    FavoritosComponent.prototype.ngOnInit = function () {
        var toast = this.tc.create({
            message: 'Arraste um item para excluir',
            duration: 3000
        });
        toast.present();
    };
    FavoritosComponent.prototype.deletarFavorito = function (CodigoLinha, fav) {
        var _this = this;
        var temp;
        var index = this.favoritos.indexOf(fav);
        this.favoritos.splice(index, 1);
        this.storage.ready().then(function () {
            _this.storage.get('favoritos').then(function (val) {
                temp = val;
                temp.splice(_this.procuraFavorito(val, CodigoLinha), 1);
                _this.storage.set('favoritos', temp);
            });
        });
    };
    FavoritosComponent.prototype.procuraFavorito = function (favoritos, codigoLinha) {
        for (var i = 0; i < favoritos.length; i++) {
            if (favoritos[i].linha.indexOf(codigoLinha) > -1)
                return i;
        }
    };
    FavoritosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'favoritos',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\favoritos\favoritos.component.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n    <ion-title style="text-align: center">\n\n      Favoritos ({{favoritos.length}})\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<ion-list>\n\n	<ion-item-sliding *ngFor="let fav of favoritos">\n\n			  <ion-item>\n\n			    <ion-icon name=\'bus\' item-left [style.color]="{Leste:\'rgb(236,27,36)\',Norte:\'rgb(34,177,75)\',Sul:\'#FFD500\',Sudeste:\'rgb(0,128,254)\',Terminal:\'rgb(0,128,254)\'}[fav.Zona]"></ion-icon>\n\n			  	{{fav.CodigoLinha}} - {{fav.Denomicao}}\n\n			  	<p>\n\n			  		{{fav.Veiculos.length}} Veículo(s) na linha.\n\n			  	</p>\n\n			  </ion-item>\n\n		    <ion-item-options>\n\n                <button ion-button icon-only (click)="deletarFavorito(fav.CodigoLinha,fav)" danger>\n\n                    <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n            </ion-item-options>\n\n	</ion-item-sliding>\n\n	<div *ngIf="favoritos.length == 0">\n\n		<h1 style="text-align: center">Você não possui nenhuma linha como favorita.</h1>\n\n	</div>\n\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\favoritos\favoritos.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], FavoritosComponent);
    return FavoritosComponent;
}());

//# sourceMappingURL=favoritos.component.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paradas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paradas_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhes_paradas_detalhes_paradas_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Paradas = (function () {
    function Paradas(navCtrl, ps, ac, loadingCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.ps = ps;
        this.ac = ac;
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
    }
    Paradas.prototype.alerta_parada = function () {
        var _this = this;
        var prompt = this.ac.create({
            title: 'Procurar linha',
            message: "Digite o prefixo da linha, para mostrar somente ela no mapa.",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Prefixo da linha, ex : 508,517'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Procurar',
                    handler: function (data) {
                        _this.parada_especifica(data.title);
                    }
                }
            ]
        });
        prompt.present();
    };
    Paradas.prototype.parada_especifica = function (num) {
        var _this = this;
        var num_linha = "0" + num;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        this.ps.pegar_linha_especifica(num_linha).subscribe(function (res) {
            loading.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhes_paradas_detalhes_paradas_component__["a" /* DetalhesParadas */], { dados: res });
        }, function (err) {
            var alert = _this.ac.create({
                title: "Não encontrado",
                subTitle: "Não foi encontrado a linha : " + num + "<br>" +
                    "- Verifique a ortografia <br>" +
                    "- Não coloque caracteres especiais <br>" +
                    "- Se você estiver certo de que essa linha existe, por favor entre em contato.",
                buttons: ['OK']
            });
            alert.present();
        }, function () { loading.dismiss(); });
    };
    Paradas.prototype.raio_paradas_mais_proximas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhes_paradas_detalhes_paradas_component__["a" /* DetalhesParadas */]);
    };
    Paradas.prototype.parada_mais_proxima = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.ps.parada_mais_proxima(position.coords.latitude, position.coords.longitude).subscribe(function (res) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detalhes_paradas_detalhes_paradas_component__["a" /* DetalhesParadas */], { dados: res });
            }, function (err) { return console.log(err); }, function () { return loading.dismiss(); });
        });
    };
    Paradas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\paradas\paradas.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n    <ion-title style="text-align: center">\n\n      Paradas\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n      <img style="margin: auto; display: block;" src="http://lh4.ggpht.com/_oQ-XxhlT3-8/SmUcWpygazI/AAAAAAAAA6k/Zg5ZVj66OHE/Parada%20de%20%C3%B4nibus_thumb%5B3%5D.png">\n\n        <p>Para localizar as paradas de onibus de Teresina é bem simples. Selecione abaixo uma opção, caso queira encontrar a parada mais proxima da sua atual localização, ou veja todas as paradas de uma determinada linha.</p>\n\n       <button (click)="parada_mais_proxima()" ion-button full icon-left>\n\n        <ion-icon name="locate"></ion-icon>\n\n          Parada mais proxima\n\n       </button>\n\n        <button (click)="raio_paradas_mais_proximas()" color="danger" ion-button full icon-left>\n\n        <ion-icon name="radio-button-off"></ion-icon>\n\n          Raio com as paradas mais proximas\n\n       </button>\n\n        <button (click)="alerta_parada()" ion-button full color="secondary" icon-left>\n\n        <ion-icon name="bus"></ion-icon>\n\n          Todas as paradas de uma linha\n\n       </button>\n\n </ion-content>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\paradas\paradas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__paradas_service__["a" /* ParadasService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], Paradas);
    return Paradas;
}());

//# sourceMappingURL=paradas.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParadasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParadasService = (function () {
    function ParadasService(_http) {
        this._http = _http;
    }
    ParadasService.prototype.pegar_linha_especifica = function (num) {
        return this._http.get("https://thebusapi.herokuapp.com/parada_especifica/" + num)
            .map(function (res) { return res; });
    };
    ParadasService.prototype.parada_mais_proxima = function (latitude, longitude) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Latitude', latitude);
        headers.append('HTTP_LONGITUDE', longitude);
        console.log(headers);
        return this._http.get("https://thebusapi.herokuapp.com/parada_proxima/", { headers: headers })
            .map(function (res) { return res; });
    };
    ParadasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ParadasService);
    return ParadasService;
    var _a;
}());

//# sourceMappingURL=paradas.service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesParadas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalhes_paradas_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetalhesParadas = (function () {
    function DetalhesParadas(navCtrl, navParams, tc, ds, storage, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tc = tc;
        this.ds = ds;
        this.storage = storage;
        this.geolocation = geolocation;
        this._marker = [];
        this.brightness = 30;
        this.modificou = false;
        this.directionsService = new google.maps.DirectionsService;
        this.menu = 'detalhes';
        this.mapOptions = {
            center: new google.maps.LatLng(-5.0782647, -42.7940927),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.dados = navParams.get('dados');
    }
    DetalhesParadas.prototype.ngOnInit = function () {
        this.loadMap();
        console.log(this.dados);
    };
    DetalhesParadas.prototype.ionViewWillEnter = function () {
        var _this = this;
        var tipo_do_mapa;
        this.storage.ready().then(function () {
            _this.storage.get('tipo_mapa').then(function (val) {
                switch (val) {
                    case 'ROADMAP':
                        tipo_do_mapa = google.maps.MapTypeId.ROADMAP;
                        break;
                    case 'HYBRID':
                        tipo_do_mapa = google.maps.MapTypeId.HYBRID;
                        break;
                    case 'SATELLITE':
                        tipo_do_mapa = google.maps.MapTypeId.SATELLITE;
                        break;
                    case 'TERRAIN':
                        tipo_do_mapa = google.maps.MapTypeId.TERRAIN;
                        break;
                }
                console.log(tipo_do_mapa);
                _this.map.setMapTypeId(tipo_do_mapa);
            });
        });
    };
    DetalhesParadas.prototype.pegar_localizao_user = function (latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    };
    DetalhesParadas.prototype.loadMap = function () {
        var _this = this;
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        this.geolocation.getCurrentPosition().then(function (position) {
            _this.latitude = position.coords.latitude;
            _this.longitude = position.coords.longitude;
            if (_this.dados) {
                if (_this.dados.Paradas)
                    _this.marcar_pontos_mapa_paradas('23123');
                else
                    _this.marcar_parada_mais_proxima();
            }
            else
                _this.raio_paradas_mais_proximas(position.coords.latitude, position.coords.longitude);
        });
    };
    DetalhesParadas.prototype.raio_paradas_mais_proximas = function (latitude, longitude) {
        this.menu = 'mapa';
        var marker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            icon: '/assets/icon/male.png',
            map: this.map
        });
        console.log(latitude, longitude);
        this.circle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: this.map,
            center: marker.position,
            radius: this.brightness * 5
        });
        this.map.setCenter(marker.position);
    };
    DetalhesParadas.prototype.marcar_parada_mais_proxima = function () {
        var marker = new google.maps.Marker({
            position: { lat: parseFloat(this.dados.Lat), lng: parseFloat(this.dados.Long) },
            icon: '/assets/icon/busstop.png',
            map: this.map,
        });
    };
    DetalhesParadas.prototype.aumentar_circulo = function (event) {
        this.modificou = true;
        this.circle.setRadius(this.brightness * 5);
        console.log(this.paradas_radio);
    };
    DetalhesParadas.prototype.mostrarParadasRaio = function () {
        var _this = this;
        if (!this.paradas) {
            this.ds.calcular_raio_paradas().
                subscribe(function (res) { return _this.marcar_pontos_raio_paradas(res); });
        }
        else {
            this.marcar_pontos_raio_paradas(this.paradas);
        }
    };
    DetalhesParadas.prototype.marcar_pontos_raio_paradas = function (paradas) {
        this.paradas = paradas;
        this.paradas_radio = [];
        var markers = [];
        var marker = new google.maps.LatLng(parseFloat(this.latitude), parseFloat(this.longitude)); //origem
        var marker_parada;
        var distance;
        for (var i = 0; i < paradas.length; i++) {
            marker_parada = new google.maps.LatLng(paradas[i].Lat, paradas[i].Long);
            distance = google.maps.geometry.spherical.computeDistanceBetween(marker, marker_parada);
            if (distance <= this.brightness * 5) {
                this.paradas_radio.push(paradas[i]);
                var _markerpoint = new google.maps.Marker({
                    position: { lat: parseFloat(paradas[i].Lat), lng: parseFloat(paradas[i].Long) },
                    icon: '/assets/icon/busstop.png',
                    map: this.map
                });
                markers.push(_markerpoint);
            }
            else {
                console.log("Esta fora");
            }
        }
    };
    DetalhesParadas.prototype.marcar_pontos_mapa_paradas = function (paradas) {
        // let waypts = [];
        var _this = this;
        var _loop_1 = function (i) {
            console.log(i + ": " + this_1.dados.Paradas[i].CodigoParada + " | " + this_1.dados.Paradas[i].Denomicao);
            var _markerpoint = new google.maps.Marker({
                position: { lat: parseFloat(this_1.dados.Paradas[i].Lat), lng: parseFloat(this_1.dados.Paradas[i].Long) },
                map: this_1.map,
                icon: '/assets/icon/busstop.png',
            });
            this_1._marker.push(_markerpoint);
            var content2 = "Denominação : " + this_1.dados.Paradas[i].Denomicao.toString() + "\n" + "Endereço : " + this_1.dados.Paradas[i].Endereco.toString();
            infowindow = new google.maps.InfoWindow({
                content: content2
            });
            google.maps.event.addListener(_markerpoint, 'click', function (marker, content, infowindow) { return _this.criar_toast(content2); });
            /*waypts.push({
                location : new google.maps.LatLng(parseFloat(this.dados.Paradas[i].Lat),parseFloat(this.dados.Paradas[i].Long))
    
            });*/
        };
        var this_1 = this, infowindow;
        for (var i = 0; i < this.dados.Paradas.length; i++) {
            _loop_1(i);
        }
        /*let request = {
            origin : new google.maps.LatLng(parseFloat(this.dados.Paradas[0].Lat),parseFloat(this.dados.Paradas[0].Long)),
            destination: new google.maps.LatLng(parseFloat(this.dados.Paradas[50].Lat),parseFloat(this.dados.Paradas[50].Long)),
            // waypoints : waypts,
            travelMode: google.maps.TravelMode.DRIVING
        }
    
        this.directionsService.route(request,(result, status) =>{
              if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo
                    this.directionsDisplay = new google.maps.DirectionsRenderer;
                    this.directionsDisplay.setMap(this.map);
                    this.directionsDisplay.setDirections(result);
              }
         });*/
    };
    DetalhesParadas.prototype.criar_toast = function (mensagem) {
        var toast = this.tc.create({
            message: mensagem,
            duration: 3000,
            showCloseButton: true,
            closeButtonText: "OK",
            position: 'top'
        });
        toast.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DetalhesParadas.prototype, "mapElement", void 0);
    DetalhesParadas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'paradas',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\detalhes_paradas\detalhes_paradas.html"*/'<ion-header>\n\n  <ion-navbar color="appcolor">\n\n    <ion-title *ngIf="dados?.Linha" style="text-align: center">\n\n      {{dados.Linha?.Denomicao}}\n\n    </ion-title>\n\n    <ion-title *ngIf="dados?.Denomicao" style="text-align: center">\n\n      {{dados.Denomicao}}\n\n    </ion-title>\n\n    <ion-title *ngIf="!dados" style="text-align: center">\n\n      Defina o Tamanho do Raio\n\n    </ion-title>\n\n  </ion-navbar> \n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="menu">\n\n      <ion-segment-button value="detalhes">\n\n        Detalhes\n\n      </ion-segment-button>\n\n      <ion-segment-button value="mapa">\n\n        Mapa\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n <ion-fab [hidden]="menu == \'detalhes\'" right top *ngIf="dados?.Linha">\n\n      <button ion-fab secondary class="fab-map" color="appcolor">\n\n        <ion-icon name=\'bus\'></ion-icon>\n\n        <h4>{{dados.Paradas?.length}}</h4>\n\n      </button>\n\n  </ion-fab>\n\n\n\n\n\n\n\n  \n\n<ion-fab right top *ngIf="modificou && menu==\'mapa\'" (click)="mostrarParadasRaio()">\n\n   <button right top ion-button color="danger" round>Mostrar Paradas</button>\n\n</ion-fab>\n\n\n\n\n\n<div *ngIf="menu == \'detalhes\'">\n\n    <ion-list no-border *ngIf="dados?.Denomicao">\n\n\n\n      <ion-item>\n\n        <ion-icon name=\'bus\' item-left></ion-icon>\n\n         {{dados.Denomicao}}\n\n         <p>This town ain\'t big enough for the two of us!</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngIf="dados?.Linha">\n\n\n\n      <ion-item *ngFor="let item of dados.Paradas">\n\n        <ion-icon name=\'bus\' item-left></ion-icon>\n\n         {{item.Denomicao}}\n\n         <p>{{item.Endereco}}</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngIf="paradas_radio">\n\n      <ion-item *ngFor="let item of paradas_radio">\n\n        <ion-icon name=\'bus\' item-left></ion-icon>\n\n         {{item.Denomicao}}\n\n         <p>{{item.Endereco}}</p>\n\n          <ion-note item-right>{{item.CodigoParada}}</ion-note>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <div *ngIf="menu == \'detalhes\' && this.circle && !paradas_radio">\n\n         <h1 style="text-align: center">Coloque um valor para o raio e aperte em "mostrar paradas".</h1>\n\n    </div>\n\n \n\n\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n <div #map id="map" [hidden]="menu == \'detalhes\'">\n\n     \n\n </div>\n\n\n\n\n\n\n\n\n\n  \n\n</ion-content>\n\n\n\n<ion-footer *ngIf="!dados && menu==\'mapa\'">\n\n  <ion-toolbar>\n\n  <ion-item>\n\n   <ion-range min="0" color="danger" max="1000" step="1" [(ngModel)]="brightness" (ionChange)="aumentar_circulo($event)">\n\n     <ion-icon small range-left name="radio-button-off"></ion-icon>\n\n     <ion-icon range-right name="radio-button-off"></ion-icon>\n\n   </ion-range>\n\n  </ion-item>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\detalhes_paradas\detalhes_paradas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__detalhes_paradas_service__["a" /* DetalhesParadasService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DetalhesParadas);
    return DetalhesParadas;
}());

//# sourceMappingURL=detalhes_paradas.component.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesParadasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhesParadasService = (function () {
    function DetalhesParadasService(_http) {
        this._http = _http;
    }
    DetalhesParadasService.prototype.calcular_raio_paradas = function () {
        return this._http.get("http://thebusapi.herokuapp.com/paradas/").
            map(function (res) { return res; });
    };
    DetalhesParadasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DetalhesParadasService);
    return DetalhesParadasService;
}());

//# sourceMappingURL=detalhes_paradas.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Linhas; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linhas_service__ = __webpack_require__(367);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Linhas = (function () {
    function Linhas(navCtrl, linhaService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.linhaService = linhaService;
        this.loadingCtrl = loadingCtrl;
        this.linha = [];
        this.linha_aux = [];
        this.mostrar_pesquisa = true;
    }
    Linhas.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando Linhas...'
        });
        this.linhaService.linhasZonaSul()
            .subscribe(function (res) {
            _this.sul = res;
            for (var i = 0; i < res.length; i++) {
                _this.linha_obj = {
                    numero: res[i].Numero,
                    denomicao: res[i].Denomicao,
                    zona: 'Sul'
                };
                _this.linha.push(_this.linha_obj);
                _this.linha_aux.push(_this.linha_obj);
            }
        });
        this.linhaService.linhasZonaSudeste()
            .subscribe(function (res) {
            _this.sudeste = res;
            for (var i = 0; i < res.length; i++) {
                _this.linha_obj = {
                    numero: res[i].Numero,
                    denomicao: res[i].Denomicao,
                    zona: 'Sudeste'
                };
                _this.linha.push(_this.linha_obj);
                _this.linha_aux.push(_this.linha_obj);
            }
        });
        this.linhaService.linhasZonaNorte()
            .subscribe(function (res) {
            _this.norte = res;
            for (var i = 0; i < res.length; i++) {
                _this.linha_obj = {
                    numero: res[i].Numero,
                    denomicao: res[i].Denomicao,
                    zona: 'Norte'
                };
                _this.linha.push(_this.linha_obj);
                _this.linha_aux.push(_this.linha_obj);
            }
        });
        this.linhaService.linhasZonaLeste()
            .subscribe(function (res) {
            _this.leste = res;
            for (var i = 0; i < res.length; i++) {
                _this.linha_obj = {
                    numero: res[i].Numero,
                    denomicao: res[i].Denomicao,
                    zona: 'Leste'
                };
                _this.linha.push(_this.linha_obj);
                _this.linha_aux.push(_this.linha_obj);
            }
        });
        this.linhaService.linhasZonaTerminal()
            .subscribe(function (res) {
            _this.terminal = res;
            for (var i = 0; i < res.length; i++) {
                _this.linha_obj = {
                    numero: res[i].Numero,
                    denomicao: res[i].Denomicao,
                    zona: 'Terminal'
                };
                _this.linha.push(_this.linha_obj);
                _this.linha_aux.push(_this.linha_obj);
            }
        });
        this.linhaService.linhasZonaOutros()
            .subscribe(function (res) {
            _this.outros = res;
            for (var i = 0; i < res.length; i++) {
                _this.linha_obj = {
                    numero: res[i].Numero,
                    denomicao: res[i].Denomicao,
                    zona: 'Outros'
                };
                _this.linha.push(_this.linha_obj);
                _this.linha_aux.push(_this.linha_obj);
            }
        }, function (err) { return console.log(err); }, function () { return loading.dismiss(); });
    };
    Linhas.prototype.onInput = function (event) {
        this.linha = this.linha_aux;
        this.linha = this.linha.filter(function (linha) {
            console.log(linha.numero.indexOf(event.target.value.toLowerCase()) > -1);
            return (linha.numero.indexOf(event.target.value.toLowerCase()) > -1);
        });
        console.log(this.linha);
    };
    Linhas = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\pages\linhas\linhas.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="appcolor">\n\n  <ion-title [hidden] = "!mostrar_pesquisa" style="text-align: center;">Linhas</ion-title>\n\n  <ion-buttons end>\n\n      <button [hidden] = "!mostrar_pesquisa" ion-button icon-only (click)="mostrar_pesquisa = false">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n   </ion-buttons>\n\n   <ion-searchbar [hidden] = mostrar_pesquisa\n\n    placeholder="Numero da  linha ex : 517"\n\n	  (ionInput)="onInput($event)"\n\n	  (ionCancel)="onCancel($event)">\n\n	</ion-searchbar>\n\n	<ion-buttons end>\n\n      <button [hidden] = "mostrar_pesquisa" ion-button icon-only (click)="mostrar_pesquisa = true">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n   </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<ion-list>\n\n<ion-list-header color="appcolor">\n\n	Zona Sul\n\n</ion-list-header>\n\n<div *ngFor="let item of linha; let i = index">\n\n	\n\n	 <ion-item *ngIf="item.zona == \'Sul\'">\n\n		    <ion-icon style="color : #FFD500" name="bus" item-left></ion-icon>\n\n		    	 {{item.numero}} -  {{item.denomicao}}\n\n	</ion-item>\n\n</div>\n\n<ion-list-header color="appcolor">\n\n	Zona Sudeste\n\n</ion-list-header>\n\n<div *ngFor="let item of linha">\n\n	 <ion-item *ngIf="item.zona == \'Sudeste\'">\n\n		    <ion-icon  style="color : rgb(0,128,254)" name="bus" item-left></ion-icon>\n\n		    	 {{item.numero}} -  {{item.denomicao}}\n\n	</ion-item>\n\n</div> \n\n<ion-list-header color="appcolor">\n\n	Zona Leste\n\n</ion-list-header>\n\n<div *ngFor="let item of linha">\n\n	 <ion-item *ngIf="item.zona == \'Leste\'">\n\n		     <ion-icon style="color : rgb(236,27,36)" name="bus" item-left></ion-icon>\n\n		    	 {{item.numero}} -  {{item.denomicao}}\n\n	</ion-item>\n\n</div> \n\n<ion-list-header color="appcolor">\n\n	Zona Norte\n\n</ion-list-header>\n\n<div *ngFor="let item of linha">\n\n	 <ion-item *ngIf="item.zona == \'Norte\'">\n\n		    <ion-icon style="color : rgb(34,177,75)" name="bus" item-left></ion-icon>\n\n		    	 {{item.numero}} -  {{item.denomicao}}\n\n	</ion-item>\n\n</div> \n\n<ion-list-header color="appcolor">\n\n	Terminal\n\n</ion-list-header>\n\n<div *ngFor="let item of linha">\n\n	 <ion-item *ngIf="item.zona == \'Terminal\'">\n\n		     <ion-icon style="color : rgb(0,128,254)" name="bus" item-left></ion-icon>\n\n		    	 {{item.numero}} -  {{item.denomicao}}\n\n	</ion-item>\n\n</div> \n\n</ion-list>\n\n\n\n<!--\n\n	<ion-list>\n\n	<ion-list-header>\n\n    	Sudeste\n\n  	</ion-list-header>\n\n	 <ion-item *ngFor="let item of linha">\n\n	    <ion-icon  style="color : rgb(0,128,254)" name="bus" item-left></ion-icon>\n\n	    	 {{item.numero}} -  {{item.denomicao}}\n\n	  </ion-item>\n\n	</ion-list>\n\n	<ion-list>\n\n	<ion-list-header>\n\n    	Sul\n\n  	</ion-list-header>\n\n	 <ion-item *ngFor="let item of sul">\n\n	    <ion-icon style="color : rgb(255,255,0)" name="bus" item-left></ion-icon>\n\n	    	 {{item.Numero}} -  {{item.Denomicao}}\n\n	  </ion-item>\n\n	</ion-list>\n\n	<ion-list>\n\n	<ion-list-header>\n\n    	Leste\n\n  	</ion-list-header>\n\n	 <ion-item *ngFor="let item of leste">\n\n	    <ion-icon style="color : rgb(236,27,36)" name="bus" item-left></ion-icon>\n\n	    	 {{item.Numero}} -  {{item.Denomicao}}\n\n	  </ion-item>\n\n	</ion-list>\n\n	<ion-list>\n\n	<ion-list-header>\n\n    	Norte\n\n  	</ion-list-header>\n\n	 <ion-item *ngFor="let item of norte">\n\n	    <ion-icon style="color : rgb(34,177,75)" name="bus" item-left></ion-icon>\n\n	    	 {{item.Numero}} -  {{item.Denomicao}}\n\n	  </ion-item>\n\n	</ion-list>\n\n	<ion-list>\n\n	<ion-list-header>\n\n    	Terminais - Sudeste\n\n  	</ion-list-header>\n\n	 <ion-item *ngFor="let item of terminal">\n\n	    <ion-icon style="color : rgb(0,128,254)" name="bus" item-left></ion-icon>\n\n	    	 {{item.Numero}} -  {{item.Denomicao}}\n\n	  </ion-item>\n\n	</ion-list>\n\n	<ion-list>\n\n	<ion-list-header>\n\n    	Outros\n\n  	</ion-list-header>\n\n	 <ion-item *ngFor="let item of outros">\n\n	    <ion-icon name="bus" item-left></ion-icon>\n\n	    	 {{item.Numero}} -  {{item.Denomicao}}\n\n	  </ion-item>\n\n	</ion-list> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\pages\linhas\linhas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__linhas_service__["a" /* LinhasService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], Linhas);
    return Linhas;
}());

//# sourceMappingURL=linhas.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinhasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LinhasService = (function () {
    function LinhasService(_http) {
        this._http = _http;
        this.url = "https://thebusapi.herokuapp.com/linha/zona/";
    }
    LinhasService.prototype.pegarTodasAsLinhas = function () {
        return this._http.get("https://thebusapi.herokuapp.com/todasaslinhasestaticas/").map(function (res) { return res; });
    };
    LinhasService.prototype.linhasZonaSul = function () {
        return this._http.get(this.url + "Sul").map(function (res) { return res; });
    };
    LinhasService.prototype.linhasZonaSudeste = function () {
        return this._http.get(this.url + "Sudeste").map(function (res) { return res; });
    };
    LinhasService.prototype.linhasZonaLeste = function () {
        return this._http.get(this.url + "Leste").map(function (res) { return res; });
    };
    LinhasService.prototype.linhasZonaNorte = function () {
        return this._http.get(this.url + "Norte").map(function (res) { return res; });
    };
    LinhasService.prototype.linhasZonaTerminal = function () {
        return this._http.get(this.url + "Terminal").map(function (res) { return res; });
    };
    LinhasService.prototype.linhasZonaOutros = function () {
        return this._http.get(this.url + "Outros").map(function (res) { return res; });
    };
    LinhasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], LinhasService);
    return LinhasService;
    var _a;
}());

//# sourceMappingURL=linhas.service.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(373);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_temporeal_temporeal__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_paradas_paradas__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_linhas_linhas__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_configuracoes_configuracoes_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_reclamacoes_reclamacoes_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detalhes_paradas_detalhes_paradas_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detalhes_onibus_detalhes_onibus_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rota_rota_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_favoritos_favoritos_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_criar_publicacao_criar_publicacao__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_photo_library__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_temporeal_temporeal_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_linhas_linhas_service__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_paradas_paradas_service__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_detalhes_paradas_detalhes_paradas_service__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_detalhes_onibus_detalhes_onibus_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_rota_rota_service__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_reclamacoes_reclamacoes_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_criar_publicacao_criar_publicacao_service__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components




















//Services








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_temporeal_temporeal__["a" /* TempoReal */],
                __WEBPACK_IMPORTED_MODULE_5__pages_paradas_paradas__["a" /* Paradas */],
                __WEBPACK_IMPORTED_MODULE_6__pages_linhas_linhas__["a" /* Linhas */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_configuracoes_configuracoes_component__["a" /* ConfiguracoesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reclamacoes_reclamacoes_component__["a" /* ReclamacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalhes_paradas_detalhes_paradas_component__["a" /* DetalhesParadas */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detalhes_onibus_detalhes_onibus_component__["a" /* DetalhesOnibusComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rota_rota_component__["a" /* RotaComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favoritos_favoritos_component__["a" /* FavoritosComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_criar_publicacao_criar_publicacao__["a" /* CriarPublicacaoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/criar-publicacao/criar-publicacao.module#CriarPublicacaoPageModule', name: 'CriarPublicacaoPage', segment: 'criar-publicacao', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_temporeal_temporeal__["a" /* TempoReal */],
                __WEBPACK_IMPORTED_MODULE_5__pages_paradas_paradas__["a" /* Paradas */],
                __WEBPACK_IMPORTED_MODULE_6__pages_linhas_linhas__["a" /* Linhas */],
                __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_configuracoes_configuracoes_component__["a" /* ConfiguracoesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_reclamacoes_reclamacoes_component__["a" /* ReclamacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalhes_paradas_detalhes_paradas_component__["a" /* DetalhesParadas */],
                __WEBPACK_IMPORTED_MODULE_12__pages_detalhes_onibus_detalhes_onibus_component__["a" /* DetalhesOnibusComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_rota_rota_component__["a" /* RotaComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_criar_publicacao_criar_publicacao__["a" /* CriarPublicacaoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_favoritos_favoritos_component__["a" /* FavoritosComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_photo_library__["a" /* PhotoLibrary */],
                __WEBPACK_IMPORTED_MODULE_22__pages_temporeal_temporeal_service__["a" /* TempoRealService */],
                __WEBPACK_IMPORTED_MODULE_23__pages_linhas_linhas_service__["a" /* LinhasService */],
                __WEBPACK_IMPORTED_MODULE_24__pages_paradas_paradas_service__["a" /* ParadasService */],
                __WEBPACK_IMPORTED_MODULE_25__pages_detalhes_paradas_detalhes_paradas_service__["a" /* DetalhesParadasService */],
                __WEBPACK_IMPORTED_MODULE_26__pages_detalhes_onibus_detalhes_onibus_service__["a" /* DetalhesOnibusService */],
                __WEBPACK_IMPORTED_MODULE_27__pages_rota_rota_service__["a" /* RotaService */],
                __WEBPACK_IMPORTED_MODULE_28__pages_reclamacoes_reclamacoes_service__["a" /* ReclamacaoService */],
                __WEBPACK_IMPORTED_MODULE_29__pages_criar_publicacao_criar_publicacao_service__["a" /* CriarPublicacaoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\matheus\app\theapp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\matheus\app\theapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map