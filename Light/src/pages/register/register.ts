import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseServerProvider } from '../../providers/base-server/base-server';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public userSession: FormGroup;
  public cadOferta: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public baseService: BaseServerProvider,
  ) {
    this.cadOferta = this.navParams.get("registerPublication");
    this.userSession = new FormGroup({
      name: new FormControl('Fabricio Oliveira', [Validators.required, Validators.minLength(3), Validators.maxLength(128)]),
      email: new FormControl('fabricio@gmail.com', [Validators.required, Validators.minLength(6), Validators.maxLength(128)]),
      celular: new FormControl('(24) 981288888', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]),
      endereco: new FormControl('Rua A n 100 Centro Volta Redonda RJ', [Validators.required, Validators.maxLength(1024)]),      
      oferta: new FormControl('03', (this.cadOferta ? [Validators.required, Validators.minLength(2), Validators.maxLength(5)] : [])),
      descricao: new FormControl('Busco oportunidade', (this.cadOferta ? [Validators.required, Validators.maxLength(1024)] : [])),            
      password: new FormControl('1234566', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
      passwordConfirm: new FormControl('123456', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]),
    });    
  }

  public registerUser(userData) {
    /*this.baseService.postData(userData.value, "register", "ToLivreApi", true).then((result: Anuncio) => {           
      this.baseService.createUserSession(result.anunciante);      
      if (this.cadOferta) {
        this.navCtrl.setRoot(PaymentPage, {"registerAnuncio": result});
      } else {
        this.navCtrl.setRoot(MainPage);
      }
    }, (err) => {
      this.baseService.showMessage(err.error.text);
    });*/
  }

  public getProfissoes() {
    let toReturn = [];
    toReturn.push({id: "01", value: "Programador"});
    toReturn.push({id: "02", value: "Analista de Sistemas"});
    toReturn.push({id: "03", value: "DBA"});
    toReturn.push({id: "04", value: "Técnico em Redes"});
    return toReturn;
  }
  
}
