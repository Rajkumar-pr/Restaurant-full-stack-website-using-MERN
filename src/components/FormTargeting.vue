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
    <div class="colored-box">
      <h2>Targeting Box</h2>
      <p>Enter Email .....</p>
      <p>join...</p>
    </div>
    <router-link to="/behaviour"><button>success</button></router-link>
    <router-link to="/design"><button>pop up</button></router-link>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.colored-box {
  width: 400px;
  height: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 40px auto;
}

h2 {
  margin-bottom: 10px;
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
