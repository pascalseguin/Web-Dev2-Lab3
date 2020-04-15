const thing = document.getElementById("thumb-list");
thing.style.border = "2px solid lightgrey";

const content = document.querySelector("p").textContent;
document.querySelector("textarea").innerHTML = content;

const pic = document.querySelectorAll("img");

for (let im of pic)
    {im.style.boxShadow = "4px 8px 14px"};