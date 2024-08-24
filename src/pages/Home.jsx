import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';
//import posts from '../api/posts.js';
import users from '../api/users.js';
import { useEffect, useState } from 'react';


function App() {

    let [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3000/posts')
        .then(response=>response.json())
        .then(posts=>{
            setPosts(posts);
        })
    },[])
    
    return (
        <>
        <Layout showSideBar>
                {posts.map(function(post){
                    // Pega o usuário no users.js
                    let user = users.find(function(arg) {
                        return arg.id == post.user_id;
                    })

                    return (
                        <Post>
                            <PostHeader authorName={user.name} 
                                        authorProfile={user.profile_path} 
                                        postDate={post.date} 
                                        authorUsername={user.username}/>
                            <PostBody content={post.content} 
                                        title={post.title}
                                        slug={post.slug} 
                                        image={post.image_path}/> 
                        </Post>
                    );
                })}
        </Layout>
        </>
    );
}

export default App;
