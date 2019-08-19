<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <router-view/>-->
    <div id="todo_input">
      <button v-on:click="alertMsg(inputMsg)">添加</button>
      <label>
        <input type="text" v-model="inputMsg"/>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'helloFirst',
  filters: {
    transUpper: function (input) {
      return input.toUpperCase()
    }
  },
  data () {
    return {
      inputMsg: '请输入代办事项'
    }
  },
  methods: {
    alertMsg: function (inputMsg) {
      alert(inputMsg)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
