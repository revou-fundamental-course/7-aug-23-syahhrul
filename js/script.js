function luas_segitiga() {
  var alas = parseFloat(document.querySelector('input[name="alas-segitiga"]').value);
  var tinggi = parseFloat(document.querySelector('input[name="tinggi-segitiga"]').value);

  // validasi bahwa input harus lebih dari 0
  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
      alert("Masukkan angka positif yang lebih besar dari 0 untuk alas dan tinggi.");
      document.getElementById('hasil-luas-segitiga').style.display = 'none';
      return;
  }

  var luas = 0.5 * alas * tinggi;
  document.getElementById('hasil-luas-segitiga').innerHTML = 'L = 1/2 x a x t<br><br>L = 1/2 x ' + alas + ' x ' + tinggi + '<br><br>L = ' + luas;
  document.getElementById('hasil-luas-segitiga').style.display = 'block';
}

function keliling_segitiga() {
  var s1 = parseFloat(document.querySelector('input[name="s1-segitiga"]').value);
  var s2 = parseFloat(document.querySelector('input[name="s2-segitiga"]').value);
  var s3 = parseFloat(document.querySelector('input[name="s3-segitiga"]').value);

  // validasi bahwa input harus lebih dari 0
  if (isNaN(s1) || isNaN(s2) || isNaN(s3) || s1 <= 0 || s2 <= 0 || s3 <= 0) {
      alert("Masukkan angka positif yang lebih besar dari 0 untuk panjang sisi.");
      document.getElementById('hasil-keliling-segitiga').style.display = 'none';
      return;
  }

  var keliling = s1 + s2 + s3;
  document.getElementById('hasil-keliling-segitiga').innerHTML = 'K = S1 + S2 + S3<br><br>K = ' + s1 + ' + ' + s2 + ' + ' + s3 + '<br><br>K = ' + keliling;
  document.getElementById('hasil-keliling-segitiga').style.display = 'block';
}

function resetForm(option) {
  document.getElementById(option).style.display = 'none';
}