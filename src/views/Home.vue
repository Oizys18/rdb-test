<template>
  <div class="home">
    <input type="text" v-model="message" />
    <p></p>
    <button @click="saveD">Save a message</button>
    <hr />
    <input type="text" v-model="todolist" />
    <p></p>
    <button @click="saveTL">create a todolist</button>
    <hr />
    <!-- <input type="text" v-model="todo">
    <button @click="saveT">create a todo</button> -->
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "home",
  data() {
    return {
      message: "",
      todolist: ""
    };
  },
  methods: {
    saveD() {
      // Get a reference to the database service
      firebase
        .database()
        .ref("timestamp/" + Date.now())
        .set({
          message: this.message
        });
    },
    saveTL() {
      firebase
        .database()
        .ref("todolist/" + Date.now())
        .set({
          todolist: this.todolist
        });
    }
  }
};
</script>
