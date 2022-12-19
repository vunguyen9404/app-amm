const env = 'pre'

// const platform = localStorage.getItem('chainName') || 'Aptos'
// const platform = 'Aptos'
const config = {
  pro: {
    Aptos: {
      liquidswapDeployer: '0xec42a352cc65eca17a9fa85d0fc602295897ed6b8b8af6a6c79ef490eb8f9eba',
      rpcUrl: 'https://fullnode.mainnet.aptoslabs.com',
      explorerUrl: 'https://explorer.aptoslabs.com',
      network: 'mainnet',
      api: 'https://api.cetus.zone'
    },
    Sui: {
      liquidswapDeployer: '0xda213317dfb64bd156efd6e4405045cf2ac29447',
      globalPauseStatusObjectId: '0x418a6a2b4665aa704b9180319e5bba880ed9aa06',
      faucetObjectId: '0x69f1910db3c0c66aaa9cfee728ea9501ae10b247',
      // rpcUrl: 'https://fullnode.testnet.sui.io',
      rpcUrl: 'https://fullnode.devnet.sui.io',
      explorerUrl: 'https://explorer.sui.io/',
      network: 'devnet',
      api: 'https://api.devcetus.com'
    }
  },
  pre: {
    Aptos: {
      liquidswapDeployer: '0xec42a352cc65eca17a9fa85d0fc602295897ed6b8b8af6a6c79ef490eb8f9eba',
      rpcUrl: 'https://fullnode.mainnet.aptoslabs.com',
      explorerUrl: 'https://explorer.aptoslabs.com',
      network: 'mainnet',
      api: ' https://pre-api.devcetus.com'
    },
    Sui: {
      liquidswapDeployer: '0xda213317dfb64bd156efd6e4405045cf2ac29447',
      globalPauseStatusObjectId: '0x418a6a2b4665aa704b9180319e5bba880ed9aa06',
      faucetObjectId: '0x69f1910db3c0c66aaa9cfee728ea9501ae10b247',
      // rpcUrl: 'https://fullnode.testnet.sui.io',
      rpcUrl: 'https://fullnode.devnet.sui.io',
      explorerUrl: 'https://explorer.sui.io/',
      network: 'devnet',
      api: 'https://api.devcetus.com'
    }
  },
  test: {
    Aptos: {
      liquidswapDeployer: '0x2dd7a57e5637468c02c72df4af7397897f3bc8066372ecf79c90136fb4d16ab7',
      rpcUrl: 'https://testnet.aptoslabs.com',
      explorerUrl: 'https://explorer.aptoslabs.com',
      network: 'testnet',
      api: 'https://api.devcetus.com'
    },
    Sui: {
      liquidswapDeployer: '0xda213317dfb64bd156efd6e4405045cf2ac29447',
      globalPauseStatusObjectId: '0x418a6a2b4665aa704b9180319e5bba880ed9aa06',
      faucetObjectId: '0x69f1910db3c0c66aaa9cfee728ea9501ae10b247',
      // rpcUrl: 'https://fullnode.testnet.sui.io',
      rpcUrl: 'https://fullnode.devnet.sui.io',
      explorerUrl: 'https://explorer.sui.io/',
      network: 'devnet',
      api: 'https://api.devcetus.com'
    }
  },
  dev: {
    Aptos: {
      liquidswapDeployer: '0x1ce98d89494e9d3d7935bc3bd5fc714fc2abb99db3f024162552c4ba172f4d28',
      rpcUrl: 'https://fullnode.devnet.aptoslabs.com',
      explorerUrl: 'https://explorer.aptoslabs.com',
      network: 'devnet',
      api: 'https://api.devcetus.com'
    },
    Sui: {
      liquidswapDeployer: '0x2b8f54bf724fa62789299569210d6c94758dd636',
      globalPauseStatusObjectId: '0x877cd08c02a2faa110a020f4f203304b114d76d2',
      faucetObjectId: '0x61df0e8caaf7b241d137fdc97906e3ca6bd68cca',
      rpcUrl: 'https://fullnode.testnet.sui.io',
      explorerUrl: 'https://explorer.sui.io/',
      network: 'testnet',
      api: 'https://api.devcetus.zone'
    }
  }
}

export default {
  ...config[env]
}
