<template>
    <div v-for="account in accounts">
        <accounts-list-item></accounts-list-item>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import AccountsListItem from './AccountsListItem.vue';
import { useStore } from '../stores/store';

const store = useStore()
const accounts = computed(() => store.accounts)

</script>

<style scoped>

</style>