// use jquery ajax object to get data from api
//upon successful data recieiving, run createVisitorUser() function 
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        createVisitorUser(data);
    }
});

//a function to create the visitor user when the page is loaded
//store first name in variable firstName
//store last name in variable lastName
//combine first name last name using firstname+" "+lastname
//use jquery selector $("#visitorName").html() and change html
function createVisitorUser(data) {
    firstName = data.results[0].name.first;
    lastName = data.results[0].name.last;
    $("#visitorName").html(firstName + " " + lastName);
}