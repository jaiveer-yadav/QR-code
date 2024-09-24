let url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
const imgbox = document.getElementById("imgbox")
const qrimage = document.getElementById("qrimage")
const qrtext = document.getElementById("qrtext")
const qrbtn = document.querySelector("button")
const generateQr = function (){
qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value
}
qrbtn.addEventListener("click",()=>{
    if(qrtext.value.length > 0){
          generateQr()
    imgbox.classList.add("show-img")
    }else{
        qrtext.classList.add("error")
        setTimeout(()=>{
            qrtext.classList.remove("error")

        },1000)
    }
    
})