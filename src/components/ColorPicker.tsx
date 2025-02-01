import { ChangeEventHandler, ReactElement, useState } from "react"

function ColorPicker({onAdd}: {onAdd: (color: string) => void} ): ReactElement {
    const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

    const rgbToHex = (r: number, g: number, b: number) => {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
            .toUpperCase()}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newColor = { ...color, [name]: Number(value) };
        setColor(newColor);
    };

    const handleAddClick = () => {
        onAdd(rgbToHex(color.red, color.green, color.blue));
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <button onClick={handleAddClick}>
                    Add
                </button>
            </div>

            <ColorSlider label="Red: " name="red" value={color.red} max={255} onChange={handleChange} />
            <ColorSlider label="Green: " name="green" value={color.green} max={255} onChange={handleChange} />
            <ColorSlider label="Blue: " name="blue" value={color.blue} max={255} onChange={handleChange} />

            <p style={{ fontWeight: "bold", marginTop: "10px" }}>
                HEX: {rgbToHex(color.red, color.green, color.blue)}
            </p>
        </div>
    );
}

function ColorSlider({ label, name, value, max, onChange }: {
    label: string,
    name: string,
    value: number,
    max: number,
    onChange: ChangeEventHandler
}) {
    return <>
        <label>{label}{value}</label>
        <input
            type="range"
            name={name}
            min="0"
            max={max}
            value={value}
            onChange={onChange}
            style={{ width: "100%" }}
        />
    </>
}

export default ColorPicker
