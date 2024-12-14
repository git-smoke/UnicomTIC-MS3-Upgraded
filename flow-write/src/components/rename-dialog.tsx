"use client";
import { useMutation } from 'convex/react';
import { Id } from '../../convex/_generated/dataModel';
import { api } from '../../convex/_generated/api';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Button } from './ui/button';



interface RenameDialogProps {
    documentId: Id<"documents">;
    initialTitle: string;
    children: React.ReactNode;
}

export const RenameDialog = ({ documentId, initialTitle, children }: RenameDialogProps) => {

    const update = useMutation(api.documents.updateById);
    const [isUpdating, setIsUpdating] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const [open, setOpen] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <form action="">
                    <DialogHeader>
                        <DialogTitle>
                            Rename Document
                        </DialogTitle>
                        <DialogDescription>
                            Enter a new name for this document
                        </DialogDescription>
                    </DialogHeader>
                    <div className='my-4'>
                        <Input />
                    </div>
                    <DialogFooter>
                        <Button>
                            Cancel
                        </Button>
                        <Button>
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}