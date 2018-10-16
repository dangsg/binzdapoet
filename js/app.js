$(document).ready(function () {
    $("header").load("../shared/header.html");
    $("footer").load("../shared/footer.html");
});
$(document).ready(function () {
    $.getJSON('../json/artist.json',function(data){
        alert('success');
        $.each(data.artists,function(i,art){
            $('#artist-list').append(
                '<div class="card">' +
                    '<img class="card-img-top" src="' + art.img + '" alt="Card image cap">' + 
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + art.name + '</h5>' +
                        '<p class="card-text">' + art.desc + '</p>' +
                        '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>' +
                    '</div></div>'
                );
        });
    }).error(function(){
        alert('error');
    });
});