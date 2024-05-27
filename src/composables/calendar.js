export class Calendar {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.firstDay = this.getFirstDay(month, year);
    [this.rows, this.calendar] = this.generateTable(month, year);
  }
  getFirstDay(month, year) {
    return new Date(year, month, 1).getDay();
  }
  getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }
  generateTable(month, year) {
    const firstDay = this.getFirstDay(month, year);
    const daysInMonth = this.getDaysInMonth(month, year);
    const calendar = [];

    const rows = Math.ceil((firstDay + daysInMonth) / 7);

    for (let i = 0; i < rows * 7; i++) {
      calendar.push([]);
    }
    for (let i = 0; i < daysInMonth; i++) {
      calendar[firstDay + i].push(i + 1);
    }

    return [rows, calendar];
  }
  generateHTMLTable() {
    const HTMLTable = [];

    for (const cell of this.calendar) {
      if (cell?.length === 0) {
        HTMLTable.push("");
      } else {
        let HTMLstring = "";
        for (const item of cell) {
          HTMLstring += `<p>${item}</p>`;
        }
        HTMLTable.push(HTMLstring);
      }
    }
    return HTMLTable;
  }
  addEvent(dateObject, title) {
    const eventDate = dateObject.getDate();
    this.calendar[this.firstDay + eventDate].push(title);
  }
  getCellDate(i) {
    const longMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (this.calendar[i][0]) {
      return [longMonths[this.month], this.calendar[i][0]];
    }
  }
}
