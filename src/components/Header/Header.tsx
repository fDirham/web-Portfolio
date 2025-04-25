import FadeAnimWrapper from "../FadeAnimWrapper";
import SideMenuIcon from "../SideMenuIcon";
import "./Header.css";

type HeaderProps = {
  toggleProjectListMenu: () => void;
  show: boolean;
};

export default function Header({ toggleProjectListMenu, show }: HeaderProps) {
  return (
    <FadeAnimWrapper
      show={show}
      customClasses={[
        "header-animator",
        "header-animator--show",
        "header-animator--hide",
      ]}
    >
      <div class="header">
        <button
          class="header__side-menu-button"
          onClick={toggleProjectListMenu}
        >
          <SideMenuIcon class="header__side-menu-button__icon" />
          <div class="header__side-menu-text-button">Projects</div>
        </button>
      </div>
    </FadeAnimWrapper>
  );
}
