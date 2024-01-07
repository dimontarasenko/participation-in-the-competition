import { CoinStats } from '../../api/coin-stats/coin-stats.js';
import { ChainStates } from '../../api/chain/chain.js';
import { Blockscon } from '../../api/blocks/blocks.js';

let blocksCount = Blockscon.find({}).count();
console.log(blocksCount);

// Rectuting system
Proposals.rawCollection().createIndex({ proposalId: 1 }, { unique: true });

Recipes.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });

Nfts.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });

Cookbooks.rawCollection().createIndex({ ID: "1", NO: -1 }, { unique: true });

Transactions.rawCollection().createIndex({ "tx_response.logs.events.attributes.value": 1 });
Transactions.rawCollection().createIndex({
    "tx.body.messages.delegator_address": 1,
    "tx.body.messages.@type": 1,
    "tx_response.code": 1
}, { partialFilterExpression: { "tx_response.code": { $exists: true } } })

const INSTAGRAM_BOT = 4;
const DISCORD_BOT = 5;


AverageData.rawCollection().createIndex({ type: 1, createdAt: -1 }, { unique: true });
AverageValidatorData.rawCollection().createIndex({ proposerAddress: 1, createdAt: -1 }, { unique: true });
// Status.rawCollection.createIndex({})
