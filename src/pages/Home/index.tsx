import "./style.css";
import { URL_HEADSHOT } from "../../constants/globalConstants";

export default function Home() {
  return (
    <div class="home">
      <div class="hero__image-container">
        <img src={URL_HEADSHOT} alt="" />
      </div>
    </div>
  );
}
