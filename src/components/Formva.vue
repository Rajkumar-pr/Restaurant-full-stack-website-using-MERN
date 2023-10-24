<!-- FormType.vue -->
<template>
    <div>
      <!-- Top Bar with Dashboard, Campaigns, Audience, Automation, and symbols -->
      <div class="top-bar">
        <div class="options">
          <!-- Dashboard, Campaigns, Audience, Automation Options with caret symbol -->
          <div class="option" @click="navigateTo('dashboard')">Dashboard &#9650;</div>
          <div class="option" @click="navigateTo('campaigns')">Campaigns &#9650;</div>
          <div class="option" @click="navigateTo('audience')">Audience &#9650;</div>
          <div class="option" @click="navigateTo('automation')">Automation &#9650;</div>
        </div>
  
        <!-- Right Side -->
        <div class="navbar-right">
          <!-- Plus, Search, Notification, 3x3 Matrix, and Profile Image symbols -->
          <span class="icon">&#43;</span>
          <span class="icon">&#128269;</span> <!-- Search symbol -->
          <span class="icon">&#128276;</span> <!-- Notification symbol -->
          <span class="icon">3x3 Matrix</span>
          <span class="icon">&#128100;</span>
        </div>
      </div>
  
      <!-- Space between top bar and the pages section -->
      <div class="spacer"></div>
  
      <!-- Pages Section with white background -->
      <div class="pages-section">
        <div class="page-options">
          <div v-for="(page, index) in pages" :key="page" class="page-option" @click="navigateToPage(page)">
            {{ page }}
            <!-- Display ">" symbol after each page except the last one -->
            <span v-if="index < pages.length - 1">&#9658;</span>
          </div>
        </div>
      </div>
  
      <!-- Space between pages and form type -->
      <router-link to="/success"><button class="continue-button">Continue</button></router-link>
  
      <!-- Select Form Type Section -->
      <div class="form-type-section">
        <!-- Popup Options -->
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
  
        <!-- New Section: How often to show the popup -->
        <h3>How often to show the popup</h3>
        <div>
          <label for="everyPageView">
            <input type="radio" id="everyPageView" value="everyPageView" v-model="showPopupFrequency">
            Every page view
          </label>
        </div>
        <div>
          <label for="everyNewSession">
            <input type="radio" id="everyNewSession" value="everyNewSession" v-model="showPopupFrequency">
            Every new browser session
          </label>
        </div>
        <div>
          <label for="after3Days">
            <input type="radio" id="after3Days" value="after3Days" v-model="showPopupFrequency">
            After 3 days
          </label>
        </div>
  
        <!-- New Section: When to stop showing the popup -->
        <h3>When to stop showing the popup</h3>
        <div>
          <label for="never">
            <input type="radio" id="never" value="never" v-model="stopPopupCondition">
            Never
          </label>
        </div>
        <div>
          <label for="onSuccessfulAction">
            <input type="radio" id="onSuccessfulAction" value="onSuccessfulAction" v-model="stopPopupCondition">
            If the visitor has successfully completed the action
          </label>
        </div>
        <div>
          <label for="after3Shows">
            <input type="radio" id="after3Shows" value="after3Shows" v-model="stopPopupCondition">
            If the visitor has successfully completed the action or the pop-up has been shown 3 times
          </label>
        </div>
      </div>
      <router-link to="/success"> <button type="box"> continue</button></router-link>
      <router-link to="/behaviour"> <button > Go back</button></router-link>
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
        showPopupFrequency: 'everyPageView',
        stopPopupCondition: 'never',
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
  /* ... (existing styles) ... */
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #3498db; /* Blue background color */
    color: #fff; /* White text color */
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
    justify-content: flex-end; /* Align pages to the right */
    gap: 10px;
    background-color: #fff; /* White background color for the entire line */
    padding: 10px; /* Adjust padding as needed */
  }
  
  .page-option {
    cursor: pointer;
    margin-right: 5px; /* Adjust the spacing between the pages */
  }
  
  .page-option span {
    margin-left: 5px; /* Adjust the spacing between the page and ">" symbol */
  }
  
  .icon {
    margin-right: 10px;
    cursor: pointer;
  }
  
  .continue-button {
    background-color: #4CAF50; /* Green background color */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
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
  