<template>
  <div class="header">
      <h1>Учетные записи</h1>   
      <n-icon :component="Plus" size="20"></n-icon>
  </div>
  <AccountsList />
</template>

<script setup lang="ts">
import AccountsList from './components/AccountsList.vue'
import { NIcon } from 'naive-ui';
import { Plus } from '@vicons/fa';

</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    gap: 20px;  
  }
</style>
