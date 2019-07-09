const FrameworkSchema = new m.Schema({
        "title": {
            "type": "String",
            "unique": "Не бывает одинаковых title"
        },
        "votes": {
            "type": "Number",
        },
        "id": {
            "type": "Number",
            "unique": "Не бывает одинаковых id"
        }
    })
    const Framework = m.model('Framework', FrameworkSchema);

    //Create
    function createFr(title, votes, id) {
        try {
            const fr = new Framework({title, votes, id});
            fr.save();
        } catch (e) {
            console.log(e);
        }
    }

    // Read
    function readFr(title = '') {
        return Framework.findOne({title});
    }

    //Update
    function updateFr(title = '', createFr = {}) {
        try {
            Framework.updateOne({title}, {$set: createFr })
        } catch (e) {
            console.log(e);
        }
    }

    // Delete
    function deleteFr(title = '') {
        try {
            Framework.deleteOne({title});
        } catch (e) {
            console.log(e);
        }
    }
