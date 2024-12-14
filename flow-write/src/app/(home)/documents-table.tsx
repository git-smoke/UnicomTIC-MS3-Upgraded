import { PaginationStatus } from "convex/react";
import { Doc } from "../../../convex/_generated/dataModel";
import { LoaderIcon } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DocumentsTableProps {
    documents: Doc<"documents">[] | undefined;
    loadMore: (numItems: number) => void;
    status: PaginationStatus
}

export const DocumentsTable = ({
    documents,
    loadMore,
    status,
}: DocumentsTableProps) => {
    return (
        <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-5">
            Documents Table
        </div>
    )
}