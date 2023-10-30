<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Index Page</h1>
        <div>Data: {{ data }}</div>
      </v-col>
      <v-col cols="12">
        <v-btn :loading="pending" color="primary" @click="execute()">Send API Request</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
const { execute, data, pending } = await useLazyFetch('/api/hello-world');
</script>
