import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState)
  // const [state, setState] = useState(() => {
  //   const storageValue = localStorage.getItem(key)
  //   if (storageValue) {
  //     return storageValue
  //   } else {
  //     return initialState
  //   }
  // })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

// export const isBrowser = (): boolean => {
//   return typeof window !== 'undefined'
// }

// export const nextLocalStorage = (): Storage | void => {
//   if (isBrowser()) {
//     return window.localStorage
//   }
// }

export default usePersistedState
