export class Calendar {
  constructor(month, year) {
    this.month = month;
    this.year = year;
    this.firstDay = this.getFirstDay(month, year);
    [this.rows, this.calendar] = this.generateTable(month, year);
  }
  getFirstDay(month, year) {
    return new Date(year, month - 1, 1).getDay();
  }
  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
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
  addEvent(dateObject, title) {
    const eventDate = dateObject.getDate();
    this.calendar[this.firstDay + eventDate].push(title);
  }
}
