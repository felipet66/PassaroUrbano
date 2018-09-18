import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OfertasService ]
})
export class HeaderComponent implements OnInit {
  public ofertas: Oferta[];

  constructor( private ofertasService: OfertasService ) { }

  ngOnInit() {
  }

  public pesquisa(termoDaBusca: string): void {
    this.ofertasService.pesquisaOfertas(termoDaBusca).subscribe(result => {
      this.ofertas = result;
      console.log( result );
    },
    (erro: any) => {
      console.log( erro.message );
    },
    () => {
      console.log( 'complete' );
    }
    );
  }
}
