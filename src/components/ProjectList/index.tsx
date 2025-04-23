import { APP_LIST } from "../../constants/appList";
import { URL_LOCK_ICON } from "../../constants/globalConstants";

export default function index() {
  const renderProjects = () => {
    return APP_LIST.map((app) => {
      const projectBlockClassList = ["project-block", "noselect"];
      // if (selectedApp === app) {
      //   projectBlockClassList.push("project-block--selected");
      // }
      const projectBlockClass = projectBlockClassList.join(" ");

      return (
        <div class="project-block__wrapper">
          <div class={projectBlockClass}>
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
  return <div>index</div>;
}
