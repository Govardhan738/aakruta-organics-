
var options = {
    "key": "rzp_test_YourKeyHere",
    "amount": "50000",
    "currency": "INR",
    "name": "Aakruta Organics",
    "description": "Test Transaction",
    "handler": function (response){
        alert("Payment ID: " + response.razorpay_payment_id);
    }
};
document.getElementById('pay').onclick = function(e){
    var rzp = new Razorpay(options);
    rzp.open();
    e.preventDefault();
}
