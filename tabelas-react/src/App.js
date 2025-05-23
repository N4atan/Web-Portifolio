
import './App.css';


import { Table } from './Components/Table.js';


function App() {
  let filmes = [
    {nome: "Bastardos Inglórios" , anoPublic: '2009', genero: "Guerra / Ação", avaliacao: "8.4"},
    {nome: "Chungking Express" , anoPublic: "1994", genero: "Romance / Crime", avaliacao: "7.9"},
    {nome: "Tá Dando Onda" , anoPublic: "2007", genero: "Família / Comédia", avaliacao: "6.7"},
    {nome: "O Bixo Vai Pegar" , anoPublic: "2006", genero: "Família / Aventura", avaliacao: "6.1"}
  ];

  let listaCompras = [
    {item: 'Super Cola', qtd: 2, precoUn: 5.90, precoT: null},
    {item: 'Meia', qtd: 2, precoUn: 16.80, precoT: null}
  ];
  listaCompras.forEach(item => item.precoT = item.qtd*item.precoUn);

  let cronograma = [
    {dia: 'Segunda', materia: 'Inglês', inicio: '07:20', fim: '08:20'},
    {dia: 'Terça', materia: 'React', inicio: '10:40', fim: '12:00'},
    {dia: 'Quarta', materia: 'Tailwind', inicio: '07:30', fim: '09:20'},
    {dia: 'Quinta', materia: 'Java', inicio: '13:00', fim: '14:30'}
  ];

  function horaParaMinutos(hora){
    const [h, m] = hora.split(':').map(Number);
    return h * 60 + m;
}

  return (
    <div>
      <h1>Estudo de Tabelas e React</h1>
      <Table nomeTable={'Filmes'}  
            cabecalhos={["Nome", "Ano de Lanaçamento", "Genêros", "Avaliação IMDb"]} 
            data={filmes} 
      />

      <Table nomeTable={'Compras'}
            cabecalhos={['Item', 'Quantidade', 'Valor Un.', 'Total']} 
            data={listaCompras}  
            footer={["Valor Total da Compra:", `R$ ${(listaCompras.reduce((acc, item) => acc + item.precoT, 0)).toFixed(2)}`]}
      />

      <Table nomeTable={'Cronograma'}
            cabecalhos={['Dia', 'Matéria', 'Início', 'Fim ']}
            data={cronograma}
            footer={['Total de Horas Semanais:', `${(cronograma.reduce((acc, aula) => acc + (horaParaMinutos(aula.fim) - horaParaMinutos(aula.inicio)), 0) / 60).toFixed(2)}h`]}
      />

      
    </div>
  );
}



export default App;
