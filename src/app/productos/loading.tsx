export default function LoadingProductos() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h2 className="text-xl font-medium mb-6 animate-pulse">Cargando productos...</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse border rounded-xl p-4 shadow-sm flex flex-col gap-4"
          >
            <div className="bg-gray-200 h-48 w-full rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-8 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
