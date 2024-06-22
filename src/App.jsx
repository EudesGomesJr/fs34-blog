
function Header({children}  ) {
  return (
    <header className=' bg-white'>
      <nav className='mx-auto flex items-center p-6 shadow-md'>
        {children}
      </nav>
    </header>
  )
}

function HeaderLink({href, children}) {
  return (
    <a href={href} className='font-semibold leading-6 text-black ml-5'>{children}</a>
  )
}

function App() {
  return (
    <>
      <Header>
        <HeaderLink href="https://company">
            Company
          </HeaderLink>
          <HeaderLink href="https://marketplace"> 
            Marketplace
          </HeaderLink>
          <HeaderLink> Teste </HeaderLink>
      </Header>
    </>

  )
}

export default App
