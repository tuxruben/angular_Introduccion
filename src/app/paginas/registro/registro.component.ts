import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio.service';
import {ContactForm}  from 'src/app/models/contactForm';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
ContactModel = new ContactForm();
 dato : string = '';


  constructor(private servicioService : ServicioService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
this.getDato();
  }

  getDato():void{

  this.dato =''+ this.route.snapshot.paramMap.get('id');
  console.log(this.dato);

}
 onSubmit( f: NgForm)  {

this.servicioService.addProject(this.ContactModel).subscribe(  data => {

            if(data){
                console.log("Gracias por el mensajeCorrecto");
                console.log(data);
                  f.reset();
            }
            else{
                console.log("Error");

            }

        },
        err => { console.log("Algo fallo :/, correo: cesar@unprogramador.com ups"); }
      );
}
}
