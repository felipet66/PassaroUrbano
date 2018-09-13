import { Oferta } from './shared/oferta.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {

  constructor(private httpc: HttpClient) {}

  public getOfertas(): Observable<Oferta[]> {
    return this.httpc.get<Oferta[]>(`${URL_API}/ofertas?destaque=true`);
  }

  public getOfertasPorCategoria(categoria: string): Observable<Oferta[]> {
    return this.httpc.get<Oferta[]>(`${URL_API}/ofertas?categoria=${categoria}`);
  }

  public getOfertasPorId(id: number): Observable<Oferta[]> {
    return this.httpc.get<Oferta[]>(`${URL_API}/ofertas?id=${id}`);
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.httpc.get(`${URL_API}/como-usar?id=${id}`)
    .toPromise()
    .then((resposta: any) => {
      return resposta.json()[0].descricao;
    });
  }
}
