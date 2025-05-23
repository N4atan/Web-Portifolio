
import './App.css';


import { Table } from './Components/Table.js';


function App() {
  let usuarios = [
    {id: 1, nome: "Usuario de Teste nº1" , email: "usuarioteste1@gmail.com"},
    {id: 2, nome: "Usuario de Teste nº2" , email: "usuarioteste2@gmail.com"}
  ];

  let cachorros = [
    {id: 1, nome: "Bulldog" , idade: 4}
  ];

  return (
    <div>
      <h1>Gerenciador de Usuários</h1>
      <Table data={usuarios} />
      <Table data={cachorros} />
    </div>
  );
}



export default App;
