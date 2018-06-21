import Realm from 'realm';
import User from "./User";

export default realm = new Realm({
    schema: [User]
});