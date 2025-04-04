import { useEffect, useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
const [blogs, setBlogs] = useState([
    {
        id: 1,
        title: 'Getting Started with React',
        body: 'React is a JavaScript library for building user interfaces...',
        author: 'Mario'
    },
    {
        id: 2,
        title: 'Understanding useState Hook',
        body: 'The useState hook lets you add state to functional components...',
        author: 'Luigi'
    },
    {
        id: 3,
        title: 'The Power of Components',
        body: 'Components let you split the UI into independent, reusable pieces...',
        author: 'Peach'
    },
    {
        id: 4,
        title: 'React Router Basics',
        body: 'React Router enables navigation between views in a React app...',
        author: 'Mario'
    }
]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log({name});
    }, [name]);

    // // let name = 'mario';

    // const [name, setName] = useState('mario')
    // const [age, setAge] = useState('25')

    // const handleClick = () => {
    //     // name = 'luigi';
    //     // console.log(name);
    //     setName('luigi');
    //     setAge('23');
    // }

    // const handleClickAgain = (name) => {
    //     console.log('hello ' + name);
    // }

    return ( 
        <div className="Home">
            {/* <h2>Home Page</h2>
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {handleClickAgain('stephanie')}}>Click Me Again</button> */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title="Mario's Blogs" handleDelete={handleDelete}/>
            
            <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{ name }</p>

        </div>
     );
}
 
export default Home;