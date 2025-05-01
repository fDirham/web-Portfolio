import { UserIdentity } from "../../types/UserIdentity";
import FadeAnimWrapper from "../FadeAnimWrapper";
import "./OnboardingOptions.css";

type OnboardingOptionsProps = {
  show: boolean;
  onOptionSelect: (option: UserIdentity) => void;
};

export default function OnboardingOptions({
  show,
  onOptionSelect,
}: OnboardingOptionsProps) {
  const renderOptions = () => {
    const options = Object.values(UserIdentity);

    return options.map((option) => (
      <button
        key={option}
        class="onboarding-option-button"
        onClick={() => onOptionSelect(option)}
      >
        {option}
      </button>
    ));
  };

  return (
    <FadeAnimWrapper show={show} startAnimDuration={1} endAnimDuration={1}>
      <div class="onboarding-options-container">
        <span class="onboarding-prompt">Your answer:</span>
        <div class={"onboarding-options"}>{renderOptions()}</div>
      </div>
    </FadeAnimWrapper>
  );
}
