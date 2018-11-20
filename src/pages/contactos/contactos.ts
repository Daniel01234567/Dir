import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {
  nombre="";
  icono="";
  tel:"";
  correo:"";
  fb:"";
  insta:"";
  twitter:"";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nombre=this.navParams.get('nombre');
    this.icono=this.navParams.get('icono');
    this.tel=this.navParams.get('tel');
    this.correo=this.navParams.get('correo');
    this.fb=this.navParams.get('fb');
    this.insta=this.navParams.get('insta');
    this.twitter=this.navParams.get('twitter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}

