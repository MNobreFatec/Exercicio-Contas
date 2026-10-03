import { Despesa } from './tipos';
import { adicionarDespesa } from './despesas';
import { formatarRelatorio } from './relatorio';

let despesas: Despesa[] = [];

// 8 despesas cobrindo 4 categorias e 3 meses diferentes
despesas = adicionarDespesa(despesas, { id: 1, descricao: 'Supermercado', valor: 350.50, categoria: 'alimentação', mes: 1 });
despesas = adicionarDespesa(despesas, { id: 2, descricao: 'Passe de Ônibus', valor: 44.00, categoria: 'transporte', mes: 1 });
despesas = adicionarDespesa(despesas, { id: 3, descricao: 'Cinema com Amigos', valor: 60.00, categoria: 'lazer', mes: 1 });
despesas = adicionarDespesa(despesas, { id: 4, descricao: 'Aluguel', valor: 1200.00, categoria: 'moradia', mes: 2 });
despesas = adicionarDespesa(despesas, { id: 5, descricao: 'Restaurante', valor: 120.00, categoria: 'alimentação', mes: 2 });
despesas = adicionarDespesa(despesas, { id: 6, descricao: 'Uber para Faculdade', valor: 35.00, categoria: 'transporte', mes: 2 });
despesas = adicionarDespesa(despesas, { id: 7, descricao: 'Conta de Luz', valor: 180.00, categoria: 'moradia', mes: 3 });
despesas = adicionarDespesa(despesas, { id: 8, descricao: 'Jogo na Steam', valor: 89.90, categoria: 'lazer', mes: 3 });

console.log(formatarRelatorio(despesas));