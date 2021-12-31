var currentCoin = prompt("Enter your coin!");
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var btnCoin = $(".btnCoin");
var myCoin  = $(".costCoin");
var smallCard = $(".small");
var videoCard  = $("#myVideo");
var btnBack = $(".backbtn");
var imgIconic = $(".imgIconic");
var videoChange = $(".embed-responsive-item");
//kiểm tra dữ liệu người dùng
if(currentCoin != null){
    myCoin.textContent = currentCoin;
    var sub = currentCoin;
}else{
        alert("Error!404");
        smallCard.style.display = "none";
}
// sự kiện cho nút 100 coin
btnCoin.onclick = function() {
    var isConfirm  = confirm("Pay 100 myClub Coins. Process?");
    if(isConfirm == true){    
        if(sub >=100){
            sub -= 100;
            myCoin.textContent = sub;
            var iconCard  = Math.floor(Math.random() * 100) + 1;
            console.log(iconCard);
            if(iconCard <= 5){
                videoCard.play();
                videoCard.classList.add("run");
                smallCard.classList.add("active");
                setTimeout(function(){
                    imgIconic.classList.add("active");
                },8000);
                setTimeout(function() {
                    btnBack.classList.add("hidden");
                },9000);
            }else{
                imgIconic.setAttribute("src","./video&images/base.jpg");
                videoCard.setAttribute("src","./video&images/base.mp4");
                videoCard.play();
                videoCard.classList.add("run");
                smallCard.classList.add("active");
                setTimeout(function(){
                    imgIconic.classList.add("active");
                },7000);
                setTimeout(function() {
                    btnBack.classList.add("hidden");
                },8000);
            }
        
        }else{
            alert("Error!!Your coin is not enough");
        }
    }else{
        alert("No");
    }
}
btnBack.onclick = function() {
    imgIconic.setAttribute("src","./video&images/iconic.jpg");
    videoCard.setAttribute("src","./video&images/iconic.mp4");
    videoCard.pause();
    btnBack.classList.remove("hidden");
    videoCard.classList.remove("run");
    smallCard.classList.remove("active");
    imgIconic.classList.remove("active");
}


