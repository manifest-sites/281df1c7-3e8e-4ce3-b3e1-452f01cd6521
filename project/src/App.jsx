import Monetization from './components/monetization/Monetization'

function App() {
  return (
    <Monetization>
      <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Hello, Martian</h1>
          <div className="text-2xl text-red-200">🚀</div>
        </div>
      </div>
    </Monetization>
  )
}

export default App