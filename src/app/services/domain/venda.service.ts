import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { API_CONFIG } from "src/app/config/api.config";
import { VendaDTO } from "src/app/models/vendaDTO";

@Injectable()

export class VendaService {
    constructor(public http : HttpClient){}
    findAll(): Observable<VendaDTO[]> {
        return this.http.get<VendaDTO[]>(`${API_CONFIG.baseUrl}/venda`);
    }

    findById(id: number): Observable<VendaDTO> {
        return this.http.get<VendaDTO>(
            `${API_CONFIG.baseUrl}/venda/${id}`);
    }

    insert(venda: VendaDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/venda`,
        venda, {
            observe: 'response',
            responseType: 'text'
        });
    }

    update(venda: VendaDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/venda/${venda.id}`,
        venda, {
            observe: 'response',
            responseType: 'text'
        }); 
    }

    delete(id: number) {
        return this.http.delete(`${API_CONFIG.baseUrl}/venda/${id}`)
    }




}