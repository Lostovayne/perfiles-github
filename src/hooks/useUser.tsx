import { Usuario } from '@/interfaces/UserInterface'
import { useEffect, useState } from 'react'

interface PropsUser {
  userName: string
}

interface UseUserResult {
  user: Usuario | null
  recentSearches: Array<Usuario>
  error: boolean
}

export const useUser = ({ userName }: PropsUser): UseUserResult => {
  const [user, setUser] = useState<Usuario | null>(null)
  const [recentSearches, setRecentSearches] = useState<Array<Usuario>>([])
  const [error, setError] = useState(true)

  useEffect(() => {
    if (!userName) {
      console.error('Invalid userName provided to useUser hook')
      return
    }

    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        if (data?.message) {
          setError(true)
          return
        }

        setUser(data)
        setRecentSearches(prevRecentSearches => [...prevRecentSearches, data])
      })
      .catch(error => setError(true))
    setError(false)
  }, [userName])

  return {
    user,
    recentSearches,
    error
  }
}
