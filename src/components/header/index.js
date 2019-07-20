import React,{Component} from 'react'

const menuitem = ['RANDOM','EARTH','COLLECTION']

class HeaderComponent extends Component{
    render(){
        return(
            <div className="header">
                <div className="logo"></div>
                <div className="menu">
                    {
                        menuitem.map((data,index)=>(
                            <div className="item" key={index}>{data}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default HeaderComponent;