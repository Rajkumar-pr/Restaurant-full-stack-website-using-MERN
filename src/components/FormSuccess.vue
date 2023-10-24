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
    <div class="success-screen">
      <h1>Form Success</h1>
      <p>This is the screen visitors see after successfully submitting your form.</p>

      <form @submit.prevent="submitForm">
        <div>
          <label>Select Action:</label>
          <div v-for="option in options" :key="option.value">
            <input
              type="radio"
              :id="option.value"
              :value="option.value"
              v-model="selectedAction"
            />
            <label :for="option.value">{{ option.label }}</label>
            <div v-if="option.value === 'closePopup'">
              <label for="seconds">Seconds:</label>
              <input type="number" v-model="closePopupSeconds" />
            </div>
          </div>
        </div>

        <router-link link to="/design"><button>success</button></router-link>
      </form>

      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedAction: 'doNothing',
      closePopupSeconds: 5,
      options: [
        { label: 'Do Nothing', value: 'doNothing' },
        { label: 'Close Popup After', value: 'closePopup' },
        { label: 'Redirect to URL', value: 'redirectToUrl' },
      ],
    };
  },
  methods: {
    submitForm() {
      switch (this.selectedAction) {
        case 'doNothing':
          break;
        case 'closePopup':
          setTimeout(() => {
            this.closePopup();
          }, this.closePopupSeconds * 1000);
          break;
        case 'redirectToUrl':
          window.location.href = 'https://example.com'; // Replace with your URL
          break;
        default:
          break;
      }
    },
    closePopup() {
      console.log('Closing popup...');
    },
    goBack() {
      console.log('Going back...');
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

.spacer {
  height: 20px;
}

.success-screen {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 1.5em;
}

p {
  font-size: 1em;
}

form {
  margin-top: 20px;
}

button {
  margin-top: 10px;
}
</style>
