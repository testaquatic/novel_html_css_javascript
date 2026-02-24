export const Title = ({ children }: { children: string }) => {
  const titleElement = document.getElementsByTagName("title").item(0);
  if (titleElement) {
    titleElement.innerText = children ?? titleElement.innerText;
  } else {
    const newTitleElement = document.createElement("title");
    newTitleElement.innerText = children ?? "";
    document.getElementsByTagName("head").item(0)?.appendChild(newTitleElement);
  }

  return null;
};

export default Title;
