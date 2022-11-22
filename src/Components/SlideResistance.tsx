function SlideResistance(props: {
    slideR: number;
    setSlideR: (r: number) => void;
}) {
    const { slideR, setSlideR } = props;
    return (
        <input
            type="range"
            max={15}
            min={0}
            step={0.01}
            value={slideR}
            onChange={(ev) => setSlideR(Number(ev.target.value))}
        ></input>
    );
}

export default SlideResistance;
