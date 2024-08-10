import Tags from './../components/Tags';
import Latest from './../components/Latest';
import Header from './../components/Header';
import FormBase from './../components/FormBase';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaRegMoon } from "react-icons/fa";

export default function Layout ({children, showSideBar}) {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(searchParams.get('query'));

  const {theme, toggleTheme} = useTheme();

  return (
    <>
      <Header className="flex items-center p-3 shadow-md dark:bg-slate-800 dark:text-white dark:border-b">
          <h1 className="ml-5 font-bold text-2xl">
            <Link to="/">FS34Blog</Link>
          </h1>
          <FormBase className="ml-5" sendTo="search">
              <input type="text" 
              onChange={(event) => setQuery(event.target.value)}
              value={query} 
              className="border px-2 py-1 rounded  dark:text-black" 
              name="query" />
              <button className="border rounded border-black px-2 py-1 ml-2 
              dark:border-white">Pesquisar</button>
          </FormBase>

          <button onClick={toggleTheme} className="border rounded border-black px-2 py-1 ml-auto 
          dark:border-white">{theme==='dark' ? <FaSun />:<FaRegMoon /> } </button>
      </Header>

      <div className={'flex px-20 py-10 gap-20 dark:bg-slate-950 dark:text-white'}>
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