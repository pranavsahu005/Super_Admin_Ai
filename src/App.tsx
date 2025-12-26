import './index.css'
import { SplineSceneBasic } from './components/Demo'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-5xl font-bold text-white mb-2">Admin Dashboard</h1>
                    <p className="text-slate-300">Interactive 3D Component Integration</p>
                </header>

                <SplineSceneBasic />
            </div>
        </div>
    )
}

export default App
