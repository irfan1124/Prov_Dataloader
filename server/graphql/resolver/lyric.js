import db from '../../db/config/config';

export default {
    Query: {
        lyrics : () => {
            return db.lyric.findAll({ })
        }
    }
}
