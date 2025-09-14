import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum', author: 'josh', id: 1},
    {title: 'Welcome newbie', body: 'lorem ipsum', author: 'yoshi', id: 2},
    {title: 'Ninja net prof', body: 'lorem ipsum', author: 'mario', id: 3},
  ]);

  const [name, setName] = useState('mario');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(name)
  }, [name]);

  return ( 
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button onClick={() =>setName('Josh')}>change name</button>
      <p>{name}</p>
    </div>
   );
}
 
export default Home;

