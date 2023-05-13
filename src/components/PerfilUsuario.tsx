import { useUser } from '@/hooks/useUser'
import { useState } from 'react'
import { RiHeart3Line, RiHeart3Fill, RiUserHeartLine } from 'react-icons/ri'

export interface PerfilUsuarioProps {
  userName: string
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({ userName }) => {
  const [favorite, setFavorite] = useState(false)
  const { user } = useUser({ userName })

  return (
    <div className='flex gap-3 mt-5 bg-gray-500/5 w-full md:w-96  items-center px-3 py-4 rounded-md border border-gray-200 cursor-pointer  hover:shadow'>
      <img
        src={user?.avatar_url}
        alt={`imagen perfil ${user?.login}`}
        className='w-16 h-16 rounded-full object-cover'
      />
      <div className='space-y-1 w-full'>
        <div className='flex items-center w-full justify-between pr-2'>
          <div className='font-medium'>{user?.login}</div>
          <button
            onClick={() => setFavorite(!favorite)}
            className='flex items-center gap-1'
          >
            {favorite ? (
              <RiHeart3Fill className='text-gray-600 text-xl' />
            ) : (
              <RiHeart3Line className='text-gray-400 text-xl' />
            )}
          </button>
        </div>
        <div className='text-gray-500 text-sm'>{user?.bio}</div>
        <div className='text-gray-500 text-sm'>Pais: {user?.location}</div>
        <div className='flex items-center gap-1 mt-2  text-gray-500 text-sm'>
          <RiUserHeartLine className='text-lg' />
          <span>{user?.followers} Seguidores</span>
          <span>{user?.following} Siguiendo</span>
        </div>
      </div>
    </div>
  )
}
export default PerfilUsuario
