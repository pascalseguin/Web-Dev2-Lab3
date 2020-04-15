
document.addEventListener("DOMContentLoaded", function() {
    
    let filObj = {opa:100, sat:100, bri:100, hue:0, gra:0, blu:0};
    const manImg = document.querySelector("#imgManipulated img");
    manImg.style.width = "450px";
    manImg.style.height = "650px";
    
    document.querySelector("div#thumbBox").addEventListener("click", function(e) {
        
        let tmp = e.srcElement.src;
        let alt = e.srcElement.alt;
        let title = e.srcElement.title;
        tmp = tmp.replace("small", "medium");
            
        manImg.setAttribute("src", tmp);
        manImg.setAttribute("alt", alt);
        manImg.setAttribute("title", title);
        document.querySelector("#imgManipulated figcaption").innerHTML = (`<em>${alt}<br>${title}</em>`)
    });
    
    
    
  document.querySelector("div#sliderBox").addEventListener("input", function(e) {
        
        
        let val = e.target.valueAsNumber;
        let valId = e.target.id;
        let Sval = "";
        
        if (e.target && e.target.nodeName.toLowerCase() == "input") {
        switch(valId){
            case 'sliderOpacity' : Sval = "numOpacity"; filObj.opa = val; break;
            case 'sliderSaturation': Sval = "numSaturation"; filObj.sat = val; break;
            case 'sliderBrightness': Sval = "numBrightness"; filObj.bri = val; break;
            case 'sliderHue': Sval = "numHue"; filObj.hue = val; break;
            case 'sliderGray': Sval = "numGray"; filObj.gra = val; break;
            case 'sliderBlur': Sval = "numBlur"; filObj.blu = val; break;
        }
    }
      
        document.getElementById(Sval).textContent = val;
      
        manImg.style["filter"] = `opacity(${filObj.opa}%) saturate(${filObj.sat}%) brightness(${filObj.bri}%) hue-rotate(${filObj.hue}deg) grayscale(${filObj.gra}%) blur(${filObj.blu}px)`
                    
    })
    
document.querySelector("#resetFilters").addEventListener("click", () => {manImg.style["filter"] = "none";})
});