import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  public ofertas: Oferta;
  public id: number;
  constructor(
              private route: ActivatedRoute,
              private ofertasService: OfertasService
            ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    this.route.params.subscribe((parametro: any) => {
      this.id = parametro.id;
    });
    this.onSubscribe();

    const tempo = interval(2000);

    tempo.subscribe((intervalo: number) => {
      console.log(intervalo);
    });
  }

  onSubscribe() {
    this.ofertasService.getOfertasPorId(this.id).subscribe(result => {
      this.ofertas = result.shift();
    });
  }

}
