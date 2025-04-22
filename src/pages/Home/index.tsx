import "./style.css";
import {
  CDN_ROOT_URL,
  URL_HEADSHOT,
  URL_LOCK_ICON,
} from "../../constants/globalConstants";
import { APP_LIST } from "../../constants/appList";
import { useState } from "preact/hooks";

export function Home() {
  const [appList, setAppList] = useState(APP_LIST);
  const [selectedApp, setSelectedApp] = useState(null);

  const renderProjects = () => {
    return APP_LIST.map((app) => {
      const projectBlockClassList = ["project-block", "noselect"];
      if (selectedApp === app) {
        projectBlockClassList.push("project-block--selected");
      }
      const projectBlockClass = projectBlockClassList.join(" ");

      return (
        <div class="project-block__wrapper">
          <div
            class={projectBlockClass}
            onClick={() => {
              if (selectedApp == app) {
                setSelectedApp(null);
              } else {
                setSelectedApp(app);
              }
            }}
          >
            <div class="project-block__img-container">
              <img src={app.iconUrl} alt="" />
            </div>
            <div class="project-block__name-container">
              <h2>{app.name}</h2>
              <p>{app.shortDescription}</p>
            </div>
            <p class="project-block__year">{app.year}</p>
          </div>
          <img src={URL_LOCK_ICON} alt="" class="project-block__lock-icon" />
        </div>
      );
    });
  };

  return (
    <div class="home">
      <div class="header"></div>
      <div class="project-list">
        <p class="project-list__info">Click to lock</p>
        {renderProjects()}
      </div>
      <div class="hero">
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
