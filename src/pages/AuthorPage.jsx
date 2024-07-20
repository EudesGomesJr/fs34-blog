
import { useParams } from "react-router-dom";
import Layout from '../components/Layout';
import posts from '../api/posts.js';
import users from '../api/users.js';

export default function AuthorPage() {
  
  let params = useParams();

  let user = users.find(function(arg) {
    return arg.username === params.username;
  })

  return (
    <Layout>
        <h1>{user.username}</h1>
    </Layout>
  );
}