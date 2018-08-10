function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function setFilter(item){
    filter = document.getElementById("dropbtn").value;
    console.log(filter);
    document.getElementById("dropbtn").innerHTML = item + ' <i class="fa fa-angle-down"></i>';
    listOfItems = document.getElementById("myDropdown");
    console.log(listOfItems);

}