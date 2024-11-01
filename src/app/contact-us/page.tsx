import { generateMetadata } from "@/app/metadata";
import ContactForm from "@/components/ContactForm";
export const metadata = await generateMetadata({
    params: { page: "contact-us" },
});
export default function ContactUs() {
    return <ContactForm />;
}
