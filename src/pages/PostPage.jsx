
import { useParams } from "react-router-dom"

export default function PostPage() {
  let params = useParams();
  console.log(params);

  return (
    <h1>Conteudo do post centralizar div</h1>
  )
}