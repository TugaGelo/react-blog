import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    

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
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {/* <h2>Home Page</h2>
 
            <p>{name} is { age } years old</p>
 
            <button onClick={handleClick}>Click Me</button>
 
            <button onClick={() => {handleClickAgain('stephanie')}}>Click Me Again</button> */}

            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}

            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title="Mario's Blogs" handleDelete={handleDelete}/> */}
            
            {/* <button onClick={() => setName('luigi')}>Change Name</button>
            <p>{ name }</p> */}

        </div>
     );
}
 
export default Home;