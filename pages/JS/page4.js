(document).ready(function() {
    $("form#ratingForm").submit(function(e) 
    {
        e.preventDefault(); // prevent the default click action from being performed
        if ($("#ratingForm :radio:checked").length == 0) {
            $('#status').html("nothing checked");
            return false;
        } else {
            $('#status').html( 'You picked ' + $('input:radio[name=rating]:checked').val() );
        }
    });
});

// overlay
function on() {
document.getElementById("overlay").style.display = "block";
}
  
function off() {
document.getElementById("overlay").style.display = "none";
}