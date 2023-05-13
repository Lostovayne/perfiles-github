import { useUser } from '@/hooks/useUser'
import Image from 'next/image'
import { useState } from 'react'
import { RiHeart3Line, RiHeart3Fill, RiUserHeartLine } from 'react-icons/ri'
import ErrorUsuario from './ErrorUsuario'

export interface PerfilUsuarioProps {
  userName: string
}

const PerfilUsuario: React.FC<PerfilUsuarioProps> = ({ userName }) => {
  const [favorite, setFavorite] = useState(false)
  const { user, error } = useUser({ userName })

  return (
    <>
      {!error && (
        <div className='flex gap-3 mt-5 bg-[#FBFCFF] w-full md:w-96  items-start px-5 py-8 rounded-md border border-[#e3e3e6] cursor-pointer  hover:shadow-lg transition-all'>
          <Image
            src={
              user?.avatar_url
                ? user?.avatar_url
                : 'https://i.pinimg.com/originals/9e/2f/3c/9e2f3c8282f7e7eabf0612872880cc4d.png'
            }
            alt={`imagen perfil ${user?.login}`}
            width={100}
            height={100}
            className='w-16 h-16 rounded-full object-cover transition-all'
          />
          <div className='space-y-1.5 w-full'>
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
            <div className='flex flex-col md:flex-row items-start md:items-center  md:justify-left gap-1   mt-2  text-gray-500 text-sm'>
              <RiUserHeartLine className='text-lg' />
              <span>{user?.followers} Seguidores</span>
              <span>{user?.following} Siguiendo</span>
            </div>
          </div>
        </div>
      )}

      {error && <ErrorUsuario />}
    </>
  )
}
export default PerfilUsuario
