import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import {ContactForm}  from 'src/app/models/contactForm';

import {Inject} from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  total  = null;
  error  = null;
  constructor(private servicioService : ServicioService ) {

  }

  ngOnInit(): void {

 this.servicioService.getRepos().subscribe(
            result => {


                    console.log(result);

                    this.total = result.data;


            },
            error => {
                console.log(<any>error);
            }
        );


  }

}

