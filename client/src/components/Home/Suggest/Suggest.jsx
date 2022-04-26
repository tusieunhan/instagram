import React from 'react'
import UserSuggest from './UserSuggest'

const Suggest = () => {
  return (
    <div className="home-suggest">
          <div className="home-suggest-user flex-between">
          <div className="home-suggest-user-info flex gap-20 ">
            <img src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/267784333_672733617221809_4327061612588247178_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=rvPp9sV-2ykAX-QROQp&_nc_ht=scontent.fsgn16-1.fna&oh=00_AT9uuFZQ5fMKmGzgK7z4-wRPm2EA8xzVy8NJ8zmYyZ5Yrg&oe=626C345F" alt="" />
           <div className="home-suggest-user-name">
              <p>vantusieunhan</p>
              <p>Lê Văn Tú</p>
           </div>
          </div>
          <div className="home-suggest-user-switch">
            <p className='colorlink '>Switch</p>
          </div>
          </div>
          <div className="home-suggest-title flex-between">
            <p>Suggests for you</p>
            <p>See All</p>
          </div>
          <div className="home-suggest-list">
             <UserSuggest/>
             <UserSuggest/>
             <UserSuggest/>
             <UserSuggest/>
             <UserSuggest/>
          </div>
      </div>
  )
}

export default Suggest