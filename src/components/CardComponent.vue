<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4" v-for="(card, index) in cards" :key="index">
        <div 
          :class="`card p-2 shadow mt-3 ${isNightMode ? 'text-white' : 'text-dark'}`"
          :style="cardStyle"
        >
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input custom-checkbox-color" type="checkbox" :id="'flexCheckDefault' + index" :checked="card.checked" @change="handleCheckboxChange">
              <label class="form-check-label ms-2 poppins-semibold" :for="'flexCheckDefault' + index">
                {{ $t('Total Sales') }}
              </label>
            </div>
            <div class="ms-0">
              <p class="card-text poppins-medium">{{ $t('cardMsg') }}</p>
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
        { id: 1, checked: false },
        { id: 2, checked: false },
        { id: 3, checked: false },
        { id: 4, checked: false },
        { id: 5, checked: false },
        { id: 6, checked: false },
      ],
    };
  },
  computed: {
    cardStyle() {
      return {
        backgroundColor: this.isNightMode ? '#424242' : '#fff',
      };
    },
  },
  methods: {
    handleCheckboxChange() {
      this.$emit('card-checkbox-clicked'); // Emit the event to notify parent component
    },
  },
};
</script>
<style scoped>
.custom-checkbox-color:checked {
  background-color: #6C5ECF;
}
</style>
