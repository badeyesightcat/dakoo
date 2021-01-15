<template>
  <div class="calendar-module d-flex flex-column justify-center">
    <div class="d-flex justify-center">
      <button title="Go to the previous month">◀</button>
      <button title="Choose Today">Today</button>
      <button title="Go to the next month">▶</button>
    </div>
    <div>
      {{ initTime.year }}년 {{ initTime.month + 1 }}월 {{ initTime.date }}일
    </div>
    <div class="calendar d-flex">
      <div class="calendar-days d-flex">
        <div v-for="day in week" class="calendar-day" :key="day">
          {{ day.split("")[0] }}
        </div>
      </div>
      <div
        v-for="(day, index) in initTime.datesInThisMonth"
        :key="`${initTime.year}${initTime.month}${day}`"
        class="calendar-date"
        :style="index === 0 && firstDayStyle"
        @click="clickDate(initTime.year, initTime.month, day)"
        role="button"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ],
      dueDate: {
        date: null
      }
    };
  },
  methods: {
    getDatesInMonth(year, month) {
      return new Date(year, month, 0).getDate();
    },
    getFirstDayOfMonth(year, month) {
      return new Date(year, month, 1).getDay();
    },
    clickDate(year, month, date) {
      const toNumber = new Date(year, month - 1, date);
      this.dueDate.date = toNumber.getTime();
      console.log(this.dueDate);
    }
  },
  computed: {
    initTime() {
      const currentTime = new Date();
      const init = {};

      init.year = currentTime.getFullYear();
      init.month = currentTime.getMonth();
      init.date = currentTime.getDate();

      init.datesInThisMonth = this.getDatesInMonth(init.year, init.month);

      console.log(init);
      return init;
    },
    datesInThisMonth() {
      return this.getDatesInMonth(this.initTime.year, this.initTime.month);
    },
    firstDay() {
      return this.getFirstDayOfMonth(this.initTime.year, this.initTime.month);
    },
    firstDayStyle() {
      return {
        marginLeft: `calc(${this.firstDay * 2}rem + 1px)`
      };
    }
  }
};
</script>

<style scoped>
.calendar-module {
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  width: 16rem;
  margin: 0 auto;
  padding: 1rem 0;
}

.calendar {
  flex-wrap: wrap;
  width: 14rem;
}

.calendar-day,
.calendar-date {
  width: calc(2rem - 2px);
  height: calc(2rem - 2px);
  line-height: 2rem;
  text-align: center;
  margin: 1px;
}

.calendar-day {
  text-transform: capitalize;
  background-color: darkgreen;
  color: #fff;
  font-weight: bold;

}

.calendar-date {
  background-color: gainsboro;
  cursor: pointer;
}

.calendar-date.clicked {
  background-color: wheat;
}
</style>
