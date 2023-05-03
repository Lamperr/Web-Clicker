# Web-Clicker
Web-Clicker is simple js code to click on any links that meet the parameters you pass in

## How to use
You must have your browser allow pop ups in order for this to work properly<br>
Paste the script into your web browsers console and answer the prompts that show up on screen <br>
Below is an example of how to pass data into the prompts<br>
```txt
  park,joust,defender,mercs,ikari,galax,turtle,simpson,golden,pac,rally,crisis,burner,outrun,fighter,daytona
```
This example will search through every link on the site and check if contains any of those keywords passed in<br>
If you add in keywords to the blacklist it will skip over any links that contain those strings if it has a word in the blacklist<br>
If you choose to add a delay you choose the time in miliseconds so `3000 = 3 seconds`<br>
If you pass in 3000 for the delay then a link will get clicked on every 3 seconds

## The script
Script.js is [here](https://github.com/Lamperr/Web-Clicker/blob/main/script.js) or below<br>
```js
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
```
<br><br><br>
## (:
Thanks for checking my stuff out!<br>
-nl
