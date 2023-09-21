import './App.css'
import { Experience } from './components/Experience/Experience'
import { FloatingSideBar } from './components/FloatingSideBar/FloatingSideBar'
import { Header } from './components/Header/Header'
import { Projects } from './components/Projects/Projects'
export const App: React.FC = () => {

  return (
    <>
      <Header />
      <FloatingSideBar />
      <main>
        <Experience />
        <Projects />
      </main>
    </>
  )
}

