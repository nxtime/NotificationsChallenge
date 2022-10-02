import Notifications from "./components/Organisms/Notifications"

function App() {
    return (
        <div className="flex justify-center items-center md:min-h-screen bg-blue-50">
            <div className="bg-white md:mx-auto md:max-w-[40rem] md:shadow-2xl md:shadow-blue-100/75 md:rounded-2xl">
                <Notifications />
            </div>
        </div>
    )
}

export default App
