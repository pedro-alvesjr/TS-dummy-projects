function log(message: string): void {
    console.log(message)
};

function throwError(errorMessage: string): never {
    console.log(errorMessage)
    throw new Error (errorMessage)
};

