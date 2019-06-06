import React from 'react'

import { Route, Link } from 'react-router-dom'

class ArticleCard extends React.Component{
    render(){
        const articleLink = encodeURI(this.props.article.title.replace(/ /g,'-'))
        return(
            <div>
                {this.props.article.title}
                <Link 
                    to={{
                        pathname : '/article/'+articleLink,
                        state : {
                            article : this.props.article
                        }
                    }}

                > Read </Link>
            </div>
        )
    }
}

export default ArticleCard