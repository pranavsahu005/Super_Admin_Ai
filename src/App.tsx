import './index.css'
import { SplineSceneBasic } from './components/Demo'
import { GlobalSpotlight } from './components/ui/global-spotlight'

function App() {
    return (
        <div className="min-h-screen bg-slate-950 p-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] pointer-events-none" />

            {/* Dynamic Cursor Light */}
            <GlobalSpotlight />

            <div className="max-w-7xl mx-auto relative z-10">
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
