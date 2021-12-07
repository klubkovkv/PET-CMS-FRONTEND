export class ServerError implements Error {
    message: string;
    name: string;
    status: number;
    line: string;
    data?: unknown;

    constructor(params: {
        message: string;
        name: string;
        line?: string;
        status?: number;
        data?: unknown;
    }) {
        const { message, name, status = 500, line = '', data } = params;
        this.message = message;
        this.name = name;
        this.status = status;
        this.line = line;
        this.data = data;
    }
}
