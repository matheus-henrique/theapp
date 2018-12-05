import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { CriarPublicacaoService } from './criar-publicacao.service';
import { ReclamacaoComponent } from '../reclamacoes/reclamacoes.component';
/**
 * Generated class for the CriarPublicacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-publicacao',
  templateUrl: 'criar-publicacao.html',
})
export class CriarPublicacaoPage {
  photo: string = '';
  public msgproblema;
  constructor(public loadingCtrl: LoadingController, public cp : CriarPublicacaoService , public photoLibrary : PhotoLibrary, public camera : Camera, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarPublicacaoPage');
  }


  enviarPublicacao(){
      let loading = this.loadingCtrl.create({
          content: 'Carregando...'
        });

       loading.present();
      this.cp.enviar_nova_postagem(this.msgproblema,this.photo).subscribe(res => {
        loading.dismiss();
        this.navCtrl.push(ReclamacaoComponent)});
  }


  takePicture(sourceType:number) {
    console.log(sourceType);
    this.photo = '';
    var source = null;
    if(sourceType == 0){
        source = this.camera.PictureSourceType.CAMERA; 
    }else{
      source = this.camera.PictureSourceType.PHOTOLIBRARY;
    }
 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100,
      sourceType:source
    }
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;
 
      }, (error) => {
        console.error(error);
      })
      .catch((error) => {
        console.error(error);
      })
  }

}
