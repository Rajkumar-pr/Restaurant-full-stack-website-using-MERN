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
    <router-link to="/success"><button class="continue-button">Continue</button></router-link>
    <div class="form-type-section">
      <div class="popup-options">
        <h3>Show the Popup When Visitor:</h3>
        <div>
          <input type="radio" id="entersWebsite" value="entersWebsite" v-model="selectedPopupOption">
          <label for="entersWebsite" class="popup-option">Enters Website</label>
        </div>
        <div>
          <input type="radio" id="exitsWebsite" value="exitsWebsite" v-model="selectedPopupOption">
          <label for="exitsWebsite" class="popup-option">Exits Website</label>
        </div>
        <div>
          <input type="radio" id="increasingDecreasingPercentage" value="increasingDecreasingPercentage" v-model="selectedPopupOption">
          <label for="increasingDecreasingPercentage" class="popup-option">On 
            <input type="number" v-model="percentageValue" />
            <span>
              <select v-model="percentageUnit">
                <option value="%">%</option>
              </select>
            </span>
          Page scroll</label>
        </div>
        <div>
          <input type="radio" id="after" value="after" v-model="selectedPopupOption">
          <label for="after" class="popup-option">After
            <input type="number" v-model="afterSeconds" />
            <span>
              <select v-model="afterTimeUnit">
                <option value="seconds">Seconds</option>
                <option value="minutes">Minutes</option>
              </select>
            </span>
          </label>
        </div>
      </div>
      <router-link to="/beha"><button class="continue-button">Advance</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormType',
  data() {
    return {
      pages: ['Type', 'Design', 'Content', 'Targeting', 'Behaviour', 'Success'],
      afterSeconds: 0,
      afterTimeUnit: 'seconds',
      selectedPopupOption: '',
      percentageValue: 0,
      percentageUnit: '%',
    };
  },
  methods: {
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

.continue-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.popup-option {
  cursor: pointer;
  margin-top: 5px;
}

.popup-option:hover {
  color: #3498db;
}

.form-type-section {
  text-align: center;
  padding: 80px;
}
</style>
