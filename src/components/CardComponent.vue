<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4" v-for="(card, index) in cards" :key="index">
        <div 
          :class="`card p-2 shadow mt-3 ${isNightMode ? 'bg-dark text-white' : 'bg-white text-dark'}`"
          @click="toggleCard(index)"
        >
          <div class="card-body">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" :id="'flexCheckDefault' + index" :checked="card.checked">
              <label class="form-check-label ms-2 fw-bold" :for="'flexCheckDefault' + index">
                {{$t('Total Sales')}}
              </label>
            </div>
            <div class="ms-0">
              <p class="card-text">{{$t('cardMsg')}}</p>
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
  methods: {
    toggleCard(index) {
      this.cards[index].checked = !this.cards[index].checked;
    },
  },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>