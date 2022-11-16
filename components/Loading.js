export function Loading() {
  return (
      <div role="status">
          <div className="inline-block animate-spin font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">⁂</div>
          <span className="sr-only">Loading...</span>
      </div>
  )
}

export default Loading