import { z } from 'zod';

// Define a Zod schema for the form data
export const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 8 characters long"),
});
export const formSchemaSignup = z.object({
    firstName: z.string().min(1, "First name is required."),
    lastName: z.string().min(1, "Last name is required."),
    // username: z.string().min(1, "Username is required."),  // Uncomment if username is needed
    companyName: z.string().min(1, "Company name is required."),
    email: z.string().email("Invalid email address."),
    // password: z.string().min(8, "Password must be at least 8 characters long."), // Uncomment if password is needed
    countryCode: z.string().min(1, "Country code is required."),
    phoneNumber: z.string().min(10, "Phone number is required and must be at least 10 digits."),
    mobileCountryCode: z.string().min(1, "Mobile country code is required."),
    mobileNumber: z.string().min(10, "Mobile number is required and must be at least 10 digits."),
    billingAddress1: z.string().min(1, "Billing address 1 is required."),
    billingAddress2: z.string().optional(), // Optional field
    billingAddress3: z.string().optional(), // Optional field
    city: z.string().min(1, "City is required."),
    postcode: z.string().min(1, "Postcode is required."),
    merchantTerms: z.number().refine(val => val === 1, { message: "You must agree to the merchant terms." }), 
    vendorTerms: z.number().refine(val => val === 1, { message: "You must agree to the vendor terms." }), 
    auctionTerms: z.number().refine(val => val === 1, { message: "You must agree to the auction terms." }),
    jobTerms: z.number().refine(val => val === 1, { message: "You must agree to the job terms." })
  })