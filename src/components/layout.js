import React,{Component} from 'react'
import HeaderComponent from './header'

const LayoutComponent = (props)=>{
    return(
        <>
            <HeaderComponent />
            <main>
            {props.children}
            </main>
        </>
    )
}
export default LayoutComponent