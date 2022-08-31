<template>
  <q-card square class="player-card absolute-bottom q-mb-sm">
    <q-card-section>
      <div class="row q-gutter-sm justify-center">
        <q-btn
          :key="option"
          v-for="option in options"
          :label="option"
          :color="option === modelValue ? 'primary' : 'secondary'"
          @click="selectHandler(option)"
        />
      </div>
      <h1 class="text-h2 text-center q-my-md">Player</h1>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { options } from 'src/services/game-service'

defineProps({
  modelValue: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue', 'pick'])

const selectHandler = (option) => {
  emit('update:modelValue', option)
  emit('pick')
}
</script>
<style scoped>
.player-card {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
