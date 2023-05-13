import { Usuario } from '@/interfaces/UserInterface'
import { useEffect, useState } from 'react'

interface PropsUser {
  userName: string
}

interface UseUserResult {
  user: Usuario | null
  recentSearches: Array<Usuario>
}

export const useUser = ({ userName }: PropsUser): UseUserResult => {
  const [user, setUser] = useState<Usuario | null>(null)
  const [recentSearches, setRecentSearches] = useState<Array<Usuario>>([])

  useEffect(() => {
    if (!userName) {
      console.error('Invalid userName provided to useUser hook')
      return
    }

    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        if (data?.message) {
          console.error(
            `Error fetching user data for ${userName}: ${data.message}`
          )
          return
        }

        setUser(data)
        setRecentSearches(prevRecentSearches => [...prevRecentSearches, data])
      })
      .catch(error =>
        console.error(
          `Error fetching user data for ${userName}: ${error.message}`
        )
      )
  }, [userName])

  console.log(recentSearches)

  return {
    user,
    recentSearches
  }
}
