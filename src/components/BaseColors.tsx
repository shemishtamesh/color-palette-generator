import { ReactElement } from "react"
import BaseColor from "./BaseColor"

function BaseColors({ colors }: { colors: Array<string> }): ReactElement {
    return <div className="base-colors" style={{ display: "flex" }}>
        {colors.map((color, index) => (
            <BaseColor color={color} key={index} />
        ))}
    </div>
}

export default BaseColors
