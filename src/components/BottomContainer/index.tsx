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
  function onInputKeyDown(e: KeyboardEvent) {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleInputFormSubmit();
    }
  }
  return (
    <div class="bottom-container">
      <div class="bottom__project-list-spacer"></div>
      <div class="bottom__content-container">
        <form class="chat__input-form" onSubmit={handleInputFormSubmit}>
          <div class="chat__input-container">
            <TextareaAutosize
              autofocus={false}
              placeholder="Ask anything…"
              autocomplete="off"
              rows={2}
              data-1p-ignore="true"
              value={inputValue}
              onKeyDown={onInputKeyDown}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              class="chat__input__textarea"
            />
            <button type="submit" class="chat__input__submit-button">
              <div class="submit-button__icon-container">
                <SubmitIcon class="submit-button__icon" />
              </div>
            </button>
          </div>
        </form>
        <div class="chat__links-container">
          <a href="">Home</a>
          <a href="">Email</a>
          <a href="">LinkedIn</a>
          <a href="">Resume</a>
        </div>
      </div>
    </div>
  );
}
