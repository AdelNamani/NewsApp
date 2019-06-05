import React from 'react'
import ArticleCard from './ArticleCard'
import { Route, Link } from 'react-router-dom'




class ArticleView extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            article : null
        }
    }

    render (){
        return (
            <div>
                <div>{this.props.location.state.article.description} </div>
                
            </div>
        )
    }



}

export default ArticleView 