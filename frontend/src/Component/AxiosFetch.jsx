import { useState, useEffect } from "react";
import gift from "../Media/Dinosaurs (Reptiles).webp";
import axios from 'axios'

function AxiosFetch() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setLoading(false)
        setPosts(response.data)
        }
        fetchData()
    }, []);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    if (loading) return <p>Loading...</p>;

    return (
        <ul>
            <img src={gift} className="gift" alt={`${gift} 1`} />
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default AxiosFetch;