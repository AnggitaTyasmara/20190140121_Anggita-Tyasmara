function DateandClock() {

    var today = new Date();
    var jam = today.getHours();
    var menit = today.getMinutes();
    var detik = today.getSeconds();

    //Hari dan Tanggal
    var tahun = today.getFullYear(); //tahun
    var bulan = today.getMonth(); // bulan
    var hari = today.getDay(); // hari
    var tanggal = today.getUTCDate(); //tanggal
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    //Menambahkan AM dan PM
    var AmPm = ( jam , 12 ) ? "AM" : "PM";

    //Ubah komponen jam ke format 12 jam
    jam = (jam > 12 ) ? jam - 12 : jam;

    // Isi jam, menit, dan detik dengan angka nol di depan
    jam = ("0" + jam).slice(-2);
    menit = ("0" + menit).slice(-2);
    detik = ("0" + detik).slice(-2);

    //Menampilkan jam
    document.getElementById('Clock').innerHTML =
    jam + " : " + menit + " : " + detik + " " + AmPm;
    var t = setTimeout(DateandClock, 500);

    //Menampilkan Tanggal
    document.getElementById('Date').innerHTML =
    months[bulan] + " " + tanggal + " " + days[hari] + " " + tahun;
}