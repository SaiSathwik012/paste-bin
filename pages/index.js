import { useState } from "react";
import Layout from "@/components/Layout";
import PasteForm from "@/components/home/PasteForm";
import PasteHistory from "@/components/home/PasteHistory";

export default function Home() {
    const [createdPastes, setCreatedPastes] = useState([]);

    const handlePasteCreated = (newPasteData) => {
        setCreatedPastes((prev) => [
            { ...newPasteData, createdAt: new Date() },
            ...prev,
        ]);
    };

    const dismissPaste = (id) => {
        setCreatedPastes((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <Layout>
            <div className="space-y-12">
                {/* Intro */}
                <section className="max-w-3xl space-y-4">
                    <h1 className="text-4xl font-semibold tracking-tight">
                        Secure Text Sharing
                    </h1>
                    <p className="text-slate-600 leading-relaxed">
                        Create short-lived text links with optional expiration and view
                        limits. Designed for sharing sensitive notes, logs, or code snippets
                        safely.
                    </p>
                </section>

                {/* Content */}
                <section className="grid grid-cols-1 xl:grid-cols-12 gap-12">
                    <div className="xl:col-span-8">
                        <PasteForm onPasteCreated={handlePasteCreated} />
                    </div>

                    <aside className="xl:col-span-4">
                        <PasteHistory
                            pastes={createdPastes}
                            onDismiss={dismissPaste}
                        />
                    </aside>
                </section>
            </div>
        </Layout>
    );
}
