import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAtQ2weKacbsiqlMUU3Z8LTo2X3l5w6BcE",
  authDomain: "rdb-test-6294b.firebaseapp.com",
  databaseURL: "https://rdb-test-6294b.firebaseio.com",
  projectId: "rdb-test-6294b",
  storageBucket: "rdb-test-6294b.appspot.com",
  messagingSenderId: "404202952393",
  appId: "1:404202952393:web:71aa13546d1ea534515f18",
  measurementId: "G-390QYGGT1M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
