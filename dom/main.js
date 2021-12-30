function handleLogin(event) {
  event.preventDefault();
  let form = document.forms["myForm"];
  let firstName = form["first-name"].value;
  let phoneNumber = form["phone-number"].value;
  let errors = [];
  if (firstName !== "phuoc") {
    errors.push("First Name is required");
  }
  if (phoneNumber !== "123") {
    errors.push("Phone number is required");
  }

  console.log(errors);
  if (!errors.length) {
    console.log("dang nhap thanh cong");
    /*
    form.addEventListener("click", () => {
      form.submit();
    })
    */
    form.submit();
  }
}
