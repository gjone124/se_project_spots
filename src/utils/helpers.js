export function setButtonText(
  button,
  isLoading,
  notLoadingText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    // set loading text
    button.textContent = loadingText;
  } else {
    // set not loading text (default text)
    button.textContent = notLoadingText;
  }
}
