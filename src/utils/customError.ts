export class customError extends Error {
  public statusText: "failure" = "failure";
  public devMsg: string;
  public statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message.split(":")[1].trim());
    this.statusCode = statusCode;
    this.devMsg = message;
  }
}
