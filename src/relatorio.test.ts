import { describe, it, expect } from 'vitest';
import { Despesa } from './tipos';
import { descricaoCategoria, matrizCategoriaMes, formatarRelatorio } from './relatorio';

const despesasExemplo: Despesa[] = [
  { id: 1, descricao: 'Mercado', valor: 100, categoria: 'alimentação', mes: 1 },
  { id: 2, descricao: 'Feira', valor: 50, categoria: 'alimentação', mes: 1 },
  { id: 3, descricao: 'Ônibus', valor: 40, categoria: 'transporte', mes: 2 }
];

describe('Funções de Relatório (src/relatorio.ts)', () => {
  describe('descricaoCategoria', () => {
    it('deve retornar o nome formatado para exibição', () => {
      expect(descricaoCategoria('alimentação')).toBe('Alimentação');
      expect(descricaoCategoria('transporte')).toBe('Transporte');
    });

    it('deve tratar corretamente todas as categorias do union type via switch', () => {
      expect(descricaoCategoria('lazer')).toBe('Lazer');
      expect(descricaoCategoria('moradia')).toBe('Moradia');
    });
  });

  describe('matrizCategoriaMes', () => {
    it('deve montar a matriz 4x12 acumulando os valores nos índices corretos', () => {
      const matriz = matrizCategoriaMes(despesasExemplo);

      // 4 categorias (linhas) x 12 meses (colunas)
      expect(matriz).toHaveLength(4);
      expect(matriz[0]).toHaveLength(12);

      // Categoria 'alimentação' (linha 0), Mês 1 (coluna 0) -> 100 + 50 = 150
      expect(matriz[0]![0]).toBe(150);

      // Categoria 'transporte' (linha 1), Mês 2 (coluna 1) -> 40
      expect(matriz[1]![1]).toBe(40);
    });

    it('deve retornar uma matriz 4x12 zerada se o array de despesas for vazio', () => {
      const matriz = matrizCategoriaMes([]);
      expect(matriz).toHaveLength(4);
      expect(matriz[0]![0]).toBe(0);
    });
  });

  describe('formatarRelatorio', () => {
    it('deve gerar a string do relatório com título, totais e maior gasto', () => {
      const texto = formatarRelatorio(despesasExemplo);

      expect(texto).toContain('RELATÓRIO MENSAL DE DESPESAS');
      expect(texto).toContain('TOTAL GERAL');
      expect(texto).toContain('190.00');
    });

    it('deve formatar adequadamente quando não houver despesas no array', () => {
      const texto = formatarRelatorio([]);

      expect(texto).toContain('TOTAL GERAL : R$ 0.00');
      expect(texto).toContain('Nenhum');
    });
  });
});