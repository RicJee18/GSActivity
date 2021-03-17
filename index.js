$(document).ready(function () {

    $("button").click(function () {
        
        $.ajax({
            url: "text.json",
            dataType: "json",
            success: function (data) {
               console.log(data);
               for (var e of data) {
                     $("#myTable").append("<tr><td>" + e.fname + "</td><td>" + e.lname + "</td><td>" + e.email + "</td></tr>")
                }
            }
        });

    });

    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
 });

    

