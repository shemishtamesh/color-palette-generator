import { ReactElement } from "react"

function BaseColor({ color }: { color: string }): ReactElement {
    const size = "50px";

    return <div className="base-color" style={{
        backgroundColor: color,
        width: size,
        height: size
    }} />
}

export default BaseColor
