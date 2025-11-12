

export const formControl = (buttonModalNo, buttonModalOk, formModalNo, formModalOk) =>
{
  buttonModalNo.addEventListener("click", () => {
    formModalNo.style.display = 'none';
  });
  
  buttonModalOk.addEventListener("click", () => {
    formModalOk.style.display = 'none';
  });
};