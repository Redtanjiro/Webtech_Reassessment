// LOAD VISITOR USER

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
//do same for all other information
function createVisitorUser(data) {
    // update Name
    var firstName = data.results[0].name.first;
    var lastName = data.results[0].name.last;
    $("#visitorName").html(firstName + " " + lastName);

    // update Email
    var email = data.results[0].email;
    $("#visitorEmail").html(email);

    // gender
    var gender = data.results[0].gender;
    $("#visitorGender .infoContent").html(gender);

    // age
    var age = data.results[0].dob.age;
    $("#visitorAge .infoContent").html(age);

    // bday - to make it appear properly
    //recieved in format of 1971-05-18T05:46:28.364Z
    //so we need to remove everything after T character
    //we will find the position using indexOf
    //then using slice extract that part of string 
    var bday = data.results[0].dob.date;
    var i = bday.indexOf("T");
    bday = bday.slice(0, i);
    $("#visitorBday .infoContent").html(bday);

    // country
    var country = data.results[0].location.country;
    $("#visitorCountry .infoContent").html(country);

    // phone
    var phone = data.results[0].phone;
    $("#visitorPhoneno .infoContent").html(phone);
}


//LOAD RESULTS

///event handler for starting api request
//attach event handler to #searchButton div
//read value from dropdown
//use value to create api query
//call the api to recieve data and run another function to change html
$("#searchButton").on("click", function () {
    //get value from select tag to see how many results user wants to see
    var numberOfResults = $("#numberOfResults").val();

    //the final url to be provided to $.ajax is set here
    var query = 'https://randomuser.me/api/?results=' + numberOfResults;

    //ask api to send data, and run function updateResults() on success
    $.ajax({
        url: query,
        dataType: 'json',
        success: function (data) {
            updateResults(data);
        }
    });
});
///Function to update the html
// read length of data array
// create for loop with ^ number of cycles
// read first information from data object
// 
function updateResults(data) {
    //loop to iterate through data
    console.log(data.results.length);
    var card = $(".results .card"); //select card
    var name = card.find("#resultName .resultInfo");    //select name
    var age = card.find("#resultAge .resultInfo");      //select age
    var bday = card.find("#resultBday .resultInfo");    //select dob
    var email = card.find("#resultEmail .resultInfo");   //select email

    for (var i = 0; i < data.results.length; i++) {

    }


}