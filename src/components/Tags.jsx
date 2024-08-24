import TagItem from "./TagItem";
import { usePost } from "../context/PostContext";
import { useEffect, useState } from "react";
//import tags from "../api/tags";

export default function Tags () {

  let [tagslist, setTagsList] = useState([]);

    useEffect(()=> {
      fetch('http://localhost:3000/tags')
      .then(response => response.json())
      .then(tags=> {
        setTagsList(tags);  
    });
  },[]);
  
  // let {tags} = usePost();
  let postData = usePost() ?? false;
  //let tagslist = tags;

  if(postData) {
    tagslist = postData.tags
  }

  return (
    tagslist.length > 0 && (
      <div className="w-[350px]">
        <h3 className="text-xl pb-3">Tags</h3>
        <ul className="flex gap-2 flex-wrap">
          {tagslist.map(tag => <TagItem name={tag.name} />)}
        </ul>
      </div>
    )
  )
}