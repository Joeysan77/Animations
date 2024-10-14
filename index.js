var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
    document.getElementById("options").style.bottom = "0px";
    document.getElementById("hech").className = "fa-solid fa-chevron-up"
    a = 1
    
  } else {
  document.getElementById("options").style.bottom = "-53px";
    document.getElementById("hech").className = "fa-solid fa-chevron-down"
    a = 0
    document.getElementById("header").style.top = "-53px";
  }
  prevScrollpos = currentScrollPos;
}
a = 1
function turn() {
    if (a == 1) {
        document.getElementById("options").style.bottom = "-53px";
    document.getElementById("hech").className = "fa-solid fa-chevron-down"
    document.getElementById("header").style.top = "-53px";
    a = 0
    }
    else if (a == 0) {
        document.getElementById("header").style.top = "0px";
    document.getElementById("options").style.bottom = "0px";
    document.getElementById("hech").className = "fa-solid fa-chevron-up"
    a = 1
    }
}
b = 1
function searchani() {
    search = document.getElementById("search-div")
    seai = document.getElementById("seai")
    sech = document.getElementById("seach")
    search.style.display = "flex"
    function searc1() {
        search.style.bottom = "10%"
        search.style.opacity = "1"
     
        function sti() {
            sech.style.color = "black"
        sech.style.width = "100%"
           search.style.width = "85%"
        }
        setTimeout(sti , 200)
    }
    setTimeout(searc1 , 50)
}
function dak() {
    dar = document.getElementById("dark")
    dar.style.display = "block"
    function dak1() {
        dar.style.backdropFilter = "blur(5px)"
        dar.style.background = "rgb(0,0,0,0.7)"
        
    }
    setTimeout(dak1 , 5)
}
function searchani1() {
    search = document.getElementById("search-div")
    seai = document.getElementById("seai")
    sech = document.getElementById("seach")
        sech.style.color = "transparent"
        sech.style.width = "0"
           search.style.width = "30px"
    function searc11() {
        search.style.bottom = "5%"
        search.style.opacity = "0"
     
        function sti1() {
        search.style.display = "none"
        }
        setTimeout(sti1 , 200)
    }
    setTimeout(searc11 , 200)
}
function dak2() {
    dar = document.getElementById("dark")
   
    dar.style.backdropFilter = "blur(0px)"
        dar.style.background = "transparent"
    function dak12() {
         dar.style.display = "none"
        
    }
    setTimeout(dak12 , 300)
}
function serc() {
    if (b == 1) {
        searchani()
        dak()
        b = 0
    }
    else if (b == 0) {
        searchani1()
        dak2()
        b = 1
    }
}