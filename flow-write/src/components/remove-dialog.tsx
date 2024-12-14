import { Id } from '../../convex/_generated/dataModel';
import { AlertDialog } from './ui/alert-dialog';
"use client";


interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
    return (
        <AlertDialog />
    );
}