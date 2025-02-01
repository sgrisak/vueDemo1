// "Vue" is a globally available object due to the import statement
// from the CDN. Then we need to create the app.
Vue.createApp({
  // Inside of createApp, we should find an method named "data".
  // It returns an object. That
  // object is used to configure the app. One key option is "data". The
  // naming is required to be "data". The value stored in the data
  // property is a function. That function is required to return an
  // object and always an object. Not an array, not a number, not a
  // string. Inside of here you can setup any key/value pairs.

  // We use special syntax to tie the html and vue together to update
  // the view. That syntax is applied to the html elements.
  data() {
    return {
      courseGoalA: "Learn Vue!",
      courseGoalB: "Master Vue!",
      vueLink: "https://vuejs.org/",
    };
  },
  // We can also use the "methods" option. It allows you to define
  // functions that execute when something happens. This could be
  // when you call the function or when the user does something like
  // click a button. Methods takes an object. That object contains
  // functions.
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // The "this" keyword in this context is different from its javascript
        // context. Here, in Vue, it takes all of the data you return in the data
        // object (which is returned in the data method), and it merges it into
        // a global Vue instance object. Like, the Vue app. So the three data
        // properties above, are actually available from the global Vue app object.
        // The methods are als available though the global object and have access
        // to all of the properties through the "this" keyword.
        return this.courseGoalA;
        // return "Learn Vue!";
      } else {
        return this.courseGoalB;
        // return "Master Vue!";
      }
    },
    // So now that we've created our function, how do we call it?
    // You can call it in the html the same way we did interpolation
    // earlier. Like this: {{ outputGoal() }}
  },
}).mount("#user-goal");

// Could also have done:
// const app = Vue.createApp({
//
// }).mount("#user-goal")

// as well as:
// const app = Vue.createApp({
//     data: function() {
// }
// }).mount("#user-goal")
// But what we *are* using is the method shorthand. It is more modern
// js and should be preferred.

// Whatever element we end up mounting with the mount method is what
// we will control. We will also control all child elements of that
// element. Mount expects a css selector string. This is usually an
// ID selector.
