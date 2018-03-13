import { Component, OnInit } from '@angular/core';
import {ServicioService } from '../providers/servicio.service';
import {Uno} from '../model/uno';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {
 
  todos: Uno[];
  id : number;

  constructor(public todosService:ServicioService) {  
    console.log('UnoComponent constructor');
    this.todos;
  }
 
  ngOnInit() {
    console.log('UnoComponent ngOnInit');
    this.cargarTareas();
  }
  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getId().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }
 /**
   * Mapea los Datos en formato Json a Todo que proviene del Servicio Rest
   * @param resultado : any 
   */
  mapeo( result : any ){

    let todo:Uno;
    result.forEach(el => {
        todo = new Uno( el.title );
        todo.id = el.id;
        todo.idUser = el.userId;
        todo.completed = el.completed;

        this.todos.push(todo);
    });

  }



}
