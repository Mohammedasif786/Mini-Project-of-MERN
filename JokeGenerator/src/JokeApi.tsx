import { Button } from '@mui/material';
import { useEffect, useState } from 'react'

function JokeApi() {
    const [joke,setJoke] = useState(null)
    const clicking = () => {
       fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
       .then((res) => res.json())
       .then((data) => setJoke(data.joke));
    }
    useEffect(() => {
        clicking();
    },[])

  return (
    <>
    <Button onClick={clicking} style={{
        width: 'max',
        margin: "0px auto",
    }} variant='contained'>Change</Button>
       <p className='text-2xl py-2 max-w-fit'>{joke}</p> 
    </>
  )
}

export default JokeApi