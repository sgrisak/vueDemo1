const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    // add() {
    //   this.counter = this.counter + 1;
    // },
    // subtract() {
    //   this.counter = this.counter - 1;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    // "event" below can be any name I want. Since, in the index.html
    // we are pointing to the *reference* to the "setName" method/function
    // and not actually calling (or executing) the function, javascript will
    // pass one argument: an object describing the event that occured. That
    // one argument (or parameter) is what we are passing into the setName
    // function.
    setName(event, lastName) {
      // this is just vanilla javascript. This event object that we named
      // "event" has a target named event.target. That target has a value
      // property that we can now access.
      this.name = event.target.value;
      // this.name = event.target.value + " " + lastName;
    },
  },
});

app.mount("#events");
