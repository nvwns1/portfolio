import React from 'react'

const HorizontalLine = ({ marginTop, marginBottom, id }
    : { marginTop?: number; marginBottom?: number, id?: string, }) => {
    return (
        <div
            id={id ?? 'horizontal-line' + marginTop + marginBottom}
            className="horizontal-border"
            style={{
                marginTop: marginTop ? `${marginTop}px` : '0',
                marginBottom: marginBottom ? `${marginBottom}px` : '0',
            }}
        />
    )
}

export default HorizontalLine