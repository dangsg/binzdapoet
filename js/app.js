$(document).ready(function () {
    
    $("header").load("../shared/header.html");
    $("footer").load("../shared/footer.html");
   
    $.getJSON('../json/artist.json',function(data){
        $.each(data.artists,function(i,art){
            $('#artist-list').append(
                '<div class="col-sm-4 col-md-3 artist-thumb">' +
                '<a href="../html/artist-detail.html" class="artist-anchor">' +
                '<div class="card">' +
                    '<img class="card-img-top" src="' + art.img + '" alt="Card image cap">' + 
                    '<div class="card-body">' +
                        '<h5 class="card-title text-center">' + art.name[0] + '</h5>' +
                    '</div></div></a></div>'
                );
        });

        let art = data.artists[0];
        $('#artist-title').html(art.name[0]);
        $('#art-img').attr("src",art.img);
        $('#art-name').html(art.name[1]);
        $('#art-dob').html(art.dob);
        $('#art-desc').load(art.desc);
    }).error(function(){
        alert('error');
    });


});


