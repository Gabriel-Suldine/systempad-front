export interface itemVendaDTO {
    id: number;
    quantidade: number;
    valorTotal: number;
    data:string;
    produto: {
        id: number;
        nome: string;
        descricao: string;
        preco: number;
    };
    venda: {
        id: number;
        pagamento: {
            pagamento: string;
        };
        Atendente: {
            id: number;
            nome: string;
            telefone: string;
        };
        cliente: {
            id: number;
            nome: string;
            cpf: string;
            telefone: string;
            endereco: string;
        }
    };

}