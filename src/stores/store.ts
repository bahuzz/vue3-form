import {defineStore} from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('Store', () => {
    const accounts = ref([])

    function addAccount() {

    }

    return {
        accounts
    }

})