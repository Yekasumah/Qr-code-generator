const form = document.getElementById("generate-form");
const Qr = document.getElementById("qr");

const onGenerateSubmit = (e) =>{
  e.preventDefault();

  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;


if (url === ''){
    alert('Please enter a URL');
}else{ 
 setTimeout(() =>{

    generatQRcode(url,size);
    setTimeout(() =>{
        const saveUrl = Qr.querySelector('img').src;
        createSaveBtn(saveUrl);
    },50)
 },1000)
}      
};

const generatQRcode  = (url, size) =>{
    const qrcode = new QRCode('qr',{
        text: url,
        width: size,
        height: size,
    })
}
 
 

const clearUI= () => {
    Qr.innerHTML= ' ';
    const saveLink = document.getElementById('save-link');
    if (saveLink)
      saveLink.remove();
};


const createSaveBtn= (saveUrl) => {
const link =document.createElement('a');
link.id= 'save-link';
link.classList=
link.href= saveUrl;
link.download ='qr';
link.innerHTML= 'Save Image';
document.getElementById('qr').appendChild(link);
};



form.addEventListener('submit', onGenerateSubmit);