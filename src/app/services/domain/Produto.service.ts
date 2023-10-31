import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { API_CONFIG } from "src/app/config/api.config";
import { ProdutoDTO } from "src/app/models/produtoDTO";
@Injectable()
export class ProdutoService {
    constructor(public http: HttpClient) { }

    findAll(): Observable<ProdutoDTO[]> {
        return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produto`);
    }

    findById(id: number): Observable<ProdutoDTO> {
        return this.http.get<ProdutoDTO>(
            `${API_CONFIG.baseUrl}/produto/${id}`);
    }

    insert(produto: ProdutoDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/produto`,
            produto, {
            observe: 'response',
            responseType: 'text'
        });
    }

    update(produto: ProdutoDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/produto/${produto.idProduto}`,
            produto, {
            observe: 'response',
            responseType: 'text'
        }); 
    }

    delete(id: number) {
        return this.http.delete(`${API_CONFIG.baseUrl}/produto/${id}`)
    }
}

 

