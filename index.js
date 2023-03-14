console.log("Kata tersedia " + kataBaku.length);

let benar = 0;
let salah = 0;
let akurasi;

function betulFX() {
    const audioBetul = new Audio("sounds/betul.mp3");
    benar++;
    $(".benar").html(benar);
    $("body").addClass("benarFX");
    audioBetul.play();
    setTimeout(function () {
        $("body").removeClass("benarFX");
    }, 500);
}
function salahFX() {
    const audioSalah = new Audio("sounds/salah.mp3");
    audioSalah.play();
    salah++;
    $(".salah").html(salah);
    $("body").addClass("salahFX");
    setTimeout(function () {
        $("body").removeClass("salahFX");
    }, 500);
}

function randomUrut() {
    $(".rowOpsi").html("");

    let randomUrut = Math.floor(Math.random() * 2);
    console.log("randomUrut " + randomUrut);

    if (randomUrut === 0) {
        $(".rowOpsi").html("<button class='btn opsi1 kiri'>Opsi 1</button><button class='btn opsi2 kanan'>Opsi 2</button>");
    } else {
        $(".rowOpsi").html("<button class='btn opsi2 kiri'>Opsi 2</button><button class='btn opsi1 kanan'>Opsi 1</button>");
    }
}

function randomKata() {
    let randomKata = Math.floor(Math.random() * kataBaku.length);
    console.log(randomKata);

    $(".rowOpsi .opsi1").html(kataBaku[randomKata].pilihan1);
    $(".rowOpsi .opsi2").html(kataBaku[randomKata].pilihan2);
}

$(document).on("keydown", function (e) {
    if (e.key == "ArrowRight") {
        $(".kanan").click();
    } else if (e.key == "ArrowLeft") {
        $(".kiri").click();
    }
});

main();
function main() {
    randomUrut();
    randomKata();
    akurasi = (benar / (benar + salah)) * 100;

    if (isNaN(akurasi)) {
        $(".akurasi").html("100");
    } else {
        $(".akurasi").html(akurasi.toFixed(1));
    }

    $(".opsi1").click(function () {
        betulFX();
        main();
    });

    $(".opsi2").click(function () {
        salahFX();
        main();
    });

    $(".reset").click(function () {
        benar = 0;
        salah = 0;
        $(".benar").html(benar);
        $(".salah").html(salah);
        main();
    });
}
