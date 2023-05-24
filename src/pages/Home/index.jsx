import React from 'react'
import Header from '../../components/Header/index.jsx'
import Content from '../../components/Content/index.jsx'
import CommentBlock from '../../components/CommentBlock/index.jsx'

const comment_data = [
  {
    "id": 0,
    "imageUrl": "https://dota.gallery/images/thumbnails/015334s.jpg",
    "name": "Rubick",
    "date": "February 28, 2023",
    "text": "Я лишь твоя копия",
  },
  {
    "id": 1,
    "imageUrl": "https://i.ytimg.com/vi/G0yfNuQtUhY/maxresdefault.jpg",
    "name": "Shadow Fiend",
    "date": "February 28, 2023",
    "text": "Вот это мужчина!",
  },
]

const Home = () => {
  return (
    <div>
        <Header/>
        <Content/>
        <CommentBlock comment_data={comment_data}/>
    </div>
  )
}

export default Home