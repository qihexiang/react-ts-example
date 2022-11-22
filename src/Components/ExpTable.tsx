import { ExpRecord } from "../App";

function ExpTable(props: { data: ExpRecord[] }) {
    const { data } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>电压</th>
                    <th>电流</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{row.u.toFixed(3)}</td>
                        <td>{row.i.toFixed(3)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ExpTable
