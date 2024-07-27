export default function TagItem({ name, href = '#'}) {
    return (
        <li className="bg-gray-200 hover:bg-gray-300 rounded">
        <a className="py-2 px-4 inline-block dark:hover:bg-slate-600 dark:bg-slate-700" 
        href={href}>{name}</a>
      </li>
    )
} 