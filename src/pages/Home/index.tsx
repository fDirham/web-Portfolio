import "./style.css";
import { URL_HEADSHOT } from "../../constants/globalConstants";

export default function Home() {
  return (
    <div class="home-container">
      <div class="hero__image-container">
        <img src={URL_HEADSHOT} alt="" />
      </div>
      <div class="hero__text">
        <h1>
          Fajar Dirham,
          <br />
          builds <span class="gradient-emphasis-text">fun</span> software to
          make you
          <br />
          <span class="gradient-emphasis-text">smarter</span> & more{" "}
          <span class="gradient-emphasis-text">productive</span>
        </h1>
        <div class="hero__links">
          <a href="/about">About</a>
          <a href="">Email</a>
          <a href="">LinkedIn</a>
          <a href="">Resume</a>
        </div>
      </div>
    </div>
  );
}
