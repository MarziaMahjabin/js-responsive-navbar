let sideBar = document.querySelector('.navber_res');
let dropdown = document.querySelectorAll('.dropdown');

sideBar.addEventListener("click", function () {

  this.querySelector("i").classList.toggle("fa-times");

  let menu = document.querySelector('.nevBar');
  menu.classList.toggle('res_wrap');

});





dropdown.forEach( function (e) {

  e.querySelector('a').innerHTML += '<i style="font-size: 1rem;padding-left: 8px;" class="fas fa-chevron-down"></i>';

  // e.addEventListener("click", function (event) {
  //   if (this.querySelector("ul").classList.contains('resNev1')) {
  //     alert(hhh)
  //   }else{
  //     this.querySelector("ul").classList.toggle("resNev1");
  //   }
  //
  //   event.stopPropagation();
  // });

  e.addEventListener("click", function (event) {

    this.querySelector('a i').classList.toggle("fa-chevron-up");
    this.querySelector("ul").classList.toggle("resNev1");
    event.stopPropagation();
  })


})


function bba(gga,hhh) {
  hhh("hay"+gga)
}


bba("hau" ,data =>{
  console.log(data)
})





;
