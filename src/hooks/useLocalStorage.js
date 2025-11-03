import { useState } from 'react'


export default function useLocalStorage(key, initialValue) {
const [state, setState] = useState(() => {
try {
const item = window.localStorage.getItem(key)
return item ? JSON.parse(item) : initialValue
} catch (err) {
console.error('useLocalStorage read error', err)
return initialValue
}
})


const setValue = (val) => {
try {
const valueToStore = typeof val === 'function' ? val(state) : val
setState(valueToStore)
window.localStorage.setItem(key, JSON.stringify(valueToStore))
} catch (err) {
console.error('useLocalStorage write error', err)
}
}


return [state, setValue]
}