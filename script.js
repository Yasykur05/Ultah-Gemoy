AOS.init();

var musik = "";

var audio = document.querySelector(".audio");;
if (musik) {
  audio.src = musik;
}
 
function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll";
  setTimeOut(function() {
    document.querySelector(".open").style.display = "none";
  }, 1200)
}

function wa(isi) {
  window.open("https://api.whatsapp.com/send?text=Makasiii%20Mayy%20udah%20ngucapin%20ulang%20tahun%20gueel,%20di%20hari%20spesial%20ini%20doa%20gw adalah "+ isi);
}

async function tanya () {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'resources/gemoy.jpg',
    title: 'Di hari spesial ini gemoy pengen mendoakan apa?', 
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: 'kirim jawabannya ke wa guuel moyyy',
    });
    wa (kado);
  } else {
    await swal.fire( {
      icon: 'error',
      title: 'jangan kosong laaaa mooyy'
    });
  tanya();
  } 
}