import "./style.css";
import TextareaAutosize from "react-textarea-autosize";
import SubmitIcon from "../SubmitIcon";

type BottomContainerProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleInputFormSubmit: (e?: SubmitEvent) => void;
  showProjectListMenu: boolean;
};

export default function BottomContainer({
  inputValue,
  setInputValue,
  handleInputFormSubmit,
  showProjectListMenu,
}: BottomContainerProps) {
  const classNameProjectListSpacer = () => {
    const base = ["bottom__project-list-spacer"];
    if (!showProjectListMenu) {
      base.push("bottom__project-list-spacer--hidden");
    }
    return base.join(" ");
  };

  function onInputKeyDown(e: KeyboardEvent) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleInputFormSubmit();
    }
  }

  return (
    <div class="bottom-container">
      <div class={classNameProjectListSpacer()}></div>
      <div class="bottom__content-container">
        <form class="bottom__input-form" onSubmit={handleInputFormSubmit}>
          <div class="bottom__input-container">
            <TextareaAutosize
              autofocus={false}
              placeholder="Ask anything…"
              autocomplete="off"
              rows={2}
              data-1p-ignore="true"
              value={inputValue}
              onKeyDown={onInputKeyDown}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              class="bottom__input__textarea"
            />
            <button type="submit" class="bottom__input__submit-button">
              <div class="submit-button__icon-container">
                <SubmitIcon class="submit-button__icon" />
              </div>
            </button>
          </div>
        </form>
        <div class="bottom__links-container">
          <a href="">Home</a>
          <a href="">Email</a>
          <a href="">LinkedIn</a>
          <a href="">Resume</a>
        </div>
      </div>
    </div>
  );
}
