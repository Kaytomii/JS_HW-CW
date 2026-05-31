const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const generateBtn = document.getElementById('generate');
const titleEl = document.getElementById('title');
const calendarEl = document.getElementById('calendar');

const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
];

generateBtn.addEventListener('click', generateCalendar);

function generateCalendar() {
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);
    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) return;

    titleEl.textContent = monthNames[month - 1] + ', ' + year;
    calendarEl.innerHTML = '';

    const headerRow = document.createElement('tr');
    const days = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
    days.forEach(d => {
        const th = document.createElement('th');
        th.textContent = d;
        headerRow.appendChild(th);
    });
    calendarEl.appendChild(headerRow);

    const firstDay = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const startIndex = (firstDay.getDay() + 6) % 7;

    let row = document.createElement('tr');
    for (let i = 0; i < startIndex; i++) {
        row.appendChild(document.createElement('td'));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
            calendarEl.appendChild(row);
            row = document.createElement('tr');
        }
        const td = document.createElement('td');
        td.textContent = day;
        row.appendChild(td);
    }

    if (row.children.length > 0) {
        while (row.children.length < 7) {
            row.appendChild(document.createElement('td'));
        }
        calendarEl.appendChild(row);
    }
}
