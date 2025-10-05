<template>
    <div class="flex">
        <div class="col flex">
          <div class="col">
            <n-input
              v-model="labels"
              type="text"
              placeholder="Метки"
              maxlength="50"
              @blur="save"
              />
          </div>
          <div class="col">
            <n-select 
              v-model:value="accountType" 
              :options="options" 
              placeholder="Тип записи" 
              @update:value="save" 
              />
          </div>
        </div>
        <div class="col flex">
          <div class="col">
          <n-input
            v-model:value="login"
            type="text"
            placeholder="Логин"
            :status="loginStatus"
            maxlength="100"
            @blur="save"
            />
        </div>
        <div class="col" v-if="isLocal">
          <n-input
            type="password"
            v-model:value="password"
            show-password-on="mousedown"
            placeholder="Пароль"
            maxlength="100"
            :status="passwordStatus"
            @blur="save"
            />
        </div>
        </div>
        <n-icon size="24" :component="TrashAltRegular" color="#777"></n-icon>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { NInput, NSelect, NIcon, type FormValidationStatus } from 'naive-ui'
import { TrashAltRegular } from '@vicons/fa'
import { useStore } from '../stores/store'
import type { Account, Label } from '../types';

interface Props {
  account: Account
  index: number
}

const {account, index} = defineProps<Props>()

const store = useStore()

const options = [
  {
    label: 'Локальная',
    value: 'local'
  },
  {
    label: 'LDAP',
    value: 'ldap'
  } 
]
const labels = ref(account.labels)
const loginStatus = ref<FormValidationStatus>('success')
const passwordStatus = ref<FormValidationStatus>('success')
const login = ref(account.login)
const password = ref(account.password)
const accountType = ref(account.type)
const isLocal = computed(() => accountType.value === 'local')


const validation = () => {
  loginStatus.value = (!login.value) ? 'error' : 'success'
  passwordStatus.value = (password.value || password.value === null) ? 'success' : 'error'
  return loginStatus.value === 'success' && passwordStatus.value === 'success'
}

const save = () => {
  const labelsArr:Label[] = []
  if(!isLocal.value) password.value = null
  if(labels.value) {}
  const newAccount:Account = {
    type: accountType.value,
    login: login.value,
    password: password.value,
    labels: labelsArr
  }

  if(validation()) {
    store.saveAccount(newAccount, index)
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  .col {
    flex: 1 1 100%
  }

</style>