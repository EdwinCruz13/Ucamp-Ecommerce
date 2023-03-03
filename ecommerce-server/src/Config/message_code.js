const FailureMessage = {
    data: null,
    status: "failure",
    code: false,
    message: "Error ",
    messageDate: Date.now()
}


const SuccessMessage = {
    data: null,
    status: "ok",
    code: true,
    message: "Process completed",
    messageDate: Date.now()
}


module.exports = { FailureMessage, SuccessMessage }