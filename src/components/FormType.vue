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
    <div class="spacer"></div>
    <div class="pages-section">
      <div class="page-options">
        <div v-for="(page, index) in pages" :key="page" class="page-option" @click="navigateToPage(page)">
          {{ page }}
          <span v-if="index < pages.length - 1">&#9658;</span>
        </div>
      </div>
    </div>
    <div class="form-type-section">
      <h1>Select Form Type</h1>
      <div class="form-type-container">
        <div class="form-type-box" @click="selectType('embedded')">
          <h2>Embedded Form</h2>
          <p>Embed the form directly on your website.</p>
        </div>
        <div class="form-type-box" @click="selectType('landing')">
          <h2>Landing Page</h2>
          <p>Create a standalone landing page for your form.</p>
        </div>
        <div class="form-type-box" @click="selectType('popup')">
          <h2>Popup Form</h2>
          <p>Show the form in a popup on your website.</p>
        </div>
      </div>
    </div>
    <router-link to="/design"><button>Continue</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'FormType',
  data() {
    return {
      pages: ['Type', 'Design', 'Content', 'Targeting', 'Behaviour', 'Success'],
    };
  },
  methods: {
    selectType(type) {
      console.log(`Selected Type: ${type}`);
    },
    navigateToPage(page) {
      console.log('Navigating to:', page);
    },
    navigateTo(option) {
      console.log(`Navigating to: ${option}`);
    },
  },
};
</script>

<style scoped>
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

.page-options {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  background-color: #fff;
  padding: 10px;
}

.page-option {
  cursor: pointer;
  margin-right: 5px;
}

.page-option span {
  margin-left: 5px;
}

.icon {
  margin-right: 10px;
  cursor: pointer;
}

.spacer {
  height: 20px;
}

.pages-section,
.form-type-section {
  text-align: center;
  padding: 20px;
}

.form-type-container {
  display: flex;
  justify-content: center;
}

.form-type-box {
  flex: 0 0 200px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  height: 250px;
}

.form-type-box:hover {
  background-color: #f0f0f0;
}

h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.0em;
  margin-bottom: 150px;
}

p {
  font-size: 0.9em;
  margin-bottom: 5px;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
