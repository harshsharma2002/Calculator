const {MongoClient} = require('mongodb');
const uri = process.env.DB_URL;
const dbName = process.env.dbName;

let db=null;
module.exports ={
    connectToDb: (cb) =>{
        MongoClient.connect(uri)
        .then(client =>{
            db = client.db(dbName);
            cb();
        })
        .catch(err => cb(err));
    },
    calculate: (req) => {
        const obj = {
            "equation": req.body.data,
            "ans": eval(req.body.data),
            "dateTime": Date.now()
        };
        db.collection('calc').insertOne(obj)
            .then(ack => ack)
            .catch(err => console.error(err));

        return obj.ans;
    },
    history: () => {
        let history = [];
        return db.collection('calc')
        .find({})
        .forEach(element => {
            const obj = {
                "equation": element.equation,
                "ans": element.ans
            }
            history.push(obj);
        })
        .then( () => history)
        .catch ( err => console.error(err));
    },
    updateHistory: async() =>{
        try{
            const count = await db.collection('calc').countDocuments({});
            if(count>20){
                const data = await db.collection('calc').findOne({},{ sort: { dateTime: 1} })
            }
            db.collection('calc')
            .deleteOne({_id: data._id})
        }
        catch(err){
            throw err;
        }
    },
    clearHistory: ()=>{
        return db.collection('calc').deleteMany({});
    }
}