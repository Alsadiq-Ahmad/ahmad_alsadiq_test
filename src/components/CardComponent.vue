<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4" v-for="(card, index) in cards" :key="index">
        <div 
          :class="`card p-2 shadow mt-3 ${isNightMode ? 'text-white dark-bg' : 'text-dark white-bg'}`"
          
        >
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input switch-bg" type="checkbox" :id="'flexCheckDefault' + index" :checked="card.checked" @change="handleCheckboxChange">
              <label class="form-check-label ms-2 poppins-semibold" :for="'flexCheckDefault' + index">
                {{ $t(card.label) }}
              </label>
            </div>
            <div class="ms-0">
              <p class="card-text poppins-medium">{{ $t(card.text) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    isNightMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cards: [
        { id: 1, checked: false, label: 'card.label1', text: 'card.text1' },
        { id: 2, checked: false, label: 'card.label2', text: 'card.text2' },
        { id: 3, checked: false, label: 'card.label3', text: 'card.text3' },
        { id: 4, checked: false, label: 'card.label4', text: 'card.text4' },
        { id: 5, checked: false, label: 'card.label5', text: 'card.text5' },
        { id: 6, checked: false, label: 'card.label6', text: 'card.text6' },
      ],
    };
  },
  methods: {
    handleCheckboxChange() {
      this.$emit('card-checkbox-clicked'); // Emit the event to notify parent component
    },
  },
};
</script>

<style scoped>

</style>
