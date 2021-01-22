<template>
  <div
    class="calendar-module d-flex flex-column justify-center"
    @click="setCalendar"
  >
    <div class="block--month-control d-flex justify-center">
      <button
        class="btn--prev-month"
        title="Go to the previous month"
        @click="handleClickToOtherMonth(-1)"
      >
        ◀
      </button>
      <button class="btn--go-today" title="Choose Today">Today</button>
      <button
        class="btn--next-month"
        title="Go to the next month"
        @click="handleClickToOtherMonth(1)"
      >
        ▶
      </button>
    </div>
    <div class="block--today">
      {{ timeset.year }}년 {{ timeset.month + 1 }}월 {{ timeset.date }}일
    </div>
    <div class="calendar d-flex">
      <div class="calendar-days d-flex">
        <div v-for="day in week" class="calendar-day" :key="day">
          {{ day.split("")[0] }}
        </div>
      </div>
      <div
        role="button"
        class="calendar-date"
        v-for="(date, index) in timeset.datesInThisMonth"
        :key="`${timeset.year}${timeset.month}${date}`"
        :style="index === 0 && timeset.firstDayStyle"
        @click="handleClickDate(timeset.year, timeset.month, date)"
        :class="{ clicked: date === +clicked }"
      >
        {{ date }}
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
        time: null,
        year: null,
        month: null,
        date: null
      },
      clicked: null,
      timeset: {
        year: null,
        month: null,
        date: null,
        datesInThisMonth: null,
        firstDay: null,
        firstDayStyle: null
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
    handleClickDate(year, month, date) {
      const toNumber = new Date(year, month, date);
      this.dueDate.time = toNumber.getTime();
      this.dueDate.year = toNumber.getFullYear();
      this.dueDate.month = toNumber.getMonth();
      this.dueDate.date = toNumber.getDate();
      this.clicked = date;
    },
    handleClickToOtherMonth(direction) {
      if (direction === -1) {
        if (this.timeset.month === 0) {
          --this.timeset.year;
          this.timeset.month = 11;
        }

        --this.timeset.month;
      } else {
        if (this.timeset.month === 11) {
          ++this.timeset.year;
          this.timeset.month = 0;
        }

        ++this.timeset.month;
      }

      console.log(this.timeset);
    },
    setCalendar(year, month, date) {
      let time;
      const setfirstDayStyle = num => ({
        marginLeft: `calc(${num * 2}rem + 1px)`
      });

      if (!year || !month || !date) {
        time = new Date();
      } else {
        time = new Date(year, month, date);
      }

      this.timeset.year = time.getFullYear();
      this.timeset.month = time.getMonth();
      this.timeset.date = time.getDate();

      this.timeset.datesInThisMonth = this.getDatesInMonth(
        this.timeset.year,
        this.timeset.month
      );
      this.timeset.firstDay = this.getFirstDayOfMonth(
        this.timeset.year,
        this.timeset.month
      );
      this.timeset.firstDayStyle = setfirstDayStyle(this.timeset.firstDay);
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

.block--month-control > button {
  border: 0;
  background-color: transparent;
  margin: 0 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
}

.block--month-control > button:hover {
  box-shadow: 0 0.25rem 0.3rem rgba(0, 0, 0, 0.25);
}

.block--today {
  margin: 1rem 0;
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
  background-color: green;
  color: #fff;
}
</style>
