import {Button} from "@/components/ui/button"
export default function Navbar() {
    return(
        <nav className = "flex items-center justify-between border-b px-6 py-4">
            <h1 className = "text-xl font-bold">Contract IQ</h1>
            <div className = "flex items-center gap-3">
                <Button variant= "outline">Login</Button>
                <Button>Get Started</Button>
            </div>
        </nav>
    );
}