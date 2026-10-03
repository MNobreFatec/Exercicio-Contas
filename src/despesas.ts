import { Despesa, Categoria } from './tipos';

// Retorna um novo array com a nova despesa (lança erro se valor <= 0 ou mês fora de 1..12)
export function adicionarDespesa(despesas: Despesa[], nova: Despesa): Despesa[] {
  throw new Error('não implementado');
}

// Retorna um novo array sem a despesa do ID informado (cópia igual se ID não existir)
export function removerDespesa(despesas: Despesa[], id: number | string): Despesa[] {
  throw new Error('não implementado');
}

// Retorna apenas as despesas da categoria solicitada
export function despesasDaCategoria(despesas: Despesa[], categoria: Categoria): Despesa[] {
  throw new Error('não implementado');
}

// Retorna a soma de todos os valores (retorna 0 para lista vazia)
export function totalGasto(despesas: Despesa[]): number {
  throw new Error('não implementado');
}

// Retorna a despesa de maior valor (retorna undefined para lista vazia)
export function maiorDespesa(despesas: Despesa[]): Despesa | undefined {
  throw new Error('não implementado');
}