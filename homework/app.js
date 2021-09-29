function Button() {
    let firstName = prompt("Please enter your firstname", "");
    let surName = prompt("Please enter your surname", "");
    let lastName = prompt("Please enter your lastname", "");
    let phoneNumber = prompt("Please enter your phonenumber", "");
    let x = prompt("Please enter a random number", "");
    let y = prompt("Please enter a smaller number", "");

    alert("Cảm ơn " + surName + "_" + lastName + "_" + firstName + "! 1 tỉ sẽ được chuyển vào số điện thoại " + phoneNumber + " của bạn. Giờ hãy vào phần console để xem kết quả");
    console.log("Bài 1:Tên bạn là: " + surName + "_" + lastName + "_" + firstName)
    console.log("Bài 2:Số dư là:", x%y);
    console.log("Bài 3:Số kí tự của số điện thoại là:", phoneNumber.length);


}





