<template>
  <q-card square class="computer-card absolute-top q-mt-sm">
    <q-card-section>
      <h1 class="text-h2 text-center q-my-md">Computer</h1>
      <div class="row q-gutter-sm justify-center">
        <q-btn
          v-for="option in options"
          :key="option"
          :label="option"
          :color="option === picked ? 'red' : 'grey'"
          disable
        />
      </div>
    </q-card-section>
  </q-card>
</template>
<script setup>
import { options } from 'src/services/game-service'

defineProps({
  picked: {
    type: String,
    default: null,
  },
})
</script>
<style scoped>
.computer-card {
  width: 700px;
  margin-left: auto;
  margin-right: auto;
}
</style>
