// This file is kept for compatibility but the app now uses Next.js
// Please run: npm run dev
// The Next.js app is located in the /app directory

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-2xl px-4">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full mx-auto mb-4" style={{ backgroundColor: '#0195FF' }}>
            <svg className="w-full h-full text-white p-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <h1 className="text-4xl mb-4" style={{ color: '#0195FF' }}>Cue - Next.js App</h1>
        <p className="text-xl text-gray-600 mb-6">
          This application has been converted to Next.js with TypeScript
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
          <h2 className="text-lg mb-3">To run the application:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Install dependencies: <code className="bg-white px-2 py-1 rounded">npm install</code></li>
            <li>Start the development server: <code className="bg-white px-2 py-1 rounded">npm run dev</code></li>
            <li>Open <code className="bg-white px-2 py-1 rounded">http://localhost:3000</code> in your browser</li>
          </ol>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p className="mb-2">The Next.js application structure:</p>
          <ul className="text-left max-w-md mx-auto space-y-1">
            <li>📁 <code>/app</code> - Next.js pages and layouts</li>
            <li>📁 <code>/components</code> - Reusable React components</li>
            <li>📁 <code>/types</code> - TypeScript type definitions</li>
            <li>📁 <code>/styles</code> - Global CSS styles</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
