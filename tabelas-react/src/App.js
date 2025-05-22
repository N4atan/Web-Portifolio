
import './App.css';


import { Table } from './Components/Table.js';


function App() {
  let filmes = [
    {nome: "Bastardos Ingloriósos" , anoPublic: '2009', genero: "Guerra / Ação", avaliacao: "8.4"},
    {nome: "Chungking Express" , anoPublic: "1994", genero: "Romance / Crime", avaliacao: "7.9"},
    {nome: "Tá Dando Onda" , anoPublic: "2007", genero: "Família / Comédia", avaliacao: "6.7"},
    {nome: "O Bixo Vai Pegar" , anoPublic: "2006", genero: "Família / Aventura", avaliacao: "6.1"}
  ];

  let listaCompras = [
    {item: 'Super Cola', qtd: 2, precoUn: 5.90, precoT: null},
    {item: 'Meia', qtd: 2, precoUn: 16.80, precoT: null}
  ];

  listaCompras.forEach(item => item.precoT = item.qtd*item.precoUn);

  return (
    <div>
      <h1>Gerenciador de Usuários</h1>
      <Table nomeTable={'Filmes'}  cabecalhos={["Nome", "Ano de Lanaçamento", "Genêros", "Avaliação IMDb"]} data={filmes} />
      <Table data={listaCompras}  cabecalhos={['Item', 'Quantidade', 'Valor Un.', 'Total']} footer={["Valor Total da Compra:", `R$ ${(listaCompras.reduce((acc, item) => acc + item.precoT, 0)).toFixed(2)}`]}/>
    </div>
  );
}



export default App;
