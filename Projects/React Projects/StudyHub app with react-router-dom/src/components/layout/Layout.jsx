import Header from "./Header"
function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex">
        {children}
      </main>
    </div>
  )
}
export default Layout