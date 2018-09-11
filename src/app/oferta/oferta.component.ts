import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  constructor(
              private route: ActivatedRoute,
              private ofertasService: OfertasService
            ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    this.route.params.subscribe((parametro: any) => {
      this.ofertasService.getOfertasPorId(parametro.id);
    });
  }

}
