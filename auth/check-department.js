module.exports = (department) => {
    return (req, res, next)  => {
        if(department === req.user.department) {//check the role matches user
            next();
    } res.status(403).json({ you: "you do not have clearance" })
}
}