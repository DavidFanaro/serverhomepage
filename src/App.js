import Service from "./components/Service";
import { MdCloudDownload } from "react-icons/md";
import {
  SiNextcloud,
  SiJellyfin,
  SiHomeassistant,
  SiGithub,
  SiStackoverflow,
  SiReddit,
  SiTwitter,
  SiAmazon,
} from "react-icons/si";
import { AiOutlineStock } from "react-icons/ai";
import {
  FaYoutube,
  FaOctopusDeploy,
  FaBitcoin,
  FaTwitch,
} from "react-icons/fa";
import { ReactComponent as PrinterIcon } from "./assets/3d-printer.svg";
import { Searchbar } from "./components/Searchbar";
import { Weather } from "./components/Weather";

function App() {
  return (
    <div className="relative h-screen">
      <div className="bg-hero-pattern bg-no-repeat bg-st bg-cover h-screen "></div>
      <div className="hidden md:block absolute z-10 top-0">
        <div className="flex items-center justify-center w-screen">
          <Weather />
        </div>
      </div>
      <div className="absolute h-screen top-0 backdrop-blur-md">
        <div className=" flex flex-col h-screen justify-center items-center bg-transparent  ">
          <Searchbar />
          <div className="flex flex-row items-center justify-center ">
            <div className="grid grid-rows-2 md:grid-cols-2 gap-3 lg:grid-cols-2 p-2 w-screen h-fit">
              <div className="bg-slate-300 rounded-md p-2 bg-opacity-60 shadow-md">
                <div className="text-center text-2xl">Home Server</div>
                <div className="flex flex-row flex-wrap gap-4 w-auto pt-3 justify-center">
                  <Service link="https://deluge.fanarohome.live/">
                    <MdCloudDownload /> Deluge
                  </Service>
                  <Service link="https://next.fanarohome.live/">
                    <SiNextcloud /> Nextcloud
                  </Service>
                  <Service link="http://mainsail.local">
                    <PrinterIcon width="1rem" className="invert" /> Mainsail
                    (Local only)
                  </Service>
                  <Service link="https://ydl.fanarohome.live/">
                    <FaYoutube /> YoutubeDL
                  </Service>
                  <Service link="https://jelly.fanarohome.live/">
                    <SiJellyfin /> Jellyfin
                  </Service>
                  <Service link="https://tsd.fanarohome.live/">
                    <FaOctopusDeploy /> Obico
                  </Service>
                  <Service link="	https://hass.fanarohome.live/">
                    <SiHomeassistant /> Home Assistant
                  </Service>
                </div>
              </div>
              <div className="bg-slate-300 rounded-md p-2 bg-opacity-60 shadow-md">
                <div className="text-center text-2xl">Favorite Sites</div>
                <div className="flex flex-row flex-wrap gap-4 w-auto pt-3 justify-center ">
                  <Service link="https://www.youtube.com/">
                    <FaYoutube /> Youtube
                  </Service>
                  <Service link="https://github.com/">
                    <SiGithub /> GitHub
                  </Service>
                  <Service link="https://stackoverflow.com/">
                    <SiStackoverflow /> StackOverflow
                  </Service>
                  <Service link="https://www.reddit.com/">
                    <SiReddit /> Reddit
                  </Service>
                  <Service link="https://twitter.com/">
                    <SiTwitter /> Twitter
                  </Service>
                  <Service link="https://www.amazon.com/">
                    <SiAmazon /> Amazon
                  </Service>
                  <Service link="https://pro.coinbase.com/">
                    <FaBitcoin /> Coinbase
                  </Service>
                  <Service link="https://robinhood.com/us/en/">
                    <AiOutlineStock /> Robinhood
                  </Service>
                  <Service link="https://www.twitch.tv/">
                    <FaTwitch /> Twitch
                  </Service>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
