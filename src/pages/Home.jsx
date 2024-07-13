import PostHeader from './../components/PostHeader';
import PostBody from './../components/PostBody';
import Layout from './../components/Layout';
import Post from '../components/Post';
import posts from '../api/posts.js';

function App() {

    return (
        <>
        <Layout showSideBar>
                {posts.map(function(post){
                    return (
                        <Post>
                            <PostHeader authorName={post.author.username} 
                                        authorProfile={post.author.profile_path} 
                                        postDate={post.date} 
                                        authorUsername={post.author.username}/>
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
