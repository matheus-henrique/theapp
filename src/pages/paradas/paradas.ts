import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController,AlertController  } from 'ionic-angular';
import { ParadasService } from './paradas.service';

import { DetalhesParadas } from '../detalhes_paradas/detalhes_paradas.component';
 


@Component({
  selector: 'page-contact',
  templateUrl: 'paradas.html'
})
export class Paradas{

  constructor(public navCtrl: NavController, public ps: ParadasService, public ac : AlertController){

  }



  alerta_parada(){
    let prompt = this.ac.create({
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
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Procurar',
            handler: data => {
              this.parada_especifica(data.title);   
            }
          }
        ]
      });

    prompt.present();
  }

  parada_especifica(num){
    let num_linha = "0" + num;

  	this.ps.pegar_linha_especifica(num_linha).subscribe(res => {
	  			this.navCtrl.push(DetalhesParadas,{dados : res})
	  			},
          err => {
            let alert = this.ac.create({
                title:"Não encontrado",
                subTitle: "Não foi encontrado a linha : "+num+"<br>"+
                "- Verifique a ortografia <br>"+
                "- Não coloque caracteres especiais <br>"+
                "- Se você estiver certo de que essa linha existe, por favor entre em contato.",
                buttons: ['OK']
            });

            alert.present();
          },
          () => {console.log("Concluido")})
  }


  parada_mais_proxima(){
    this.ps.parada_mais_proxima().subscribe(res => {
      this.navCtrl.push(DetalhesParadas, {dados : res})
    });
  }

}
