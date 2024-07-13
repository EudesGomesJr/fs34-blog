
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import posts from '../api/posts.js';

export default function AuthorPage() {
  
  let params = useParams();

  let post = posts.find(function(post) {
    return post.author.username === params.username;
  })


  return (
    <Layout>
        <h1>{post.author.username}</h1>
    </Layout>
  );
}