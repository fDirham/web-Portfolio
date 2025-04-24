import { APP_LIST } from "../../constants/appList";
import CloseIcon from "../CloseIcon";
import "./style.css";

type ProjectListMenuProps = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export default function ProjectListMenu({
  show,
  setShow,
}: ProjectListMenuProps) {
  const classNamePseudoSpacer = () => {
    const base = ["pl-menu-pseudo-spacer"];
    if (!show) {
      base.push("pl-menu-pseudo-spacer--hidden");
    }
    return base.join(" ");
  };

  const classNameContainer = () => {
    const base = ["pl-menu__container"];
    if (!show) {
      base.push("pl-menu__container--hidden");
    }
    return base.join(" ");
  };

  const renderProjects = () => {
    return APP_LIST.map((app) => {
      const projectBlockClassList = ["project-block", "noselect"];
      const projectBlockClass = projectBlockClassList.join(" ");

      return (
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
      );
    });
  };

  return (
    <>
      <div class={classNamePseudoSpacer()}></div>
      <div class={classNameContainer()}>
        <div class="pl-menu__header">
          <button
            class="pl-menu__header__close-button"
            onClick={() => setShow(false)}
          >
            <CloseIcon class="pl-menu__header__close-button__icon" />
          </button>
        </div>
        <div class="project-list">{renderProjects()}</div>
      </div>
    </>
  );
}
