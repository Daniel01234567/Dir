import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactosPage } from '../contactos/contactos';
import { AgregarPage } from '../agregar/agregar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
contacto=ContactosPage;
agregar=AgregarPage;
contactos=
[
  {icono: "http://www.upsocl.com/wp-content/uploads/2016/04/35-4.jpg", nombre: "Torreon", correo: "Torreon@mex.com", tel: "(88) 24321232", fb: "Speedy Gonzales", twitter: "@speedy", insta: "Torreon_Speedy" },
  {icono: "http://innatia.info/images/galeria/pablo-escobar-0.jpg", nombre: "Pablo Blanco", correo: "pbla@hotmail.com", tel: "(33) 22543444", fb: "Pablo Blanco", twitter: "@p_Blanco", insta: "Pavlo_Blank" },
  {icono: "http://fotos.e-consulta.com/guajolotas.jpg", nombre: "Ernesto Palacios", correo: "cdmx@gmail.com", tel: "(55)23435654", fb: "Ernesto en la ciudad", twitter: "@Quesadillasinqueso", insta:"Ernesto:Torta" }
]
  constructor(public navCtrl: NavController) {

  }
clickcontactos(c)
{
this.navCtrl.push(this.contacto,c);
}
clickagregar()
{
this.navCtrl.push(this.agregar, {contactos:this.contactos});


}
}