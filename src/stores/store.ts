import {defineStore} from 'pinia'
import { ref } from 'vue'
import type { Account } from '../types'

export const useStore = defineStore('Store', () => {
    
    const accounts = ref<Account[]>([])

    const local = localStorage.getItem('accounts')

    if(local) {
        accounts.value = JSON.parse(local)
    }

    function addAccount() {
        const account:Account = {
            type: 'local',
            login: '',
            password: ''
        }
        accounts.value.push(account)
        localStorage.setItem('accounts', JSON.stringify(accounts.value))
    }

    function saveAccount(account:Account, index: number) {
        accounts.value[index] = account
        localStorage.setItem('accounts', JSON.stringify(accounts.value))
    }

    function removeAccount(index:number) {
        accounts.value.splice(index, 1)
        localStorage.setItem('accounts', JSON.stringify(accounts.value))
    }

    return {
        accounts,
        addAccount,
        saveAccount,
        removeAccount
    }

})