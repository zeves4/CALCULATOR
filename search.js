function display(val){
    document.getElementById('bolim').value += val
    return val 
}
function solve(){
    let x = document.getElementById('bolim').value
    let y = eval(x);
    document.getElementById('bolim').value = y
    return y
}
function screenLent(){
    document.getElementById('bolim').value = "";
}