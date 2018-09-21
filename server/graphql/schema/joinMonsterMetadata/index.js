import { merge} from 'lodash';

import commodity from './commodity'
import token from './token'
import commodityData from './commodityData'

console.log(merge(commodity, token, commodityData));

exports.joinMonsterMetadata =  merge(commodity, token, commodityData);