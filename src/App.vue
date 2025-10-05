<template>
  <div class="container">
    <div class="header">
        <h1>Учетные записи</h1>   
        <n-icon :component="Plus" size="20" @click="addAccount" class="add-btn"></n-icon>
    </div>
    <AccountsList />
  </div>
</template>

<script setup lang="ts">
import AccountsList from './components/AccountsList.vue'
import { NIcon } from 'naive-ui';
import { Plus } from '@vicons/fa';
import { useStore } from './stores/store';

const store = useStore()

const addAccount = () => {
  store.addAccount()
}

</script>

<style scoped>
  .container {
    padding: 0 30px;
  } 

  .header {
    display: flex;
    align-items: center;
 
  }

  .add-btn {
    padding: 10px;
    cursor: pointer;
  }
</style>
