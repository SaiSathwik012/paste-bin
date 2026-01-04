import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function PasteForm({ onPasteCreated }) {
    const [content, setContent] = useState("");
    const [ttl, setTtl] = useState("");
    const [maxViews, setMaxViews] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/pastes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content,
                    ttl_seconds: ttl ? parseInt(ttl) : undefined,
                    max_views: maxViews ? parseInt(maxViews) : undefined,
                }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Request failed");

            onPasteCreated(data);
            setContent("");
            setTtl("");
            setMaxViews("");
            toast.success("Link generated successfully");
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="border bg-white">
            <CardHeader className="space-y-2">
                <CardTitle className="text-xl">
                    Create a New Paste
                </CardTitle>
                <p className="text-sm text-slate-500">
                    The content will only be available through the generated link.
                </p>
            </CardHeader>

            <CardContent>
                <form id="paste-form" onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-2">
                        <Label>Content</Label>
                        <Textarea
                            placeholder="Paste your text, code, or notes here..."
                            className="min-h-[200px] font-mono text-sm"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Expiration (seconds)</Label>
                            <Input
                                type="number"
                                placeholder="Optional"
                                min="1"
                                value={ttl}
                                onChange={(e) => setTtl(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Maximum Views</Label>
                            <Input
                                type="number"
                                placeholder="Optional"
                                min="1"
                                value={maxViews}
                                onChange={(e) => setMaxViews(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </CardContent>

            <CardFooter className="border-t bg-slate-50 justify-end">
                <Button
                    form="paste-form"
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="px-8"
                >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Link
                </Button>
            </CardFooter>
        </Card>
    );
}
