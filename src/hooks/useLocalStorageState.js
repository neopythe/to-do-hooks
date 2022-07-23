import { useEffect, useState } from 'react'

export default (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value
    try {
      value = JSON.parse(localStorage.getItem(key)) ?? defaultValue
    } catch (error) {
      value = defaultValue
    }
    return value
  })
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])
  return [state, setState]
}
