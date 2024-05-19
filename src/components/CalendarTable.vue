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
        <td>{{ showCell(0) }}</td>
        <td>{{ showCell(1) }}</td>
        <td>{{ showCell(2) }}</td>
        <td>{{ showCell(3) }}</td>
        <td>{{ showCell(4) }}</td>
        <td>{{ showCell(5) }}</td>
        <td>{{ showCell(6) }}</td>
      </tr>
      <tr style="height: 100px">
        <td>{{ showCell(7) }}</td>
        <td>{{ showCell(8) }}</td>
        <td>{{ showCell(9) }}</td>
        <td>{{ showCell(10) }}</td>
        <td>{{ showCell(11) }}</td>
        <td>{{ showCell(12) }}</td>
        <td>{{ showCell(13) }}</td>
      </tr>
      <tr style="height: 100px">
        <td>{{ showCell(14) }}</td>
        <td>{{ showCell(15) }}</td>
        <td>{{ showCell(16) }}</td>
        <td>{{ showCell(17) }}</td>
        <td>{{ showCell(18) }}</td>
        <td>{{ showCell(19) }}</td>
        <td>{{ showCell(20) }}</td>
      </tr>
      <tr style="height: 100px">
        <td>{{ showCell(21) }}</td>
        <td>{{ showCell(22) }}</td>
        <td>{{ showCell(23) }}</td>
        <td>{{ showCell(24) }}</td>
        <td>{{ showCell(25) }}</td>
        <td>{{ showCell(26) }}</td>
        <td>{{ showCell(27) }}</td>
      </tr>
      <tr style="height: 100px">
        <td>{{ showCell(28) }}</td>
        <td>{{ showCell(29) }}</td>
        <td>{{ showCell(30) }}</td>
        <td>{{ showCell(31) }}</td>
        <td>{{ showCell(32) }}</td>
        <td>{{ showCell(33) }}</td>
        <td>{{ showCell(34) }}</td>
      </tr>
      <tr v-if="calendar.rows === 6" style="height: 100px">
        <td>{{ showCell(35) }}</td>
        <td>{{ showCell(36) }}</td>
        <td>{{ showCell(37) }}</td>
        <td>{{ showCell(38) }}</td>
        <td>{{ showCell(39) }}</td>
        <td>{{ showCell(40) }}</td>
        <td>{{ showCell(41) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      calendar: new Calendar(3, 2024),
    };
  },
  methods: {
    showCell(i) {
      if (this.calendar.calendar[i]?.length === 0) {
        return "";
      } else {
        return this.calendar.calendar[i]?.join(" ");
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
</style>
