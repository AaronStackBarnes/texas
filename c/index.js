document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("input-40");
  input.addEventListener("input", updateValue);

  function updateValue(e) {
    if (e.target.value != "pm2nkw") return;

    if (!alert("Submission Successful!")) {
      window.location.reload();
    }
  }
});
