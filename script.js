function calculateAge() {
    let dob = document.getElementById("dob").value;
    let result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Please enter your date of birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
