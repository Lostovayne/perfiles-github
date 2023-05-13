import { Usuario } from '@/interfaces/UserInterface'
import { useEffect, useState } from 'react'

interface PropsUser {
  userName: string
}

export const useUser = ({
  userName
}: PropsUser): Usuario | Array<Usuario> | null => {
  const [user, setUser] = useState<Usuario | null>(null)
  const [recentsearches, setRecentSearches] = useState<Array<Usuario> | []>([])

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        setUser(data)
        setRecentSearches(prevRecentSearches => [...prevRecentSearches, data])
      })
      .catch(error => console.log(error))
  }, [userName])
  console.log(recentsearches)
  return [user, recentsearches]
}
