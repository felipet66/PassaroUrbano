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
    .then((resposta: Response) => {
      return resposta[0].descricao;
    });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.httpc.get(`${URL_API}/onde-fica?id=${id}`)
    .toPromise()
    .then((resposta: Response) => {
      return resposta[0].descricao;
    });
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.httpc.get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`);
  }
}
