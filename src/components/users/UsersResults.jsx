import { useContext } from 'react'
import Spinner from '../../pages/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'


function UsersResults() {

  const {users, loading } = useContext(GithubContext)


    if(!loading){
      return (
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          {users.map((user)=>(
            <h3><UserItem key={user.id} user={user}/> </h3>
          ))
          }
        </div> 
      )
    }
    else{
      return <Spinner/>
    }
 
}

export default UsersResults