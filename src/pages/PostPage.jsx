
import { UNSAFE_ErrorResponseImpl, useParams } from "react-router-dom";
import Layout from './../components/Layout';
import Post from '../components/Post';
import PostHeader from "../components/PostHeader";
import apiPost from '../api/posts';
import apiUser from '../api/users';
import apiTag from '../api/tags';
import { usePost } from "../context/PostContext";
import { useEffect } from "react";

export default function PostPage() {

  let {setTags} = usePost();

  let params = useParams();

  // Encontra o ID do usuário que fez o post
  let post = apiPost.find(post => {
    return post.slug === params.postSlug
  })
  let userId = post.user_id;

  // Encontra o usuário que tem o ID encontrado acima
  let user = apiUser.find(user => user.id === userId)

  // Pega todas as tags em tags.js que foram relacionadas no campo tag_id do post
  let tags = apiTag.filter(tag => {
    return post?.tag_id?.includes(tag.id)
  })

  // Apresenta as tags encontradas acima. 
  // Precisa usar o useEffect para não entrar num loop infinito.
  useEffect(()=> {
    setTags(tags
      // [{name:'HTML'}]
    );
  },[]);

  return (
    <Layout showSideBar>
      <h1 className="font-semibold text-3xl">{post.title}</h1>
      <Post>
        <PostHeader
          authorName={user.username}
          authorProfile={user.profile_path}
          authorUsername={user.username}
          postDate={post.date}
        />
        <div className="h-[250px] my-4">
          <img src={post.image_path} className="rouded w-full h-full object-cover object-center"></img>
        </div>
        <p>
          {post.content}
        </p>
      </Post>
    </Layout>
  )
}