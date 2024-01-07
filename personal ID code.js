import { CoinStats } from '../../api/coin-stats/coin-stats.js';
import { ChainStates } from '../../api/chain/chain.js';
import { Blockscon } from '../../api/blocks/blocks.js';

let blocksCount = Blockscon.find({}).count();
console.log(blocksCount);


Proposals.rawCollection().createIndex({ proposalId: 1 }, { unique: true });

Recipes.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });

Nfts.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });

Cookbooks.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });


AverageData.rawCollection().createIndex({ type: 1, createdAt: -1 }, { unique: true });
AverageValidatorData.rawCollection().createIndex({ proposerAddress: 1, createdAt: -1 }, { unique: true });
// Status.rawCollection.createIndex({})
