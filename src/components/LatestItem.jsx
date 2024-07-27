export default function LatestItem({ text, href = '#'}) {
    return (
        <li className="p-2">
            <a className="text-gray-700 hover:text-black 
            dark:hover:text-gray-400 dark:bg-slate-950 dark:text-white" 
            href={href}>{text}</a>
        </li>
    )
} 