import Service from "./components/Service";

function App() {
  return (
    <div className="bg-slate-500 h-screen flex justify-center">
      <div className="grid grid-cols-2 gap-3 p-2 w-screen">
        <div className="bg-slate-300 rounded-md p-2">
          <div className="text-center text-2xl">Home Server</div>
          <div className="flex flex-col bg-cyan-700 p-3 rounded-md gap-4">
            <Service link="https://deluge.fanarohome.live/">Deluge</Service>
          </div>
        </div>
        <div className="bg-slate-300 rounded-md p-2">hello</div>
      </div>
    </div>
  );
}

export default App;
