
var pages ;
var activePage ;
var ov;
var list ;
var selector ;
var curAnimation ;
var menuOpen;
var animations = [
    {
        name : "Slide" ,
        in : "slide-in 0.3s  ease-out forwards",
        out: "slide-out 0.4s ease-out forwards"
    } ,
    {
        name : "Windmill" ,
        in : "windmill-in 0.8s 0.4s ease-in-out forwards",
        out: "windmill-out 0.8s ease-in-out forwards"
    },
    {
        name : "Zoom Slide" ,
        in : "zoom-slide-in  0.8s ease-in-out forwards",
        out: "zoom-slide-out 0.8s ease-in-out forwards"
    },
    {
        name : "Zoom Slide 2" ,
        in : "zoom-slide2-in  1s 0.5s ease-in-out forwards",
        out: "zoom-slide2-out 1s ease-in-out forwards"
    },
    {
        name : "Zoom" ,
        in : "zoom-in 0.8s  ease-in-out forwards",
        out: "zoom-out 0.8s ease-in-out forwards"
    },
    {
        name : "Shuffle Horizontal" ,
        in : "shuffle-hoz-in  1s ease-in-out forwards",
        out: "shuffle-hoz-out 1s ease-in-out forwards"
    },
    {
        name : "Shuffle Verticle" ,
        in : "shuffle-ver-in  0.8s ease-in-out forwards",
        out: "shuffle-ver-out 0.8s ease-in-out forwards"
    }
];

window.onload = () => {
    pages = document.querySelectorAll(".page");
    ov = document.querySelector(".overlay");
    list = document.querySelector(".list");
    selector = document.querySelector(".selector");
    ov.addEventListener(
        'click',
        () => {
            setMenu(0);
        }
    );

    

    for(var i=0; i<animations.length ; i++){
        let item = document.createElement("div");
        item.classList.add("item");
        item.classList.add("btn");
        item.index = i; 
        item.addEventListener(
            "click",
            (evt) => {
                setAnimation(evt.target.index);
            }
        );
        item.innerText = animations[i].name;
        list.appendChild(item);
    }

    curAnimation = 0;
    activePage = 0;
    menuOpen = 0;
    setAnimation(3);
};

function reset(){
    pages.forEach(p => {
        p.classList.remove("active");
        p.classList.remove("hide");
    });
    pages[0].classList.add("static");
    activePage = 0;
}

function setPage(n){
    pages[activePage].classList.remove("active");
    pages[activePage].classList.add("hide");
    pages[n].classList.remove("hide");
    pages[n].classList.add("active");
    pages[0].classList.remove("static");
    activePage = n;
}

function setOV(n){
    if(n==0){
        ov.classList.remove("ov-show");
        ov.classList.add("ov-hide");
    }else{
        ov.classList.remove("ov-hide");
        ov.classList.add("ov-show");
    }
}

function setMenu(n){
    if(n==1 && menuOpen==1){
        n=0;
    }
    if(n==0){
        selector.classList.remove("lst-show");
        selector.classList.add("lst-hide");
        setOV(0);
        menuOpen = 0;
    }
    else{
        selector.classList.remove("lst-hide");
        selector.classList.add("lst-show");
        setOV(1);
        menuOpen = 1;
    }
}

function setAnimation(n){
    document.documentElement.style.setProperty(
        "--animation-in",
        animations[n].in
    );
    document.documentElement.style.setProperty(
        "--animation-out",
        animations[n].out
    );
    reset()
    setMenu(0);
    document.querySelector(".current").innerText = animations[n].name ;
    curAnimation = n;
}