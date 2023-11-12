export const validate = (
  element: Element,
  setValueError: React.SetStateAction<any>
) => {
  const valueInputDiv = element.firstChild?.firstChild as HTMLDivElement;
  const valueInput = valueInputDiv.firstChild as HTMLInputElement;
  const value = valueInput.value;

  if (!value.length) {
    setValueError(true);
  } else {
    setValueError(false);
  }

  return value;
};
