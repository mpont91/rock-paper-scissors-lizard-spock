<template>
  <q-btn
    :disabled="!pick"
    color="grey-5"
    class="pick"
    size="lg"
    round
    @click="$emit('click')"
  >
    <q-avatar v-if="pick" :size="buttonSizing">
      <img :alt="pick" :src="`${pick}.webp`" />
    </q-avatar>
  </q-btn>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { options } from 'src/services/game-service'
import { computed } from 'vue'

defineProps({
  pick: {
    type: String,
    default: null,
    validator: (value) => [null, ...options].includes(value),
  },
})
defineEmits(['click'])

const $q = useQuasar()
const buttonSizing = computed(() => sizings[$q.screen.name])
const sizings = {
  xs: '40px',
  sm: '70px',
  md: '90px',
  lg: '100px',
  xl: '100px',
}
</script>

<style scoped>
.pick {
  min-width: v-bind('buttonSizing');
  min-height: v-bind('buttonSizing');
}
</style>
