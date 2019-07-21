import React,{Component} from 'react'
import LayoutComponent from './../components/layout';
import SearchComponent from './../components/search'

const data=[
    {label : "Continents",image: "/static/images/gallery/pic1.jpg"},
    {label : "History",image: "/static/images/gallery/pic2.jpg"},
    {label : "Landscapes",image: "/static/images/gallery/pic3.jpg"},
    {label : "Birds",image: "/static/images/gallery/pic4.jpg"},
    {label : "City",image: "/static/images/gallery/pic5.jpg"},
    {label : "Iconic Buildings",image: "/static/images/gallery/pic6.jpg"},
    {label : "Abstract",image: "/static/images/gallery/pic7.jpg"},
    {label : "Animals",image: "/static/images/gallery/pic8.jpg"},
    {label : "Electronics",image: "/static/images/gallery/pic9.jpg"},
    {label : "Videos",image: "/static/images/gallery/pic10.jpg"},
    {label : "Biology",image: "/static/images/gallery/pic11.jpg"},
    {label : "Insects",image: "/static/images/gallery/pic13.jpg"}


]
const contextpath="/testbuild";
class IndexPage extends Component{


    render(){
        return(
            <LayoutComponent>
                <div className="indexpage">
                    <SearchComponent />
                    <div className="content">
                    {
                        data.map((element,index)=>(
                            <div key={index} className="img" 
                            style={{
                                backgroundImage: "url("+contextpath+element.image+")"
                            }}>
                            {/* <img src={element.image}></img> */}
                            
                            </div>
                        ))
                    }
                    </div>
                </div>
            </LayoutComponent>
        )
    }
}

export default IndexPage;