import SideMenuIcon from "../SideMenuIcon";
import "./Header.css";

export default function Header({
  toggleProjectListMenu,
}: {
  toggleProjectListMenu: () => void;
}) {
  return (
    <div class="header">
      <button class="header__side-menu-button" onClick={toggleProjectListMenu}>
        <SideMenuIcon class="header__side-menu-button__icon" />
        <div class="header__side-menu-text-button">Projects</div>
      </button>
    </div>
  );
}
