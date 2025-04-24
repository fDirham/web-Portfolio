import "./style.css";

type ProjectListMenuProps = {
  show: boolean;
};

export default function ProjectListMenu({ show }: ProjectListMenuProps) {
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

  return (
    <>
      <div class={classNamePseudoSpacer()}></div>
      <div class={classNameContainer()}>menu</div>
    </>
  );
}
