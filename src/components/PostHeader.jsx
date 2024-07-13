export default function PostHeader() {
    return (
        <div className="flex items-center gap-2">
            <img src="/public/profile.avif" 
                className="rounded-full w-10 h-10 object-cover object-top ml-3" />
            <a href="#" className="underline">Fulano de tal</a>
            <span>-</span>
            <span>20/10/2024</span>
        </div>
    );
}