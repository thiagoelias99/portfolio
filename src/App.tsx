import Aside from './components/aside/aside'
import Footer from './components/footer/footer'
import Header from './components/header/header'

function App() {
  return (
    <div className='w-screen h-screen antialiased [&::-webkit-scrollbar]:hidden'>
      <Header />
      <div className='py-16 w-full h-full flex flex-row justify-start items-start gap-1'>
        <Aside />
        <main
          className='w-full h-full bg-blue-400 text-gray-800 flex items-center justify-center'
        >
          Main
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
