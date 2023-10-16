import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { API_CONFIG } from "src/app/config/api.config";
import { ProdutoDTO } from "src/app/models/ProdutoDTO";
@Injectable()
export class ProdutoService {
constructor(public http: HttpClient){
}
}
//Iniciando a consulta na API
//Crie um método findAll() e passe a URL do mapeamento
function findAll(this: any)  : Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produto`);
    }
    