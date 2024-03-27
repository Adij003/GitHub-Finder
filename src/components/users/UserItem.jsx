import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({ user: { login, avatar_url } }) {
  return (
    <Link
    to={`/user/${login}`} 
  >
    <div className='card shadow-md compact side bg-base-100 group cursor-pointer transition-transform transform-gpu duration-100 ease-in-out hover:scale-105'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
            <div className='text-base-content text-opacity-40'>
            Visit Profile
            </div>
        </div>
      </div>
    </div>
          </Link>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem