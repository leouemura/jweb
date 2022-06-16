import { useEffect } from "react"

export default function Home(){
  useEffect(()=> {
    fetch('/api/users').then(response => response.json()).then(data => console.log('data :>> ', data))
  },[])
  return (
    <h1>Hello World</h1>
  )
}