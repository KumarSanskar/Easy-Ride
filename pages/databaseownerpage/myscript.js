var phoneNo, nameV, genderV, roleV, addressV;

function readFom() {
    phoneNo = document.getElementById("phone").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    roleV = document.getElementById("role").value;
    addressV = document.getElementById("address").value;
    console.log(phoneNo, nameV, addressV, genderV, roleV);
}

document.getElementById("insert").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("user/" + phoneNo)
        .set({
            phoneNo: phoneNo,
            name: nameV,
            gender: genderV,
            role: roleV,
            address: addressV,
        });
    alert("Data Inserted");
    document.getElementById("phone").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("role").value = "";
    document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("user/" + phoneNo)
        .on("value", function (snap) {
            document.getElementById("phone").value = snap.val().phoneNo;
            document.getElementById("name").value = snap.val().name;
            document.getElementById("gender").value = snap.val().gender;
            document.getElementById("role").value = snap.val().role;
            document.getElementById("address").value = snap.val().address;
        });
};

document.getElementById("update").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("user/" + phoneNo)
        .update({
            //   phoneNo: phoneNo,
            name: nameV,
            gender: genderV,
            role: roleV,
            address: addressV,
        });
    alert("Data Update");
    document.getElementById("phone").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("role").value = "";
    document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("user/" + phoneNo)
        .remove();
    alert("Data Deleted");
    document.getElementById("phone").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("role").value = "";
    document.getElementById("address").value = "";
};