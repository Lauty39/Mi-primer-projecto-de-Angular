import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  propiedadesParrafo: any;
  enviar: boolean;

  constructor(){
    this.propiedadesParrafo={
      color: "red",
      fontsize: "24px"
    }
    this.enviar= false;
  }
  onClickEnviar(){
  this.enviar = !this.enviar;
  }
  
}
