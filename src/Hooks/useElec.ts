import { useState, useEffect } from "react";

function useElec() {
    const [elec, setElec] = useState(25.0);
    useEffect(() => {
        const interval = setInterval(() => {
            const delta = (Math.random() - 0.5) * 0.1;
            setElec(elec + delta);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return elec;
}

export default useElec