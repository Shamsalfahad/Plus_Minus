let count = 0;

// document.getElementById("add").addEventListener("click",function(e){
//     count ++;
//     // count= count + 1;
//     // document.getElementById("count").innerText= count;
//     control("count")

// });
function add (e){
    count ++;
    control("count")
}
// document.getElementById("minus").addEventListener("click",function(e){
//     count --;
//     // count= count - 1;
//     // document.getElementById("count").innerText= count;
//     control("count")
// });
function minus (e){
    count --;
    control("count")
}
function control(id){
    document.getElementById(id).innerText = count;
}