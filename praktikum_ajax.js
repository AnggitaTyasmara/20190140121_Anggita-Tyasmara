/**
 * AJAX 
 * AJAX = Asynchronous Javascript and XML.
 * AJAX atau Asynchronous Javascript and XML adalah teknik 
 * yang di gunakan untuk membuat website yang dinamis.
 * Artinya website mampu mengupdate dan menampilkan 
 * data baru dari server tanpa perlu melakukan reload.
 * 
 * Pada praktikum ini, kita akan menggunakan AJAX Jquery
 */


// Fungsi AJAX Jquery untuk meload isi file

$(function (){
    $("#nama").load("test.txt")
})

/**
 * Berikut merupakan fungsi untuk fetch data dari internet menggunakan AJAX Jquery
 * Kita menggunakan https://jsonplaceholder.typicode.com/photos sebagai urlnya,
 */

$(function(){
    let url = "https://jsonplaceholder.typicode.com/photos";
    //Mengambil buttom untuk fetch data
    //Boleh hilangkan Line 26 dan 46 jika ingin data langsung terload saat membuka 
    //browser
    $("#getPost").on("click",function(){
        //Memanggil Jquery AJAX
        $.ajax({
            //Memanggil variabel url
            url : url,
            //Menggunakan GET request
            type : 'GET',
            //Jika Sukses
            success: function(data){
                let data_html = '';
                //looping data (Ambil satu persatu data)
                $.each(data,function(i,item){
                    
                    //Mengkonversi hasil loop tadi ke HTML
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '" alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '.' + item.title + '</h1>'
                });

                //Memasukan hasil LOOP tadi ke div dengan id #data_hasil_dari_internet

                $("#data_hasil_dari_internet").html(data_html); 
            },
            
            //Jika Error
            error : function(error){
                //Tampilkan Console.log
                console.log(error);
            }
        })
    });
});