import React from 'react';
import axios from 'axios'

import ArticleCard from './ArticleCard'


class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
            articles : [],
            errorMessage : '',
            isLoaded : false
        }
    }

    componentDidMount() {
        
        axios.get('https://newsapi.org/v2/top-headlines?language=en',
        {
            headers : {
                'X-Api-Key' : '355b699f9f5b411899d0b05178827b95'
            }
        })
        .then(res => {
            console.log(res.data)
            if (res.data.status === "ok"){
                
                this.setState({
                    articles : getRandom(res.data.articles,10),
                })
            }
            else{
                
                this.setState({
                    errorMessage : res.message
                })
            }
        })
        .catch(err => {
            
            this.setState({
                errorMessage: 'Something wrong happened , please refresh and try again'
            })
        })
        .finally(()=>{
            this.setState({
                isLoaded: true
            })
        })
    }

    render() {
        const { articles } = this.state

        const articleCards = articles.map((article , i)=>{
            return (
                <li key={i}><ArticleCard article={article} /></li>
            )
        })

        return (
            <div>
                <h1>Some Articles</h1>
                <ul>
                    {articleCards}
                </ul>
            </div>
        )
    }
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len)
    if (n > len)
        return arr
    while (n--) {
        var x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
    }
    return result
}

export default Home;
