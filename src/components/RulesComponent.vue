<template>
  <q-dialog persistent full-height full-width :model-value="showRules">
    <q-card>
      <q-card-section class="text-center">
        <q-btn
          icon="close"
          flat
          round
          class="absolute-top-right q-mt-sm q-mr-sm"
          @click="$emit('hide-rules')"
        />
        <h2 class="text-h5">Rules of the game</h2>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col col-12 col-md-6 text-center">
            <p
              v-for="(rule, i) in getRulesDescription()"
              :key="i"
              class="text-body1"
            >
              {{ rule }}
            </p>
          </div>
          <div class="col col-12 col-md-6 text-center">
            <q-img fit="contain" height="50vh" src="rules.png" />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="text-center">
        <q-btn color="black" size="lg" @click="$emit('hide-rules')">
          Start playing!
        </q-btn>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { getRulesDescription } from 'src/services/game-service'

defineProps({
  showRules: {
    type: Boolean,
    default: false,
  },
})
defineEmits(['hide-rules'])
</script>
