import { ReactElement, useState } from 'react';
import './App.css';
import BaseColors from './components/BaseColors';
import ColorPicker from './components/ColorPicker';


function App(): ReactElement {
    const [baseColors, setBaseColors] = useState(["#FF0000", "#00FF00", "#0000FF"]);

    return <>
        <BaseColors colors={baseColors} />
        <ColorPicker onAdd={(color) => {setBaseColors(baseColors.concat([color]))}} />
    </>
}

export default App
