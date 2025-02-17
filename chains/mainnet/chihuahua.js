module.exports = {
  chainID: 'chihuahua-1',
  lcd: 'https://api.chihuahua.wtf',
  gasAdjustment: 2,
  gasPrices: { uhuahua: 1 },
  prefix: 'chihuahua',
  coinType: '118',
  baseAsset: 'uhuahua',
  name: 'Chihuahua',
  icon: 'https://station-assets.terra.money/img/chains/Huahua.png',
  ibc: {
    fromTerra: 'channel-44',
    toTerra: 'channel-34',
  },
  explorer: {
    address: 'https://www.mintscan.io/chihuahua/account/{}',
    tx: 'https://www.mintscan.io/chihuahua/txs/{}',
    validator: 'https://www.mintscan.io/chihuahua/validators/{}',
    block: 'https://www.mintscan.io/chihuahua/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uhuahua',
      symbol: 'HUAHUA',
      name: 'Huahua',
      icon: 'https://station-assets.terra.money/img/coins/Huahua.png',
      decimals: 6,
    },
  ],
}
