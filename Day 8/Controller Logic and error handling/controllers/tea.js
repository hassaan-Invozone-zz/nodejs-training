//GET '/tea'
const getAllTea = (req, res, next) => {
    try {
        res.json({message: "GET all tea"});
    } catch (error) {
        res.json({error: error});
    }
};

//POST '/tea'
const newTea = (req, res, next) => {
    try {
        console.log(req.query)
        res.json({message: "POST new tea"});
    } catch (error) {
        res.json({error: error});
    }
};

//DELETE '/tea'
const deleteAllTea = (req, res, next) => {
    try {
        res.json({message: "DELETE all tea"});
    } catch (error) {
        res.json({error: error});
    }
};

//GET '/tea/:name'
const getOneTea = (req, res, next) => {
    try {
        res.json({message: `GET ${req.params.name.toUpperCase()} tea`});
    } catch (error) {
        res.json({error: error});
    }

};

//POST '/tea/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 tea comment"});
};

//DELETE '/tea/:name'
const deleteOneTea = (req, res, next) => {
    try {
        res.json({message: "DELETE 1 tea"});
    } catch (error) {
        res.json({error: error});
    }

};

//export controller functions
module.exports = {
    getAllTea,
    newTea,
    deleteAllTea,
    getOneTea,
    newComment,
    deleteOneTea
};
