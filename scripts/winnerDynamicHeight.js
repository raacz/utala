const aside = document.getElementsByTagName("aside")[0];
const main = document.getElementsByTagName("main")[0];
const wrapper = document.getElementsByClassName("card-wrapper")[0];

setTimeout(calculateHeight, 50);

calculateHeight();
window.addEventListener('resize', calculateHeight);
//calculate the height on load and on every resize of the window

function calculateHeight(){
    //if the winner wrapper's flex direction is sideways, the height should be set to auto. if not, it should be set to the size of the container
    console.log("run");
    if (window.getComputedStyle(wrapper).flexDirection === "row"){
        aside.setAttribute("style", "height: auto");
    }
    else {
        var height = main.offsetHeight;
        aside.setAttribute("style", "height:"+height+"px");
        console.log("set height is "+height);
    }
}
