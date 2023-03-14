export const inputs = [
    {
        id: "fullName",
        label: "Full name",
        placeholder: "Full name",
        errorMessage: "Full name should be 3-16 characters",
        type: "text",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
    },
    {
        id: "email",
        label: "Email",
        placeholder: "Email",
        errorMessage: "It should be a valid email address",
        type: "email",
        required: true,
    },
    // {
            
    //     name: "message",
    //     label: "Your message to us",
    //     placeholder: "Your message to us",
    //     type: "text",
    // },
]