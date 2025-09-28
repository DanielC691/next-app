// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white p-8">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl mb-10">
        Daniel Cisowski
      </h1>

      {/* Info boxes */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md w-60 h-32 rounded-2xl border border-white/20 shadow-md hover:shadow-lg transition">
          <p className="text-xl text-gray-200">Numer indeksu</p>
          <p className="text-3xl font-bold text-yellow-400 mt-2">125692</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md w-60 h-32 rounded-2xl border border-white/20 shadow-md hover:shadow-lg transition">
          <p className="text-xl text-gray-200">Grupa</p>
          <p className="text-3xl font-bold text-green-400 mt-2">4</p>
        </div>
      </div>
    </div>
  )
}
