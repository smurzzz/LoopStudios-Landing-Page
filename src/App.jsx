import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Main from "./components/Main"

const App = () => {
  return(
    <>
      <section className="container relative">
        <Hero/>
        <Main/>
        <Footer/>
      </section>
    </>
  )
}

export default App