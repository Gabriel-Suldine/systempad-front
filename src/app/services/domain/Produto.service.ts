import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { API_CONFIG } from "src/app/config/api.config";
import { ProdutoDTO } from "src/app/models/ProdutoDTO";
@Injectable()
export class ProdutoService {
constructor(public http: HttpClient){
}
 findAll()  : Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${API_CONFIG.baseUrl}/produto`);
    }
}


    