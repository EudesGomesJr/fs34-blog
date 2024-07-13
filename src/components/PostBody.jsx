
import { Link } from "react-router-dom";

export default function PostBody() {
	return (
		<div className="flex gap-4 ml-3">
			<div className="w-full">
				<h2 className="font-bold mb-2 text-2xl">
					<Link to="post/jossara/aprenda-centralizar-div" className="hover:underline">Aprenda a centralizar uma div</Link>
				</h2>
				<p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore iusto ab itaque corporis pariatur sapiente omnis. corporis pariatur sapiente omnis</p>
			</div>
			<div className="w-[250px] h-[100px]">
				<img src="/public/profile.avif" className="rounded w-full h-full object-cover object-center" />
			</div>
		</div>
	);
}