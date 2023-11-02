export interface VendaDTO {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    pagamento: string;
    atendente: {
        nome: String;
    }
    cliente: {
        nome: string;
    };

}