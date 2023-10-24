

<template>
  <div>
    <div class="top-bar">
      <div class="options">
        <div class="option" @click="navigateTo('dashboard')">Dashboard &#9650;</div>
        <div class="option" @click="navigateTo('campaigns')">Campaigns &#9650;</div>
        <div class="option" @click="navigateTo('audience')">Audience &#9650;</div>
        <div class="option" @click="navigateTo('automation')">Automation &#9650;</div>
      </div>
      <div class="navbar-right">
        <span class="icon">&#43;</span>
        <span class="icon">&#128269;</span>
        <span class="icon">&#128276;</span>
        <span class="icon">3x3 Matrix</span>
        <span class="icon">&#128100;</span>
      </div>
    </div>
    <div class="top-bar">
      <div class="options">
        <div class="option" @click="navigateTo('dashboard')">Dashboard &#9650;</div>
        <div class="option" @click="navigateTo('campaigns')">Campaigns &#9650;</div>
        <div class="option" @click="navigateTo('audience')">Audience &#9650;</div>
        <div class="option" @click="navigateTo('automation')">Automation &#9650;</div>
      </div>
      <div class="navbar-right">
        <span class="icon">&#43;</span>
        <span class="icon">&#128269;</span>
        <span class="icon">&#128276;</span>
        <span class="icon">3x3 Matrix</span>
        <span class="icon">&#128100;</span>
      </div>
    </div>
    <label for="boxSelector">Select a Box: </label>
    <select v-model="selectedBox" id="boxSelector">
      <option v-for="(box, index) in boxes" :key="index" :value="index">{{ box.heading }}</option>
    </select>

    <div v-if="selectedBox !== null">
      <div class="selected-box">
        <h2>{{ boxes[selectedBox].heading }}</h2>
        <p>Email: {{ boxes[selectedBox].email }}</p>
        <button @click="join(selectedBox)">Join</button>
      </div>
    </div>

    <div class="boxes-section">
      <div v-for="(box, index) in boxes" :key="index" class="box" :class="{ 'selected-box': index === selectedBox }">
        <h2>{{ box.heading }}</h2>
        <input v-model="box.email" type="email" placeholder="Enter Email" />
        <button @click="join(index)">Join</button>
      </div>
    </div>
    <router-link to="/target"><button>next</button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boxes: Array(8).fill('').map((_, index) => ({ email: '', heading: `Box ${index + 1}` })),
      selectedBox: null,
    };
  },
  methods: {
    join(index) {
      console.log(`Joining with email: ${this.boxes[index].email}`);
    },
    navigateTo(page) {
      console.log(`Navigating to: ${page}`);
    },
  },
};
</script>

<style scoped>
.boxes-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
}

.options {
  display: flex;
}

.option {
  padding: 10px;
  cursor: pointer;
}

.navbar-right {
  display: flex;
  align-items: center;
}
.box {
  width: 200px;
  padding: 20px;
  background-color: red;
  text-align: center;
  transition: background-color 0.3s ease;
}

.selected-box {
  background-color: #ff6666;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.boxes-section .selected-box {
  border: 2px solid #000;
}

h2 {
  margin-bottom: 10px;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.box:hover {
  background-color: #ff9999;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
}

.options {
  display: flex;
}

.option {
  padding: 10px;
  cursor: pointer;
}

.navbar-right {
  display: flex;
  align-items: center;
}
</style>
