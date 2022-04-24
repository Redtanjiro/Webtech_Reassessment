// use jquery ajax object to get data from api
//upon successful data recieiving, run createVisitorUser() function 
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data.results[0])
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