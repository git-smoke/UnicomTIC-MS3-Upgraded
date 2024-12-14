import { Id } from '../../convex/_generated/dataModel';
import { DocumentInput } from '../app/documents/[documentId]/document-input';
"use client";


interface RemoveDialogProps {
    documentId: Id<"documents">;
    children: React.ReactNode;
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => { }