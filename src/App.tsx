import './App.css'
import UpdateElectron from '@/components/update'
import logoVite from './assets/logo-vite.svg'
import logoElectron from './assets/logo-electron.svg'

console.log(
  '[App.tsx]',
  `Hello world from Electron ${process.versions.electron}!`
)

function App() {
  return (
    <div className='App'>
      <div className='logo-box'>
        <a
          href='https://github.com/mohamedsamara/electron-publish-artifacts'
          target='_blank'
        >
          <img
            src={logoVite}
            className='logo vite'
            alt='Electron + Vite logo'
          />
          <img
            src={logoElectron}
            className='logo electron'
            alt='Electron + Vite logo'
          />
        </a>
      </div>
      <h1>Electron Publish Artifacts</h1>
      <UpdateElectron />
    </div>
  )
}

export default App
