<template>
  <div class="d-flex flex-column align-center justify-center">
    <table align="center" style="width: 80%">
      <tr style="height: 50px">
        <th>SUN</th>
        <th>MON</th>
        <th>TUE</th>
        <th>WED</th>
        <th>THU</th>
        <th>FRI</th>
        <th>SAT</th>
      </tr>

      <tbody>
        <tr style="height: 100px">
          <CalendarCell
            v-for="n in 7"
            :html="cells[n - 1]"
            :i="n - 1"
            :class="{ selected: isCellSelected(n - 1) }"
            @select-cell="onCellSelect"
          ></CalendarCell>
        </tr>
        <tr style="height: 100px">
          <CalendarCell
            v-for="n in 7"
            :html="cells[n + 6]"
            :i="n + 6"
            :class="{ selected: isCellSelected(n + 6) }"
            @select-cell="onCellSelect"
          ></CalendarCell>
        </tr>
        <tr style="height: 100px">
          <CalendarCell
            v-for="n in 7"
            :html="cells[n + 13]"
            :i="n + 13"
            :class="{ selected: isCellSelected(n + 13) }"
            @select-cell="onCellSelect"
          ></CalendarCell>
        </tr>
        <tr style="height: 100px">
          <CalendarCell
            v-for="n in 7"
            :html="cells[n + 20]"
            :i="n + 20"
            :class="{ selected: isCellSelected(n + 20) }"
            @select-cell="onCellSelect"
          ></CalendarCell>
        </tr>
        <tr style="height: 100px">
          <CalendarCell
            v-for="n in 7"
            :html="cells[n + 27]"
            :i="n + 27"
            :class="{ selected: isCellSelected(n + 27) }"
            @select-cell="onCellSelect"
          ></CalendarCell>
        </tr>
        <tr v-if="calendar.rows === 6" style="height: 100px">
          <CalendarCell
            v-for="n in 7"
            :html="cells[n + 34]"
            :i="n + 34"
            :class="{ selected: isCellSelected(n + 34) }"
            @select-cell="onCellSelect"
          ></CalendarCell>
        </tr>
      </tbody>
    </table>

    <p class="my-10 text-h5">{{ selectedDate }}</p>
  </div>
</template>

<script>
import events from "/public/events.json";
import CalendarCell from "./CalendarCell.vue";

export default {
  props: {
    month: Number,
    year: Number,
  },
  components: {
    CalendarCell,
  },
  data() {
    return {
      calendar: new Calendar(this.month, this.year),

      eventsinJSON: toRaw(events).events,
      selectedDate: null,
      selectedCell: null,

      eventTypes: [
        { title: "Fundraising", color: "blue" },
        { title: "HAPPENING NOW!", color: "red" },
        { title: "External", color: "indigo" },
        { title: "FUN AND GAMES", color: "orange" },
      ],
    };
  },
  computed: {
    cells() {
      return this.calendar.generateHTMLTable();
    },
  },
  methods: {
    onCellSelect(i) {
      this.selectedCell = i;
      let month, day;
      [month, day] = this.calendar.getCellDate(i);
      this.selectedDate = `${day} ${month}`;
    },
    isCellSelected(i) {
      if (i === this.selectedCell) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
table {
  width: 80%;
  table-layout: fixed;

  border-collapse: collapse;
}

th {
  height: 20px;
  min-width: 50px;
  max-width: 50px;

  text-align: center;

  background-color: #fae3ce;

  font-size: 12px;
  font-weight: 600;
}

td {
  text-align: right;
  vertical-align: top;
  padding: 10px;

  font-size: 12px;
  font-weight: 700;
}

table,
th,
td {
  border: 1px solid #d3d3d3;
}

.selected {
  border: 2px solid black;
}
</style>
