export default function SystemError(apiError) {
    if (apiError.status === 401) {
        this.type = "authentication";
    } else if (apiError.status === 403) {
        this.type = "authorization";
    } else if (apiError.status < 500) {
        this.type = "client";
    } else if (apiError.status > 499) {
        this.type = "server";
    }

    this.messages = apiError.data.errors.map(function(error) {
        return error.message;
    });
}