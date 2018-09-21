import DataLoader from 'dataloader';

import { findCommodityDataByCommodityIds } from '../../dataAccess/commodityData';

const dataLoader = () => (
    {
        findCommodityDataByCommodityIds: new DataLoader(findCommodityDataByCommodityIds, { cache: false })
    }
);

module.exports = {
    dataLoader
}