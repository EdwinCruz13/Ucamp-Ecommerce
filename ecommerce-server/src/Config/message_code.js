
/**
 * class that contain the response of webapi
 */
class MessageResponse
{
    Message; Status; Data;
    constructor(_message, _status, _data)
    {
        this.Message = _message;
        this.Status = _status;
        this.Data = _data;
    }

    GetMessage() 
    {
        return {
            data: this.Data,
            status: (this.Status === true) ? "ok" : "failure",
            code: this.Status,
            message: this.Message,
            messageDate: Date.now()
        }
    }
}

//export class
module.exports = {MessageResponse}


/*const FailureMessage = {
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


module.exports = { FailureMessage, SuccessMessage }*/