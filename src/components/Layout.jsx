import Tags from './../components/Tags';
import Latest from './../components/Latest';
import Header from './../components/Header';
import FormBase from './../components/FormBase';
import { Link } from "react-router-dom";

export default function Layout ({children, showSideBar}) {
  return (
    <>
      <Header className="flex items-center p-3 shadow-md">
          <h1 className="ml-5 font-bold text-2xl">
            <Link to="/">FS34Blog</Link>
          </h1>
          <FormBase className="ml-5">
              <input type="text" className="border px-2 py-1 rounded" />
              <button className="border rounded border-black px-2 py-1 ml-2">Pesquisar</button>
          </FormBase>
      </Header>

      <div className='flex px-20 py-10 gap-20'>
          <div>
            {children}
          </div>

          {showSideBar && (
            <div>
              <div>
                <Tags />
                <Latest />
              </div>
            </div>
          )}

    </div>
    </>
  )
}