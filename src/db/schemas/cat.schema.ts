import * as waterline from 'waterline';
import * as sailsMongo from 'sails-mongo';
const WaterLain = new waterline();

const catSchema = waterline.Collection.extend({
    identity: 'cat',
    datastore: 'default',
    primaryKey: 'id',
    attributes: {
        id: {
            columnName: '_id',
            type: 'string',
        },
        name: {
            type: 'string',
            required: true,
        },
        age: {
            type: 'number',
            required: true,
        },
        breed: {
            type: 'string',
            required: true,
        },
    },
});

WaterLain.registerModel(catSchema);

const config = {
    adapters: {
        'mongo': sailsMongo,
    },
    datastores: {
        default: {
            adapter: 'mongo',
            url: '127.0.0.1:27017/CATAPI',
            schema: 'true',
            host: '127.0.0.1',
            port: 27017,
            database: 'CATAPI',
        },
    },
};

export function Cats(): Promise<any> {
    return new Promise((res, rej) => {
        WaterLain.initialize(config, (error, model) => {
            if (error) {
                rej(error);
            } else {
                res(model.collections.cat);
            }
        });
    });
}
