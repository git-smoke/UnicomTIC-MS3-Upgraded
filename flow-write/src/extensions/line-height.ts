import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType
            unsetLineHeight: () => ReturnType
        }
    }
}