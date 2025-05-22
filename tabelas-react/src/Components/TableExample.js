export function TableExample(){
    return (
      <table>
        <thead style={{ background: '#d9d9d9' }}>
          <th>Produto</th>
            <th>Quantidade</th>
              <th>Valor</th>
        </thead>

        <tbody>
          <tr>
            <td>Notebook Positivo</td>
            <td>4</td>
            <td>R$ 2.400,99</td>
          </tr>

          <tr>
            <td>Samsung A35</td>
            <td>8</td>
            <td>R$ 1.868,90</td>
          </tr>
        </tbody>
      </table>
    )
}