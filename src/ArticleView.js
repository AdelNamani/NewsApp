import React from 'react'
import ArticleCard from './ArticleCard'
import { Route, Link } from 'react-router-dom'




class ArticleView extends React.Component{

    render (){
        return (
            <div>
                <div>{this.props.location.state.article.content} </div>
                
            </div>
        )
    }



}

export default ArticleView 