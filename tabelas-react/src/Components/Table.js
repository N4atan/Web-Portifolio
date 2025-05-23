import { tab } from "@testing-library/user-event/dist/tab"

export function Table(props){
    
    const chaves = Object.keys(props.data[0]);

    return(
        <table style={{width: '60%', borderCollapse: 'collapse', border: '1px #f9f9f9 solid', borderRadius: '5px'}}>
            <thead>
                {chaves.map(chave => (
                    <th style={{backgroundColor: '#f9f9f9'}}>
                        {chave}
                    </th>
                ))}
            </thead>

            <tbody>
                {props.data.map(user => (
                    <tr style={{textAlign: 'center', color: '#2c2c2c'}}>
                        {chaves.map(chave => (
                            <td>{user[chave]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}