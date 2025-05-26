const monthYear = document.getElementById("calendar-month-year");
const calendarBody = document.getElementById("calendar-body");
const nextMonthBtn = document.getElementById("next-month");
const prevMonthBtn = document.getElementById("prev-month");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  monthYear.textContent = `${monthNames[month]} ${year}`;


  calendarBody.innerHTML = "";

  let dateCount = 1;
  for (let i = 0; i < 6; i++) { 
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) { 
      const cell = document.createElement("td");
      if (i === 0 && j < firstDay) {
        cell.innerHTML = "";
      } else if (dateCount > lastDate) {
        cell.innerHTML = "";
      } else {
        cell.textContent = dateCount;

        const today = new Date();
        if (
          dateCount === today.getDate() &&
          month === today.getMonth() &&
          year === today.getFullYear()
        ) {
          cell.classList.add("today");
        }

        dateCount++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}


renderCalendar(currentDate);


nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});
