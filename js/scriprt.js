/* ==============typing animatiion=========== */
var typed =new Typed(".typing" ,{
    strings:["","Full Stack Developer. ", "Frontend React Js Developer.", "Building RESTfull API."],
    typedSpeed:20,
    BackSpeed:20,
    loop:true
} )
var typed =new Typed(".ptyping" ,{
    strings:["", "Full Stack Developer.","Web Designer. ", "Frontend React Js Developer.", "Building RESTfull API."],
    typedSpeed:20,
    BackSpeed:20,
    loop:true
} )

/* ============= aside =========== */
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection=document.querySelectorAll(".section"),
totalSection = allSection.length;
            for(let i=0; i<totalNavList; i++)
            {
              
                const a= navList[i].querySelector("a");
                a.addEventListener("click", function(){
                    for(let j=0; j<totalNavList; j++)
                    {
                        for(let i=0; i<totalSection; i++){
                            allSection[i].classList.remove("back-section");
                        }
                        if(navList[j].querySelector("a").classList.contains("active"))
                        {
                            allSection[j].classList.add("back-section");
                        }
                        navList[j].querySelector("a").classList.remove("active")
                    }
                    this.classList.add("active")
                    showSection(this);
                    if(window.innerWidth < 1200)
                    {
                        asideSectionTogglerBtn();
                    }
                })
                
            }
            function showSection(element)
            {
                for(let i=0; i<totalSection; i++){
                    allSection[i].classList.remove("active");
                }
               const target= element.getAttribute("href").split("#")[1];
               document.querySelector("#" + target).classList.add("active")
               
            }
            
            const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click",() => {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }
    /* preloader */
    var loader= document.getElementById("preloader");
    window.addEventListener("load", function(){
        loader.style.display="none";
    })
