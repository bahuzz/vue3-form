<template>
    <div v-for="(account, index) in accounts" :key="index + account.login + account.password">
        <accounts-list-item :account :index></accounts-list-item>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import AccountsListItem from './AccountsListItem.vue';
import { useStore } from '../stores/store';

const store = useStore()
const accounts = computed(() => store.accounts)

</script>
