import { tab } from "@testing-library/user-event/dist/tab"

export function Table(props){

    const chaves = Object.keys(props.data[0]);
    //Remover ID caso tenha, (precisa checar se tem)
    //chaves.shift();


    return(
        <table key={props.nomeTable || chaves[0]} style={{width: '60%', borderCollapse: 'collapse', border: '1px #f9f9f9 solid', borderRadius: '5px'}}>
            <thead>
                {props.cabecalhos != null ? (
                    props.cabecalhos.map((cab, cabIndex) => (
                        <th key={cabIndex} style={{backgroundColor: '#f9f9f9'}}>
                            {cab}
                        </th>
                    ))
                ) : (
                    chaves.map((chave, chaveIndex) => (
                        <th key={chaveIndex} style={{backgroundColor: '#f9f9f9'}}>
                            {chave}
                        </th>
                    ))
                )}
            </thead>

            <tbody>
                {props.data.map(user => (
                    <tr style={{textAlign: 'center', color: '#2c2c2c'}}>
                        {chaves.map((chave, chaveIndex) => (
                            <td key={chaveIndex}>
                                {user[chave]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>



            {props.footer != null && (
                <tfoot>
                    <tr>
                        <td colSpan={chaves.length-1} style={{textAlign: 'right', fontSize: '12px', fontWeight: 'lighter', fontStyle: 'italic'}}>
                                {props.footer[0]}
                            </td>

                            <td style={{textAlign: 'center', fontSize: '12px', fontWeight: 'lighter', fontStyle: 'italic'}}>
                                {props.footer[1]}
                        </td>
                    </tr>
                </tfoot>
            )

            }
        </table>
    );
}