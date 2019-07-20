import React,{Component} from 'react'


class SearchComponent extends Component{

    render(){
        return(
            <div className="searchcomponent">
                <div className="text">
                    <input type="text" placeholder="Free Collections" />
                </div>
                <div className="button">
                    <div className="search">Search</div>
                </div>
            </div>
        )
    }
}

export default SearchComponent;