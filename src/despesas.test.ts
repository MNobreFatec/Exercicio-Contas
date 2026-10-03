import { describe, it, expect } from 'vitest';
import { Despesa } from './tipos';
import {
  adicionarDespesa,
  removerDespesa,
  despesasDaCategoria,
  totalGasto,
  maiorDespesa
} from './despesas';

const despesasExemplo: Despesa[] = [
  { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentação', mes: 3 },
  { id: 2, descricao: 'Ônibus', valor: 50, categoria: 'transporte', mes: 3 },
  { id: 3, descricao: 'Cinema', valor: 30, categoria: 'lazer', mes: 4 }
];

describe('Funções de Despesas (src/despesas.ts)', () => {
  describe('adicionarDespesa', () => {
    it('deve retornar um novo array com a nova despesa inserida', () => {
      const nova: Despesa = { id: 4, descricao: 'Luz', valor: 120, categoria: 'moradia', mes: 5 };
      const resultado = adicionarDespesa(despesasExemplo, nova);

      expect(resultado).toHaveLength(4);
      expect(resultado[3]).toEqual(nova);
    });

    it('não deve alterar o array original recebido por parâmetro', () => {
      const copiaOriginal = [...despesasExemplo];
      const nova: Despesa = { id: 4, descricao: 'Luz', valor: 120, categoria: 'moradia', mes: 5 };

      adicionarDespesa(despesasExemplo, nova);

      // A função não altera o array original porque utiliza o operador spread (...) para criar uma nova referência de array na memória.
      expect(despesasExemplo).toEqual(copiaOriginal);
    });

    it('deve lançar erro se o valor for <= 0 ou o mês estiver fora da faixa 1-12', () => {
      const invalidaValor: Despesa = { id: 5, descricao: 'Teste', valor: 0, categoria: 'lazer', mes: 1 };
      const invalidaMes: Despesa = { id: 6, descricao: 'Teste', valor: 10, categoria: 'lazer', mes: 13 };

      expect(() => adicionarDespesa(despesasExemplo, invalidaValor)).toThrow();
      expect(() => adicionarDespesa(despesasExemplo, invalidaMes)).toThrow();
    });
  });

  describe('removerDespesa', () => {
    it('deve remover a despesa do ID informado', () => {
      const resultado = removerDespesa(despesasExemplo, 2);
      expect(resultado).toHaveLength(2);
      expect(resultado.find((d) => d.id === 2)).toBeUndefined();
    });

    it('deve retornar uma cópia igual se o ID não existir no array', () => {
      const resultado = removerDespesa(despesasExemplo, 999);
      expect(resultado).toHaveLength(3);
      expect(resultado).toEqual(despesasExemplo);
    });
  });

  describe('despesasDaCategoria', () => {
    it('deve retornar apenas as despesas da categoria solicitada', () => {
      const resultado = despesasDaCategoria(despesasExemplo, 'alimentação');
      expect(resultado).toHaveLength(1);
      expect(resultado[0]!.categoria).toBe('alimentação');
    });

    it('deve retornar array vazio se a categoria não possuir despesas', () => {
      const resultado = despesasDaCategoria(despesasExemplo, 'moradia');
      expect(resultado).toEqual([]);
    });
  });

  describe('totalGasto', () => {
    it('deve calcular a soma de todos os valores', () => {
      expect(totalGasto(despesasExemplo)).toBe(180);
    });

    it('deve retornar 0 para um array de despesas vazio', () => {
      expect(totalGasto([])).toBe(0);
    });
  });

  describe('maiorDespesa', () => {
    it('deve retornar o objeto da despesa de maior valor', () => {
      const resultado = maiorDespesa(despesasExemplo);
      expect(resultado?.valor).toBe(100);
      expect(resultado?.descricao).toBe('Mercado');
    });

    it('deve retornar undefined para um array vazio', () => {
      expect(maiorDespesa([])).toBeUndefined();
    });
  });
});