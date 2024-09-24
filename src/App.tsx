import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Recipe TikTok Clone</h1>
      </header>

      <main className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Simulando cards de receitas */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold">Receita 1</h2>
          <p className="mt-2 text-gray-600">Descrição curta da receita.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold">Receita 2</h2>
          <p className="mt-2 text-gray-600">Descrição curta da receita.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold">Receita 3</h2>
          <p className="mt-2 text-gray-600">Descrição curta da receita.</p>
        </div>
      </main>

      <footer className="mt-6 text-center text-gray-600">
        &copy; 2024 Recipe TikTok Clone
      </footer>
    </div>
  )
}

export default App
