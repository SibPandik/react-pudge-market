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
    "imageUrl": "https://www.meme-arsenal.com/memes/c1394931b88653f3671b41fa9583d644.jpg",
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