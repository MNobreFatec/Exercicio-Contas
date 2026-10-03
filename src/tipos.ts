// Union type com as 4 categorias permitidas no sistema
export type Categoria = 'alimentação' | 'transporte' | 'lazer' | 'moradia';

// Array constante com a ordem oficial das categorias para os relatórios
export const CATEGORIAS: Categoria[] = ['alimentação', 'transporte', 'lazer', 'moradia'];

// Interface que define o formato de uma única despesa
export interface Despesa {
  // readonly: O ID é gerado na criação e não pode ser alterado posteriormente
  readonly id: number | string;
  descricao: string;
  valor: number;
  // Categoria restrita apenas aos 4 valores da union type Categoria
  categoria: Categoria;
  // Mês da ocorrência (1 a 12)
  mes: number;
  // opcional (?): Observações nem sempre são necessárias ao cadastrar um gasto
  observacao?: string;
}