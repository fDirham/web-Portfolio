import "./style.css";
import { CDN_ROOT_URL } from "../../constants/globalConstants";
import { APP_LIST } from "../../constants/appList";

export function Home() {
  const renderProjects = () => {
    return APP_LIST.map((app) => {
      return (
        <div class="project-block">
          <div class="project-block__img-container">
            <img src={app.iconUrl} alt="" />
          </div>
          <div class="project-block__name-container">
            <h2>{app.name}</h2>
            <p>{app.shortDescription}</p>
          </div>
          <p class="project-block__year">{app.year}</p>
        </div>
      );
    });
  };

  return (
    <div class="home">
      <div class="header"></div>
      <div class="project-list">{renderProjects()}</div>
      <div class="hero">
        <div class="hero__image-container">
          <img src={CDN_ROOT_URL + "shared/circle_headshot.png"} alt="" />
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
            <a href="">About</a>
            <a href="">Email</a>
            <a href="">LinkedIn</a>
            <a href="">Resume</a>
          </div>
        </div>
      </div>
      <div class="updated-at"></div>
    </div>
  );
}
