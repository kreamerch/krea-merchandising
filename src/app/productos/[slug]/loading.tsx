export default function LoadingProductoDetalle() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-200 rounded-xl w-full aspect-square" />
        <div className="flex flex-col gap-4">
          <div className="h-6 bg-gray-300 rounded w-3/4" />
          <div className="h-5 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-12 bg-gray-300 rounded w-1/2 mt-4" />
        </div>
      </div>
    </div>
  )
}
