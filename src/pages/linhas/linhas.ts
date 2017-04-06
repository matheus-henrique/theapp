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
  
  linha = [];
  linha_aux = [];
  linha_obj : any;
  mostrar_pesquisa = true;
  ngOnInit(){
     let loading = this.loadingCtrl.create({
        content: 'Carregando Linhas...'
      });

  		this.linhaService.linhasZonaSul()
  			.subscribe(res => 
        {
          this.sul = res;
          for(let i = 0; i < res.length; i++){
            this.linha_obj = {
              numero : res[i].Numero,
              denomicao : res[i].Denomicao,
              zona : 'Sul'
            };

            this.linha.push(this.linha_obj);
            this.linha_aux.push(this.linha_obj);
          }
        });
  		this.linhaService.linhasZonaSudeste()
  			.subscribe(res => {
          this.sudeste= res;
            for(let i = 0; i < res.length; i++){
            this.linha_obj = {
              numero : res[i].Numero,
              denomicao : res[i].Denomicao,
              zona : 'Sudeste'
            };

            this.linha.push(this.linha_obj);
            this.linha_aux.push(this.linha_obj);
          }
        })
  		this.linhaService.linhasZonaNorte()
  			.subscribe(res => {
          this.norte= res;
           for(let i = 0; i < res.length; i++){
            this.linha_obj = {
              numero : res[i].Numero,
              denomicao : res[i].Denomicao,
              zona : 'Norte'
            };

            this.linha.push(this.linha_obj);
            this.linha_aux.push(this.linha_obj);
          }

        })
  		this.linhaService.linhasZonaLeste()
  			.subscribe(res => {
            this.leste= res;
            for(let i = 0; i < res.length; i++){
            this.linha_obj = {
              numero : res[i].Numero,
              denomicao : res[i].Denomicao,
              zona : 'Leste'
            };

            this.linha.push(this.linha_obj);
            this.linha_aux.push(this.linha_obj);
          }

        })
  		this.linhaService.linhasZonaTerminal()
  			.subscribe(res => {
          this.terminal= res
           for(let i = 0; i < res.length; i++){
            this.linha_obj = {
              numero : res[i].Numero,
              denomicao : res[i].Denomicao,
              zona : 'Terminal'
            };

            this.linha.push(this.linha_obj);
            this.linha_aux.push(this.linha_obj);
          }

        })
  		this.linhaService.linhasZonaOutros()
  			.subscribe(res => {
          this.outros= res
           for(let i = 0; i < res.length; i++){
            this.linha_obj = {
              numero : res[i].Numero,
              denomicao : res[i].Denomicao,
              zona : 'Outros'
            };

            this.linha.push(this.linha_obj);
            this.linha_aux.push(this.linha_obj);
          }

        },
          err => console.log(err),
          () => loading.dismiss())
  }

  onInput(event){
    this.linha = this.linha_aux;

 
    this.linha = this.linha.filter((linha) => {

       console.log(linha.numero.indexOf(event.target.value.toLowerCase()) > -1);
       return (linha.numero.indexOf(event.target.value.toLowerCase()) > -1);
    });


   console.log(this.linha);
    
  } 

}
