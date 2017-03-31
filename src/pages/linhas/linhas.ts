import { Component,OnInit } from '@angular/core';

import { NavController,LoadingController } from 'ionic-angular';

import { LinhasService } from './linhas.service';

@Component({
  selector: 'page-about',
  templateUrl: 'linhas.html'
})
export class Linhas implements OnInit{

	linhas : any;

	leste : any;
	norte : any;
	sul : any;
	sudeste : any;
	terminal : any;
	outros : any;

  constructor(public navCtrl: NavController, public linhaService: LinhasService,public loadingCtrl: LoadingController) {

  }

  ngOnInit(){
     let loading = this.loadingCtrl.create({
        content: 'Carregando Linhas...'
      });

  		this.linhaService.linhasZonaSul()
  			.subscribe(res => this.sul= res)
  		this.linhaService.linhasZonaSudeste()
  			.subscribe(res => this.sudeste= res)
  		this.linhaService.linhasZonaNorte()
  			.subscribe(res => this.norte= res)
  		this.linhaService.linhasZonaLeste()
  			.subscribe(res => this.leste= res)
  		this.linhaService.linhasZonaTerminal()
  			.subscribe(res => this.terminal= res)
  		this.linhaService.linhasZonaOutros()
  			.subscribe(res => this.outros= res,
          err => console.log(err),
          () => loading.dismiss())
  }

}
