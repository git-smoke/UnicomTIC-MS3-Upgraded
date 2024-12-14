import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import { SiGoogleDocs } from "react-icons/si";

interface DocumentRowProps {
    document: Doc<"documents">;
}

export const DocumentRow = ({ document }: DocumentRowProps) => {
    return (
        <TableRow
            className="cursor-pointer"
        >
            <TableCell className="w-[50px]">
                <SiGoogleDocs />
            </TableCell>
        </TableRow>
    );
}