const FailureMessage = {
    status: "failure",
    code: false,
    message: "Error ",
    messageDate: Date.now()
}


const SuccessMessage = {
    status: "ok",
    code: true,
    message: "Process completed",
    messageDate: Date.now()
}


module.exports = { FailureMessage, SuccessMessage }