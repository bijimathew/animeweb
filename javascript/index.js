let myself=["Biji Mathew","B40521015","Project On Anime Website"];
// myself.forEach(function(element)
// {
    //     console.log(element);
    // })
    let j=0;
    while(j<myself.length)
    {
        console.log(myself[j])
        j++;
    };
    function searches()
{
    let searchcount =0 ;
    searchcount += 1;
    console.log("number of type search is clicked ",searchcount);
    alert("sorry website is in construction");
};
// let notifyusers=0;
// function notify()
// {
//     notifyusers=notifyusers+1;
//     let userS=document.getElementById("users");
//     userS.innerText=notifyusers;
// }
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}