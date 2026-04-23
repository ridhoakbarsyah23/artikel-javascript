document.addEventListener("DOMContentLoaded", function () {
  const artikel = document.getElementById("artikelText").innerText;

  // =====================
  // PENCARIAN
  // =====================
  document.getElementById("btnCari").addEventListener("click", function () {
    let kata = document.getElementById("kataCari").value;

    if (!kata) {
      alert("Masukkan kata dulu!");
      return;
    }

    let regex = new RegExp(`\\b${kata}\\b`, "gi");
    let hasil = artikel.match(regex);
    let jumlah = hasil ? hasil.length : 0;

    document.getElementById("hasilCari").innerText =
      `Kata "${kata}" ditemukan sebanyak ${jumlah} kali`;
  });

  // =====================
  // REPLACE
  // =====================
  document.getElementById("btnReplace").addEventListener("click", function () {
    // replace + highlight
    let hasil = artikel.replace(/\badalah\b/gi, function (match) {
      return `<span class="highlight">${"ialah"}</span>`;
    });

    document.getElementById("hasilReplace").innerHTML = hasil;
  });

  // =====================
  // SORTING
  // =====================
  document.getElementById("btnSort").addEventListener("click", function () {
    let bersih = artikel.toLowerCase().replace(/[^\w\s]/g, "");
    let kataArray = bersih.split(/\s+/);

    kataArray.sort();

    document.getElementById("hasilSort").innerText = kataArray.join(", ");
  });
});
