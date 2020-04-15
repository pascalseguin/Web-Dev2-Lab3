const photos = JSON.parse(content);

const sec = document.querySelector("section#parent");


console.log(photos);
for (let im of photos)
    {
        const fName = im.filename;
        const ititle = im.title;
        
        const tmpfig = document.createElement("figure");
        const tmpimg = document.createElement("img");
        const tmpfigc = document.createElement("figcaption");
        const header2 = document.createElement("h2");
        const para = document.createElement("p");
        
        para.textContent = im.description;
        header2.textContent = ititle;
        
        for (let c of im.colors){
            let colour = c.hex;
             const sp = document.createElement("span");
            sp.style.backgroundColor = colour;
            tmpfigc.appendChild(sp);
            console.log(colour);
        }
        
        tmpimg.setAttribute("src", `images/${fName}`);
        tmpimg.setAttribute("alt", `images/${ititle}`);
        
        tmpfig.appendChild(tmpimg);
        tmpfig.appendChild(header2);
        tmpfig.appendChild(para);
        tmpfig.appendChild(tmpfigc);
        
        sec.appendChild(tmpfig);
        
        
    }