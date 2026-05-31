const form = document.getElementById('userForm');
const successMsg = document.getElementById('success');
const users = [];

document.getElementById('submitBtn').addEventListener('click', () => {
    successMsg.textContent = '';
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(el => el.classList.remove('error'));

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const birthDate = document.getElementById('birthDate').value;
    const phone = document.getElementById('phone').value.trim();
    const country = document.getElementById('country').value;
    const gender = form.querySelector('input[name="gender"]:checked').value;

    const checkedSkills = form.querySelectorAll('input[name="skills"]:checked');
    const skills = [];
    for (let i = 0; i < checkedSkills.length; i++) {
        skills.push(checkedSkills[i].value);
    }

    const comment = document.getElementById('comment').value.trim();
    const agree = document.getElementById('agree').checked;

    let valid = true;

    const nameRegex = /^[A-Za-z]{2,}$/;
    if (!nameRegex.test(firstName)) { markError('firstName'); valid = false; }
    if (!nameRegex.test(lastName)) { markError('lastName'); valid = false; }

    if (!email.includes('@')) { markError('email'); valid = false; }

    if (password.length < 5 || password.includes(' ')) { markError('password'); valid = false; }

    if (!birthDate) { markError('birthDate'); valid = false; }

    if (!/^\+380\d{9}$/.test(phone)) { markError('phone'); valid = false; }

    if (skills.length < 2) {
        const allSkills = form.querySelectorAll('input[name="skills"]');
        for (let i = 0; i < allSkills.length; i++) {
            allSkills[i].classList.add('error');
        }
        valid = false;
    }

    if (comment.length < 10 || comment.length > 150) { markError('comment'); valid = false; }

    if (!agree) { markError('agree'); valid = false; }

    if (valid) {
        const user = { firstName, lastName, email, password, birthDate, phone, country, gender, skills, comment };
        users.push(user);
        console.log(users);
        successMsg.textContent = 'All fields are valid!';
    }
});

function markError(id) {
    document.getElementById(id).classList.add('error');
}
