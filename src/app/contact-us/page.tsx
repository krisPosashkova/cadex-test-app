import { generateMetadata } from "@/app/metadata";
export const metadata = await generateMetadata({
    params: { page: "contact-us" },
});
export default function ContactUs() {
    return <div>Contact Us</div>;
}
