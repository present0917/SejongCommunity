import ToggleButtonContext from "./toggleContext";
import defaultStyle from "./toggleButton.module.css";

function ToggleButtonGroup({
  label,
  children,
  disabled: groupDisabled,
  values,
  onChange,
  style,
  mode,
}) {
  const isDisabled = (disabled) => disabled || groupDisabled;
  //isDisabled()함수는 disabled prop이 true로 넘어왔을 경우 내부에 있는 체크박스를 비활성시켜줌.
  const isChecked = (value) => values.includes(value);
  //isChecked() 함수는 특정 체크박스의 값이 values prop에 포함되었는지를 확인해줌.
  const toggleValue = ({ checked, value }) => {
    if (checked) {
      if (mode === "single") {
        //단일선택시
        onChange([value]);
      }
      if (mode === "multi") {
        onChange(values.concat(value));
      }
      //다중선택 사용시
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };
  //toggleValue() 함수는 체크박스가 체크 여부에 따라서 values prop에 해당 값을 추가하거나 제거해줌.
  if (!style) {
    return (
      <div className={defaultStyle.searchToggleBox}>
        <legend>{label}</legend>
        <ToggleButtonContext.Provider
          value={{ isDisabled, isChecked, toggleValue }}
        >
          {children}
        </ToggleButtonContext.Provider>
      </div>
    );
  }
  return (
    <div className={style}>
      <legend>{label}</legend>
      <ToggleButtonContext.Provider
        value={{ isDisabled, isChecked, toggleValue }}
      >
        {children}
      </ToggleButtonContext.Provider>
    </div>
  );
}
export default ToggleButtonGroup;
