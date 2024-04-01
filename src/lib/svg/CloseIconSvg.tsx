import React from 'react'
interface ISvgProps extends React.ComponentPropsWithoutRef<'svg'> {
    filled?: boolean;
}
const CloseIconSvg = (props: ISvgProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M19.7081 18.2931C19.801 18.386 19.8747 18.4963 19.9249 18.6177C19.9752 18.7391 20.0011 18.8692 20.0011 19.0006C20.0011 19.132 19.9752 19.2621 19.9249 19.3835C19.8747 19.5048 19.801 19.6151 19.7081 19.7081C19.6151 19.801 19.5048 19.8747 19.3835 19.9249C19.2621 19.9752 19.132 20.0011 19.0006 20.0011C18.8692 20.0011 18.7391 19.9752 18.6177 19.9249C18.4963 19.8747 18.386 19.801 18.2931 19.7081L10.0006 11.4143L1.70806 19.7081C1.52042 19.8957 1.26592 20.0011 1.00056 20.0011C0.735192 20.0011 0.480697 19.8957 0.293056 19.7081C0.105415 19.5204 5.23096e-09 19.2659 0 19.0006C-5.23096e-09 18.7352 0.105415 18.4807 0.293056 18.2931L8.58681 10.0006L0.293056 1.70806C0.105415 1.52042 0 1.26592 0 1.00056C0 0.735192 0.105415 0.480697 0.293056 0.293056C0.480697 0.105415 0.735192 0 1.00056 0C1.26592 0 1.52042 0.105415 1.70806 0.293056L10.0006 8.58681L18.2931 0.293056C18.4807 0.105415 18.7352 -5.23096e-09 19.0006 0C19.2659 5.23096e-09 19.5204 0.105415 19.7081 0.293056C19.8957 0.480697 20.0011 0.735192 20.0011 1.00056C20.0011 1.26592 19.8957 1.52042 19.7081 1.70806L11.4143 10.0006L19.7081 18.2931Z" fill="white" />
        </svg>
    )
}

export default CloseIconSvg