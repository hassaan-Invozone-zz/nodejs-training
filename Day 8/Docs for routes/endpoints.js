module.exports = function (app) {
    app.get('/users/:id', (req, res) => {
        // #swagger.tags = ['User']
        // #swagger.description = 'This is end point.'

        const filtro = req.query.filtro

        return res.status(404).send(false)

    })

}
