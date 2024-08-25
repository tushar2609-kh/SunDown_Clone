const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.to('.loader',{
    y: "-=100%",
    delay: 2.5,
    duration: 2,
    ease: Expo.easeInOut
});

gsap.from(".video-page",{
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".video-page",
        scroller: "body",
        start: "top 50%",
        markers: true
      }
})

gsap.from(".second-page h3", {
    x: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".second-page h3",
      scroller: "body",
      start: "top 70%",
      
    }
  })

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.7,
    spaceBetween: 30,
    freeMode: true,
    // grabCursor: true,
  });

//--------------------------------------Optimal way but not successful now. I will think later on this----------------------------
// let detBox = document.querySelectorAll(".detail-box");

// detBox.forEach((e)=>{
//     e.addEventListener("mouseenter",()=>{
//         gsap.to(".det-box-anime",{
//             height: "8vw",
//             duration: 0.15,
//             ease: Power4
//         });
//     });

//     e.addEventListener("mouseleave",()=>{
//         // gsap.to(".det-box-anime",{
//         //     height: "8vw",
//         //     duration: 0.15,
//         //     ease: Power4
//         // });

//     });
// });
//--------------------------------------------------------------------------------------------------------------------------------------------

    // document.querySelector(".fourth-page").scrollIntoView({
    //     behavior: 'smooth'
    // });


//--------------------------------------------------Not the optimal way, but successful now-----------------------------------------------------------
function ThirdPageAnimation(){

    let detbox1 = document.querySelector(".db1");
    let detbox2 = document.querySelector(".db2");
    let detbox3 = document.querySelector(".db3");
    let detbox4 = document.querySelector(".db4");
    let detbox5 = document.querySelector(".db5");
    let detbox6 = document.querySelector(".db6");
    let detbox7 = document.querySelector(".db7");
    let detailContainer = document.querySelector(".detail-container");
    let fixed = document.querySelector(".fixedImageCard");
    let fixedImage = document.querySelector(".fixedImageCard img"); 


    detailContainer.addEventListener("mouseenter", ()=>{
        fixed.style.display = "block";
    });

    detailContainer.addEventListener("mouseleave", ()=>{
        fixed.style.display = "none";
    });





    detbox1.addEventListener("mouseenter",()=>{
            gsap.to(".dba1",{
                height: "8vw",
                duration: 0.15,
                ease: Power4
            });

            fixedImage.src = "images/third-page1.webp";
    });
    detbox1.addEventListener("mouseleave",()=>{
        gsap.to(".dba1",{
            height: "0",
            duration: 0.15,
            ease: Power4
        });
    });


    detbox2.addEventListener("mouseenter",()=>{
        gsap.to(".dba2",{
            height: "8vw",
            duration: 0.15,
            ease: Power4
        });
        fixedImage.src = "images/third-page2.webp";
    });
    detbox2.addEventListener("mouseleave",()=>{
    gsap.to(".dba2",{
        height: "0",
        duration: 0.15,
        ease: Power4
        });
    });

    detbox3.addEventListener("mouseenter",()=>{
        gsap.to(".dba3",{
            height: "8vw",
            duration: 0.15,
            ease: Power4
        });
        fixedImage.src = "images/third-page3.webp";
    });
    detbox3.addEventListener("mouseleave",()=>{
    gsap.to(".dba3",{
        height: "0",
        duration: 0.15,
        ease: Power4
        });
    });


    detbox4.addEventListener("mouseenter",(e)=>{
        gsap.to(".dba4",{
            height: "8vw",
            duration: 0.15,
            ease: Power4
        });
        fixedImage.src = "images/third-page5.webp";
    });
    detbox4.addEventListener("mouseleave",()=>{
    gsap.to(".dba4",{
        height: "0",
        duration: 0.15,
        ease: Power4
        });
    });


    detbox5.addEventListener("mouseenter",()=>{
        gsap.to(".dba5",{
            height: "8vw",
            duration: 0.15,
            ease: Power4
        });
        fixedImage.src = "images/third-page4.webp";
    });
    detbox5.addEventListener("mouseleave",()=>{
    gsap.to(".dba5",{
        height: "0",
        duration: 0.15,
        ease: Power4
        });
    });


    detbox6.addEventListener("mouseenter",()=>{
        gsap.to(".dba6",{
            height: "8vw",
            duration: 0.15,
            ease: Power4
        });
        fixedImage.src = "images/third-page6.webp";
    });
    detbox6.addEventListener("mouseleave",()=>{
    gsap.to(".dba6",{
        height: "0",
        duration: 0.15,
        ease: Power4
        });
    });


    detbox7.addEventListener("mouseenter",()=>{
        gsap.to(".dba7",{
            height: "8vw",
            duration: 0.15,
            ease: Power4
        });
        fixedImage.src = "images/third-page7.webp";
    });
    detbox7.addEventListener("mouseleave",()=>{
    gsap.to(".dba7",{
        height: "0",
        duration: 0.15,
        ease: Power4
        });
    });

}
//--------------------------------------------------------------------------------------------------------------------------------------------

function FourthPageAnimation(){

    let design = document.querySelector("#design");
    let project = document.querySelector("#project");
    let execution = document.querySelector("#execution");
    let para = document.querySelector(".para");
    let image = document.querySelector(".image");
    
    design.addEventListener("click", ()=>{
        document.querySelector(".verticleBar1").style.backgroundColor = "orangered";
        document.querySelector(".verticleBar2").style.backgroundColor = "rgb(80,74,69)";
        document.querySelector(".verticleBar3").style.backgroundColor = "rgb(80,74,69)";
        design.style.color = "white";
        project.style.color = "rgb(80,74,69)";
        execution.style.color = "rgb(80,74,69)";
        para.textContent = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.";
        image.src = "images/project-banner.webp";
        gsap.from(".para",{
            opacity: 0,
            duration: 0.5,
            ease: Expo.easeInOut
        });
        gsap.from(".image",{
            opacity: 0,
            duration: 0.5,
            ease: Expo.easeInOut
        });
    });
    
    project.addEventListener("click", ()=>{
        document.querySelector(".verticleBar2").style.backgroundColor = "orangered";
        document.querySelector(".verticleBar1").style.backgroundColor = "rgb(80,74,69)";
        document.querySelector(".verticleBar3").style.backgroundColor = "rgb(80,74,69)";
        project.style.color = "white";
        design.style.color = "rgb(80,74,69)";
        execution.style.color = "rgb(80,74,69)";
        para.textContent = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.";
        image.src = "images/Project-banner2.webp";
        gsap.from(".para",{
            opacity: 0,
            duration: 0.5,
            ease: Expo.easeInOut
        });
        gsap.from(".image",{
            opacity: 0,
            duration: 0.5,
            ease: Expo.easeInOut
        });
    });
    
    execution.addEventListener("click", ()=>{
        document.querySelector(".verticleBar3").style.backgroundColor = "orangered";
        document.querySelector(".verticleBar1").style.backgroundColor = "rgb(80,74,69)";
        document.querySelector(".verticleBar2").style.backgroundColor = "rgb(80,74,69)";
        execution.style.color = "white";
        project.style.color = "rgb(80,74,69)";
        design.style.color = "rgb(80,74,69)";
        para.textContent = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.";
        image.src = "images/Project-banner3.webp";
        gsap.from(".para",{
            opacity: 0,
            duration: 0.5,
            ease: Expo.easeInOut
        });
        gsap.from(".image",{
            opacity: 0,
            duration: 0.5,
            ease: Expo.easeInOut
        });
    });
}


let submit  = document.querySelector(".icon2");
let input = document.querySelector(".contact .right");
let button = document.createElement("button");
let error = document.querySelector(".err");
button.textContent = "Thanks for signing up!";
button.className = "signUp";

submit.addEventListener("click",()=>{
        if((document.querySelector("input").value)===""){
           error.textContent = "*Email can not be empty";
           
           error.style.fontSize = "0.9vw";
           error.style.color = "black";
        }
        else{
            error.textContent = "";
            input.removeChild(document.querySelector(".inp"));
            input.appendChild(button);
        }
});

ThirdPageAnimation();
FourthPageAnimation();
