const env = 'pro'

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
      liquidswapDeployer: '0xb0a138f5867a160b2497c7d0045bc61a3aa98f5a',
      globalPauseStatusObjectId: '0xc6aa577a65e51a940000585866a455614e5bb03b',
      faucetObjectId: '0xd0551ff9c19daecd1ec81f2936a339459b6c20e',
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
      liquidswapDeployer: '0xb0a138f5867a160b2497c7d0045bc61a3aa98f5a',
      globalPauseStatusObjectId: '0xc6aa577a65e51a940000585866a455614e5bb03b',
      faucetObjectId: '0xd0551ff9c19daecd1ec81f2936a339459b6c20e',
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
      liquidswapDeployer: '0xb0a138f5867a160b2497c7d0045bc61a3aa98f5a',
      globalPauseStatusObjectId: '0xc6aa577a65e51a940000585866a455614e5bb03b',
      faucetObjectId: '0xd0551ff9c19daecd1ec81f2936a339459b6c20e',
      // rpcUrl: 'https://fullnode.testnet.sui.io',
      rpcUrl: 'https://fullnode.devnet.sui.io:443',
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
      liquidswapDeployer: '0xb0a138f5867a160b2497c7d0045bc61a3aa98f5a',
      globalPauseStatusObjectId: '0xc6aa577a65e51a940000585866a455614e5bb03b',
      faucetObjectId: '0xd0551ff9c19daecd1ec81f2936a339459b6c20e',
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
