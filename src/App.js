import Service from "./components/Service";
import { MdCloudDownload } from "react-icons/md";
import { SiNextcloud } from "react-icons/si";
import { ReactComponent as PrinterIcon } from "./assets/3d-printer.svg";

function App() {
  return (
    <div className="bg-slate-500 h-screen flex justify-center">
      <div className="grid grid-cols-2 gap-3 p-2 w-screen">
        <div className="bg-slate-300 rounded-md p-2">
          <div className="text-center text-2xl">Home Server</div>
          <div className="flex flex-row flex-wrap gap-4 w-auto pt-3">
            <Service link="https://deluge.fanarohome.live/">
              <MdCloudDownload /> Deluge
            </Service>
            <Service link="https://next.fanarohome.live/">
              <SiNextcloud /> Nextcloud
            </Service>
            <Service link="http://mainsail.local">
              <PrinterIcon width="1rem" className="invert" /> Mainsail
            </Service>
            <Service link="https://deluge.fanarohome.live/">
              <MdCloudDownload /> Deluge
            </Service>
            <Service link="https://deluge.fanarohome.live/">
              <MdCloudDownload /> Deluge
            </Service>
          </div>
        </div>
        <div className="bg-slate-300 rounded-md p-2">hello</div>
      </div>
    </div>
  );
}

export default App;
