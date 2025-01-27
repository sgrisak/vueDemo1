Vue.createApp({
  // because this is an object, we can write the property name
  // 'data' that has a function as a value. It could have been
  // written like this:
  //data: function {...}, but this is more modern:
  data() {
    return {
      goals: [],
      // we connect the following piece to the HTML document with
      // "v-model='enteredValue'". This allows us to take in the value
      // the user has typed in.
      enteredValue: "",
    };
  },
  // to take the enteredValue and add it to "goals", we do this:
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    // Vue establishes the connection to 'this'. The above code will be
    // triggered when the button on the html is clicked.
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
// }

// buttonEl.addEventListener("click", addGoal);
