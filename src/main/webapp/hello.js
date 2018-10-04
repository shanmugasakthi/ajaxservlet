var app = new function () {
    var countries = [{ "countryname": "India", "countryid": 1 },
    { "countryname": "France", "countryid": 2 },
    { "countryname": "Germany", "countryid": 3 },
    { "countryname": "England", "countryid": 4 },
    { "countryname": "Spain", "countryid": 5 },
    { "countryname": "USA", "countryid": 6 }];

    var mode = "";
    var updateidx;

    this.getAllCountries = function () {
        this.el = document.getElementById('countries');
        //console.log("getAllCountries");
        var data = '';
        if (countries.length > 0) {

            for (i = 0; i < countries.length; i++) {
                
                data += '<tr>';
                data += '<tr>';
                data += '<td>' + countries[i].countryid + '</td>';
                data += '<td>' + countries[i].countryname + '</td>';
                data += '<td><button onclick="app.editCountry(' + countries[i].countryid + ')">Edit</button></td>';
                data += '<td><button onclick="app.deleteCountry(' + countries[i].countryid + ')">Delete</button></td>';
                data += '</tr>';
               
            }
        }

        this.el.innerHTML = data;
    };


    this.insertCountry = function () {
        //console.log("insertCountry");
    }

    this.getCountry = function (countryid) {
        //console.log("getCountry");
    }

    this.editCountry = function (countryid) {
        //console.log("editCountry " + countryid);
        mode = "edit";
        document.getElementById('btn').innerHTML = "Update";
        for (let index = 0; index < countries.length; index++) {
            // const element = array[index];
            //console.log(countries[index].countryid);
            if (countries[index].countryid == countryid) {
                //console.log(countries[index].countryid);
                updateidx = index;
                document.getElementById("countryid").value = countries[index].countryid;
                document.getElementById("countryname").value = countries[index].countryname;
                document.getElementById('countryid').readOnly = true;
                
            }

        }
    }

    this.deleteCountry = function (countryid) {

        //console.log("delete called " + countryid);
        //  var countryid = document.getElementById("countryid").value;
        // var countryname = document.getElementById('countryname').value;
        // countries.pop();
        //console.log("tobedeleted " + countryid);

        for (let index = 0; index < countries.length; index++) {
            // const element = array[index];
            //console.log(countries[index].countryid);
            if (countries[index].countryid == countryid) {
                //console.log(countries[index]);
                countries.splice(index, 1);
            }

        }

        // countries.splice(countries.indexOf(countryid), 1);
        //console.log(countries);
        this.getAllCountries();

    }

    this.saveorupdate = function (countryid) {
        //console.log("saveorupdate");
        var countryid = document.getElementById("countryid").value;
        var countryname = document.getElementById('countryname').value;
        //console.log(countryid + "-->" + countryname);
        if (mode == "") {


            var newcountry = { "countryid": countryid, "countryname": countryname };
            //console.log(newcountry);
            // .push({"01": nieto.label, "02": nieto.value});
            countries.push(newcountry);
            //console.log(JSON.stringify(countries));

        }
        else {
            //console.log("update called " + countryid);
            var updatecountry = { "countryid": countryid, "countryname": countryname };
            //console.log(updatecountry);
            // .push({"01": nieto.label, "02": nieto.value});
            // countries.push(updatecountry);
            //console.log("updateidx " + updateidx);
            countries.splice(updateidx, 1, updatecountry);
            document.getElementById('btn').innerHTML = "Add";

        }
        document.getElementById("countryid").value = "";
        document.getElementById("countryname").value = "";
        this.getAllCountries();
    }

};