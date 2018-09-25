import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametro: Params) => {
      this.ofertasService.getComoUsarOfertaPorId(parametro.id)
        .then((descricao: string) => {
          this.comoUsar = descricao;
        }).catch((err) => {
          console.log('Nome do erro: ' + err + '\nComponente: Como Usar');
        });
    });
  }

}
