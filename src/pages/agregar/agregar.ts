import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nombre='';
  tel='';
  correo='';
  fb='';
  twitter='';
  insta='';

  contactos=[];
  home=HomePage;
  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public navParams: NavParams) {
    this.contactos=this.navParams.get("contactos");
  }

  clickAgreCon()
  {
    if(this.nombre.length>0)
    {
      if(this.tel.length>0)
        {
          this.contactos.push(
            {
              icono:"https://image.freepik.com/icones-gratis/mulher-de-negocios_318-50591.jpg",
              nombre:this.nombre,
              tel:this.tel,
              correo:this.correo,
              fb:this.fb,
              twitter:this.twitter,
              insta:this.insta,
            }
          )
          this.navCtrl.pop();
        }
      


    }
    else
      {
        {
          console.log("la nota esta vacía");
          const alert= this.alertCtrl.create({
            title: "Oops!",
            subTitle: "La nota está vacía",
            buttons: ['Ok']
          });
          alert.present();
        }
      }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }


}