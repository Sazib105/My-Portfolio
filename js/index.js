// document.getElementById("search_icon").addEventListener("click",()=>{
    // document.getElementById("search-box").classList.toggle("hide");
// });

// set :root h
// $(':root').css('--color','red');
const header_height = document.querySelector('.header').offsetHeight;
document.documentElement.style.setProperty('--h',header_height + 'px');

const subManu=document.querySelectorAll('.sub-manu');

// subManu[0].innerHTML=subManu[0].innerHTML;

subManu.forEach(element => {
    element.addEventListener('click',(e)=>{
        subManu.forEach(inelement => {
            // inelement.innerHTML="lll";
            var vall=inelement.innerHTML.toLowerCase();
            var b=document.getElementById(vall);
            if(inelement != element)
                b.style.setProperty('padding-top','0px')
            else
                b.style.setProperty('padding-top',header_height + 'px')
        })
    })
    
});

// document.querySelector('.add-height').style.setProperty('margin-top',header_height+'px');

