<template>
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
        <td v-html="cells[0]"></td>
        <td v-html="cells[1]"></td>
        <td v-html="cells[2]"></td>
        <td v-html="cells[3]"></td>
        <td v-html="cells[4]"></td>
        <td v-html="cells[5]"></td>
        <td v-html="cells[6]"></td>
      </tr>
      <tr style="height: 100px">
        <td v-html="cells[7]"></td>
        <td v-html="cells[8]"></td>
        <td v-html="cells[9]"></td>
        <td v-html="cells[10]"></td>
        <td v-html="cells[11]"></td>
        <td v-html="cells[12]"></td>
        <td v-html="cells[13]"></td>
      </tr>
      <tr style="height: 100px">
        <td v-html="cells[14]"></td>
        <td v-html="cells[15]"></td>
        <td v-html="cells[16]"></td>
        <td v-html="cells[17]"></td>
        <td v-html="cells[18]"></td>
        <td v-html="cells[19]"></td>
        <td v-html="cells[20]"></td>
      </tr>
      <tr style="height: 100px">
        <td v-html="cells[21]"></td>
        <td v-html="cells[22]"></td>
        <td v-html="cells[23]"></td>
        <td v-html="cells[24]"></td>
        <td v-html="cells[25]"></td>
        <td v-html="cells[26]"></td>
        <td v-html="cells[27]"></td>
      </tr>
      <tr style="height: 100px">
        <td v-html="cells[28]"></td>
        <td v-html="cells[29]"></td>
        <td v-html="cells[30]"></td>
        <td v-html="cells[31]"></td>
        <td v-html="cells[32]"></td>
        <td v-html="cells[33]"></td>
        <td v-html="cells[34]"></td>
      </tr>
      <tr v-if="calendar.rows === 6" style="height: 100px">
        <td v-html="cells[35]"></td>
        <td v-html="cells[36]"></td>
        <td v-html="cells[37]"></td>
        <td v-html="cells[38]"></td>
        <td v-html="cells[39]"></td>
        <td v-html="cells[40]"></td>
        <td v-html="cells[41]"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import events from "/public/events.json";

export default {
  props: {
    month: Number,
    year: Number,
  },
  data() {
    return {
      calendar: new Calendar(this.month, this.year),

      eventsinJSON: toRaw(events).events,

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
</style>
