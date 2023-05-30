const moreBtn = document.querySelector('.info1 .metadata .moreBtn');
const title = document.querySelector('.info1 .metadata .title0');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
})

$(function() {
    $(".nono").hide();
    $(".open1").show();

    // #해시태그, 타이틀
    $(".go1").on("click",function() {
        $(".nono").hide();
        $(".open2").show();
    });
    $(".go2").on("click",function() {
        $(".nono").hide();
        $(".open3").show();
    });
    $(".go3").on("click",function() {
        $(".nono").hide();
        $(".open4").show();
    });

});