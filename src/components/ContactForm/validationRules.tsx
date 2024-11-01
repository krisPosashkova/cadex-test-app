export const validationRules = {
    name: {
        required: "The name is required to be filled in",
        minLength: {
            value: 2,
            message: "The name must contain at least 2 characters",
        },
    },
    email: {
        required: "The email is required to be filled in",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email format",
        },
    },
    message: {
        required: "The message is required to be filled in",
        minLength: {
            value: 10,
            message: "The message must contain at least 10 characters",
        },
    },
};
