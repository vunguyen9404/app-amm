import { reactive, ref, computed } from 'vue'
import { MaybeHexString } from 'aptos'
import { MartianWalletAdapter as SuiMartianWalletAdapter } from '@martianwallet/sui-wallet-adapter'
import { TrustWallet } from '@trustwallet/aptos-wallet-adapter'
import {
  MartianWalletAdapter,
  AptosWalletAdapter,
  BaseWalletAdapter,
  FewchaWalletAdapter,
  HippoExtensionWalletAdapter,
  HippoWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  Coin98WalletAdapter,
  BloctoWalletAdapter,
  OkxWalletAdapter,
  TokenPocketWalletAdapter,
  BitkeepWalletAdapter,
  RiseWalletAdapter,
  HyperPayWalletAdapter,
  BitKeepSuiWalletAdapter,
  Coin98SuiWalletAdapter,
  OpenBlockWalletAdapter,
  EthosSuiWalletAdapter
} from '@/wallet'
import { useWalletStore } from '@/store/wallet'
import { useIndexStore } from '@/store/index'

import { SuietWalletAdapter } from '@suiet/wallet-adapter'
import { SuiWalletAdapter } from '@/wallet/SuiWallet'
// import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'
import { useI18n } from 'vue-i18n'
import { watch } from 'less'
export default function () {
  const walletStore = useWalletStore()
  const wallet = computed(() => {
    return walletStore
  })

  const counter = useIndexStore()
  const indexStore = computed(() => {
    return counter
  })

  const aptosWallets = [
    new MartianWalletAdapter(),
    new AptosWalletAdapter(),
    new FewchaWalletAdapter(),
    new HippoExtensionWalletAdapter(),
    new HippoWalletAdapter(),
    new PontemWalletAdapter(),
    new SpikaWalletAdapter(),
    new BloctoWalletAdapter(),
    new Coin98WalletAdapter(),
    new OkxWalletAdapter(),
    new TokenPocketWalletAdapter(),
    new BitkeepWalletAdapter(),
    new RiseWalletAdapter(),
    new HyperPayWalletAdapter(),
    new OpenBlockWalletAdapter(),
    new TrustWallet()
  ]

  const suiWallets = [
    new SuiWalletAdapter(),
    new SuietWalletAdapter(),
    new SuiMartianWalletAdapter(),
    new BitKeepSuiWalletAdapter(),
    new Coin98SuiWalletAdapter(),
    new EthosSuiWalletAdapter()
  ]

  // const wallets: any = computed(() => {
  //   if (indexStore.value.chainName === 'Sui') {
  //     return suiWallets
  //   } else {
  //     return aptosWallets
  //   }
  // })

  const currentWallet = reactive({ wallet: {} as BaseWalletAdapter })
  const isConnected = ref(false)
  const account = ref('' as MaybeHexString)
  const { $notify } = useNuxtApp()
  // const { t, locale } = useI18n()
  const connect = async (walletName: string, walletIcon: string, chainName: string = indexStore.value.chainName) => {
    walletStore.setSwitchWallet(false)
    const wallets: any = chainName === 'Sui' ? suiWallets : aptosWallets
    const selectedWallet = wallets.find((wAdapter: BaseWalletAdapter) => wAdapter.name.indexOf(walletName) > -1)
    if (selectedWallet) {
      if (walletStore.walletName == selectedWallet.name) {
        return false
      } else {
        try {
          const result = await selectedWallet.connect()
          currentWallet.wallet = selectedWallet
          let isConnected: any

          let account: any = ''

          if (chainName === 'Sui') {
            const arr = await selectedWallet.getAccounts()
            if (arr) {
              account = arr[0]
            }
            isConnected = account ? true : false
          } else {
            if (selectedWallet.name == 'Trust') {
              const accountInfo = await selectedWallet.account()
              account = accountInfo.address || ''
              isConnected = true
            } else {
              account = currentWallet?.wallet?.publicAccount?.address || ''
              isConnected = currentWallet?.wallet?.connected
            }
          }

          if (selectedWallet && selectedWallet.network && selectedWallet.network.name && selectedWallet.name !== 'Trust') {
            walletStore.setNetwork(selectedWallet.network.name)
          }
          walletStore.setCurrentWallet({
            wallet: selectedWallet,
            isConnected,
            account,
            platform: chainName,
            icon: walletIcon
          })

          localStorage.setItem(`cetus-${chainName}-current-wallet`, walletName)
          localStorage.setItem(`cetus-${chainName}-wallet-icon-name`, walletIcon)
          $notify.success({
            icon: h('svg', { class: { icon: true }, 'aria-hidden': true }, [h('use', { 'xlink:href': '#icon-icon-change1' })]),
            duration: 4.5,
            message: h('div', { class: 'notification-title' }, [h('span', { innerHTML: 'Wallet Connected' }, null)]),
            class: 'ant-notification-copy'
          })
        } catch (error: any) {
          if (error.name === 'WalletNotReadyError' || (error?.includes('Trust') && !(window as any)?.trustwallet)) {
            const installUrl = selectedWallet.url
            const description = [
              'Please install ',
              h('a', { href: installUrl, target: '_blank' }, `${walletName} wallet`),
              ' extension first'
            ]
            $notify.error({
              class: 'ant-notification-copy ant-notification-error',
              message: h('div', { class: 'notification-title' }, [h('span', { innerHTML: error.name || 'Rejected' }, null)]),
              description: h('div', description),
              duration: 4.5,
              icon: h('svg', { class: { icon: true }, 'aria-hidden': true }, [h('use', { 'xlink:href': '#icon-a-icon-Shutdown' })])
            })
            return
          }
          $notify.error({
            class: 'ant-notification-copy ant-notification-error',
            message: h('div', { class: 'notification-title' }, [h('span', { innerHTML: error.name || 'Rejected' }, null)]),
            description: 'Connect Wallet Failed',
            duration: 4.5,
            icon: h('svg', { class: { icon: true }, 'aria-hidden': true }, [h('use', { 'xlink:href': '#icon-a-icon-Shutdown' })])
          })
        }
      }
    }
  }

  const disconnect = async () => {
    if (currentWallet.wallet) {
      try {
        const result = await wallet.value.currentWallet.disconnect()
        // walletStore.setCurrentWallet(null)
        walletStore.setCurrentWallet({
          wallet: null,
          isConnected: false,
          account: '',
          platform: indexStore.value.chainName,
          icon: ''
        })
      } catch (error: any) {
        console.log('disconnect error###', error)
      }
    }
  }

  return {
    account,
    isConnected,
    currentWallet,
    connect,
    disconnect
  }
}
