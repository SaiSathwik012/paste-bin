import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Copy, Trash2, ExternalLink } from "lucide-react";

export default function PasteHistory({ pastes, onDismiss }) {
    const copyToClipboard = (url) => {
        navigator.clipboard.writeText(url);
        toast.success("Copied to clipboard");
    };

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-semibold">
                Session History
            </h2>

            {pastes.length === 0 ? (
                <div className="border border-dashed rounded-lg p-6 text-sm text-slate-500 text-center">
                    No pastes created in this session.
                </div>
            ) : (
                <div className="space-y-4">
                    {pastes.map((paste) => (
                        <Card
                            key={paste.id}
                            className="p-4 bg-white border"
                        >
                            <div className="space-y-3">
                                <p className="text-xs text-slate-500">
                                    {paste.createdAt.toLocaleTimeString()}
                                </p>

                                <div className="bg-slate-100 rounded-md px-3 py-2 font-mono text-xs truncate">
                                    {paste.url}
                                </div>

                                <div className="flex items-center justify-between">
                                    <a
                                        href={paste.url}
                                        target="_blank"
                                        className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
                                    >
                                        Open <ExternalLink className="h-3 w-3" />
                                    </a>

                                    <div className="flex gap-1">
                                        <Button
                                            size="icon-sm"
                                            variant="ghost"
                                            onClick={() => copyToClipboard(paste.url)}
                                        >
                                            <Copy className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            size="icon-sm"
                                            variant="ghost"
                                            className="text-red-500"
                                            onClick={() => onDismiss(paste.id)}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
