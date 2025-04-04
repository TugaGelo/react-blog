import { useState } from 'react';

const Home = () => {
    // let name = 'mario';

    const [name, setName] = useState('mario')
    const [age, setAge] = useState('25')

    const handleClick = () => {
        // name = 'luigi';
        // console.log(name);
        setName('luigi');
        setAge('23');
    }

    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name);
    // }

    return ( 
        <div className="Home">
            <h2>Home Page</h2>
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={() => {handleClickAgain('stephanie')}}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;