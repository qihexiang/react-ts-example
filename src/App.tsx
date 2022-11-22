import { useState } from "react";
import ExpTable from "./Components/ExpTable";
import SlideResistance from "./Components/SlideResistance";
import useElec from "./Hooks/useElec";

const R = 10 + Math.random() - 0.5;

export type ExpRecord = { u: number; i: number };

function App() {
    const elec = useElec();
    const [slideR, setSlideR] = useState(15);
    const U = (R * elec) / (R + slideR);
    const I = U / R + (Math.random() - 0.5) * 0.1;
    const [records, setRecords] = useState([] as ExpRecord[]);
    return (
        <div>
            <SlideResistance
                slideR={slideR}
                setSlideR={setSlideR}
            ></SlideResistance>
            <p>电压表电压为：{U.toFixed(3)}V</p>
            <p>电流表电流为：{I.toFixed(3)}A</p>
            <button onClick={() => setRecords([...records, { u: U, i: I }])}>
                记录
            </button>
            <ExpTable data={records}></ExpTable>
        </div>
    );
}
export default App;
