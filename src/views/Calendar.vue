<template>
  <div class="calendar-module d-flex">
    <div>
      <button title="Go to the previous month">◀</button>
      <strong>Today</strong>
      <button title="Go to the next month">▶</button>
    </div>
    <div>
      {{ thisYear }}
      {{ thisMonth }}
      {{ thisDate }}
    </div>
    <div class="calendar d-flex">
      {{ firstDay }}
      <div
        v-for="day in datesInThisMonth"
        :key="`${thisYear}${thisMonth}${day}`"
        class="calendar-day"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getDatesInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    }
  },
  computed: {
    thisYear() {
      return new Date().getFullYear();
    },
    thisMonth() {
      return new Date().getMonth() + 1;
    },
    thisDate() {
      return new Date().getDate();
    },
    datesInThisMonth() {
      return this.getDatesInMonth(this.thisYear, this.thisMonth);
    },
    firstDay() {
      return this.getFirstDayOfMonth(this.thisYear, this.thisMonth - 1);
    }
  }
};
</script>

<style scoped>
.calendar-module {
  flex-direction: column;
  align-items: center;
  background-color: honeydew;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
}

.calendar {
  flex-wrap: wrap;
  width: 25vw;
}

.calendar-day {
  width: 2rem;
  height: 2rem;
  background-color: gainsboro;
  line-height: 2rem;
  text-align: center;
}
</style>
