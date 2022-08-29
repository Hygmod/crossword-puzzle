module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs', {gridSize: 2, row:0, column:0})
    }
}