import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { API_CONFIG } from "src/app/config/api.config";
import { AtendenteDTO } from "src/app/models/atendenteDTO";
@Injectable()
export class AtendenteService {
    constructor(public http: HttpClient) { }

    findAll(): Observable<AtendenteDTO[]> {
        return this.http.get<AtendenteDTO[]>(`${API_CONFIG.baseUrl}/atendente`);
    }

    findById(id: number): Observable<AtendenteDTO> {
        return this.http.get<AtendenteDTO>(
            `${API_CONFIG.baseUrl}/atendente/${id}`);
    }

    insert(atendente: AtendenteDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/atendente`,
            atendente, {
            observe: 'response',
            responseType: 'text'
        });
    }

    update(atendente: AtendenteDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/atendente/${atendente.id}`,
            atendente, {
            observe: 'response',
            responseType: 'text'
        });
    }

    delete(id: number) {
        return this.http.delete(`${API_CONFIG.baseUrl}/atendente/${id}`)
    }
}



