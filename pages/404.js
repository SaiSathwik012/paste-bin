import Link from "next/link";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Custom404() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                <h1 className="text-5xl font-extrabold">404</h1>
                <p className="text-slate-600 max-w-md">
                    This link is no longer available. It may have expired or reached its
                    access limit.
                </p>
                <Link href="/">
                    <Button size="lg">Return to Home</Button>
                </Link>
            </div>
        </Layout>
    );
}
