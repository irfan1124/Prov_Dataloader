import path from 'path';
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';

const resolversArray = fileLoader(path.join(__dirname, './resolver'), { extensions: ['.js'] });
export default mergeResolvers(resolversArray);