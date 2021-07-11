import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent  {

  heroes: string[]=['Spiderman','Iroman','Hulk','Thor', 'Capitán America']
  heroeBorrado:string='';

  BorrarHeroe():void{
    
    this.heroeBorrado = this.heroes.shift() || '' ;
    
  }
}


