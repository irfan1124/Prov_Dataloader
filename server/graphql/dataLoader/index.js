import DataLoader from 'dataloader';

import { findCommodityDataByCommodityIDs } from '../../dataAccess/commodityData';
import { findCommodityDocumentsByIDs } from '../../dataAccess/commodity';


const dataLoader = () => (
    {
        findCommodityDataByCommodityIDs: new DataLoader(findCommodityDataByCommodityIDs, { cache: false }),
        findCommodityDocumentsByCommodityIDs: new DataLoader(findCommodityDocumentsByIDs),
    }
);

module.exports = {
    dataLoader
}