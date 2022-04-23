// testing example code to see how is information recieved
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
    }
});

//a function to create the visitor user when the page is loaded
function createVisitorUser(data) {

}