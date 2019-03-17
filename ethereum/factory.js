import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x628bEc66Ed5329B3F5ac0556A1a5867A9d0923Fb'
);

export default instance;
