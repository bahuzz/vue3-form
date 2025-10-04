<template>
    <div class="flex">
        <n-input
            v-model="labels"
            type="text"
            placeholder="Метки"
            />
        <n-select v-model="accountType" :options="options" placeholder="Тип записи" />
        <n-input
            v-model="login"
            type="text"
            placeholder="Логин"
            />
         <n-input
            type="password"
            v-model="password"
            show-password-on="mousedown"
            placeholder="Пароль"
            :maxlength="8"
            />
        <n-icon size="28" :component="TrashAltRegular"></n-icon>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { NInput, NSelect, NIcon } from 'naive-ui'
import { TrashAltRegular } from '@vicons/fa'

const labels = ref('')
const login = ref('')
const password = ref('')
const accountType = ref(null)
const options = [
  {
    label: 'LDAP',
    value: 'null'
  },
  {
    label: 'Локальная',
    value: ''
  }

]
</script>

<style scoped>

</style>