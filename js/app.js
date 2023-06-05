let sideBarOpenBtn= document.querySelector('.btn');
let sideBar = document.querySelector('.sidebar');

function sideBarOpen(){
sideBar.classList.toggle('active');

if(sideBar.classList.contains('active')==true)
{
    sideBarOpenBtn.innerHTML ='<i class="bi bi-x-lg"></i>';
}
else{
    sideBarOpenBtn.innerHTML ='<i class="bi bi-list"></i>';
}

}

sideBarOpenBtn.addEventListener("click",sideBarOpen);