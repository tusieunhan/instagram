import React from 'react'
import '../../style/home.scss'
import Posts from './Posts/Posts'
import Suggest from './Suggest/Suggest'
import UserSuggest from './Suggest/UserSuggest'
const Home = () => {
  return (
    <div className='home flex-center'>
        <Posts />
        <Suggest />
    </div>
  )
}

export default Home