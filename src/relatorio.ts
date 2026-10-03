import { Despesa, Categoria, CATEGORIAS } from './tipos';
import { totalGasto, maiorDespesa } from './despesas';

export function descricaoCategoria(categoria: Categoria): string {
  switch (categoria) {
    case 'alimentação':
      return 'Alimentação';
    case 'transporte':
      return 'Transporte';
    case 'lazer':
      return 'Lazer';
    case 'moradia':
      return 'Moradia';
  }
}

export function matrizCategoriaMes(despesas: Despesa[]): number[][] {
  const matriz: number[][] = [];

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const linha: number[] = [];
    for (let j = 0; j < 12; j++) {
      linha.push(0);
    }
    matriz.push(linha);
  }

  for (let i = 0; i < despesas.length; i++) {
    const d = despesas[i]!;
    let catIndex = -1;

    for (let c = 0; c < CATEGORIAS.length; c++) {
      if (CATEGORIAS[c] === d.categoria) {
        catIndex = c;
        break;
      }
    }

    const mesIndex = d.mes - 1;
    if (catIndex !== -1 && mesIndex >= 0 && mesIndex < 12) {
      matriz[catIndex]![mesIndex]! += d.valor;
    }
  }

  return matriz;
}

export function formatarRelatorio(despesas: Despesa[]): string {
  const titulo = 'RELATÓRIO MENSAL DE DESPESAS'.toUpperCase();
  const matriz = matrizCategoriaMes(despesas);
  let texto = `${titulo}\n${'='.repeat(35)}\n`;

  for (let i = 0; i < CATEGORIAS.length; i++) {
    const cat = CATEGORIAS[i]!;
    const nomeCat = descricaoCategoria(cat).padEnd(15, ' ');
    let totalCat = 0;

    for (let j = 0; j < 12; j++) {
      totalCat += matriz[i]![j]!;
    }

    texto += `${nomeCat}: R$ ${totalCat.toFixed(2).padStart(8, ' ')}\n`;
  }

  const total = totalGasto(despesas);
  const maior = maiorDespesa(despesas);

  texto += `${'='.repeat(35)}\n`;
  texto += `TOTAL GERAL : R$ ${total.toFixed(2)}\n`;
  texto += `MAIOR GASTO : ${maior ? `${maior.descricao} (R$ ${maior.valor.toFixed(2)})` : 'Nenhum'}`;

  return texto;
}