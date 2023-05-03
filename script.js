let delayCounter = 0;
let delayTime = 0;
const dataString = prompt("Enter comma-separated data to match against:");
const dataArray = dataString.split(",");
const avoidString = prompt("Enter comma-separated words to avoid (optional):");
const avoid = avoidString ? avoidString.split(",") : [];
const links = document.getElementsByTagName("a");
const delayString = prompt("Do you want a delay between clicks? Enter 'yes' or 'no'.");
const delay = delayString.toLowerCase() === "yes";
if (delay) {
  delayTime = parseInt(
    prompt("Enter the delay time (in milliseconds) between clicks:")
  );
}

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  if (
    dataArray.some((value) => link.textContent.includes(value)) &&
    !avoid.some((value) => link.textContent.includes(value))
  ) {
    if (delay) {
      setTimeout(() => {
        window.open(link.href, "_blank");
      }, delayCounter);
      delayCounter += delayTime;
    } else {
      window.open(link.href, "_blank");
    }
  }
}
