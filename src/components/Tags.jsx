import TagItem from "./TagItem";

export default function Tags () {
  return (
    <div className="w-[350px]">
      <h3 className="text-xl pb-3">Tags</h3>
      <ul className="flex gap-2 flex-wrap">
        <TagItem name='JavaScript' />
        <TagItem name='javascript' />        
        <TagItem name='JS' />
        <TagItem name='Programação' />
        <TagItem name='Node.js' />
        <TagItem name='HTML' />
      </ul>
    </div>
  )
}