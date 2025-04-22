import "./style.css";
import { URL_HEADSHOT } from "../../constants/globalConstants";

export default function About() {
  return (
    <div class="about-container">
      <div class="hero__image-container">
        <img src={URL_HEADSHOT} alt="" />
      </div>
      <div class="hero__text">
        <h1>About</h1>
        <div class="hero__links">
          <a href="">About</a>
          <a href="">Email</a>
          <a href="">LinkedIn</a>
          <a href="">Resume</a>
        </div>
      </div>
    </div>
  );
}
