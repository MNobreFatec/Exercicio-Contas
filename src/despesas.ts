import { Despesa, Categoria } from './tipos';

// Retorna um novo array com a nova despesa
export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  if (nova.valor <= 0) {
    throw new Error('O valor da despesa deve ser maior que zero.');
  }
  if (nova.mes < 1 || nova.mes > 12) {
    throw new Error('O mês deve estar entre 1 e 12.');
  }
  return [...despesas, nova];
}

// Retorna um novo array sem a despesa do ID informado
export function removerDespesa(despesas: Despesa[], id: number | string): Despesa[] {
  return despesas.filter((d) => d.id !== id);
}

// Retorna apenas as despesas da categoria solicitada
export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
  return despesas.filter((d) => d.categoria === categoria);
}

// Retorna a soma de todos os valores das despesas
export function totalGasto(despesas: Despesa[]): number {
  return despesas.reduce((acc, d) => acc + d.valor, 0);
}

// Retorna a despesa de maior valor (ou undefined para lista vazia)
export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
  if (despesas.length === 0) return undefined;
  return despesas.reduce((maior, d) => (d.valor > maior.valor ? d : maior));
}