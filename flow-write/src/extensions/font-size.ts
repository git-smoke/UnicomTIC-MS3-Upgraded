import { Extension } from "@tiptap/core";
import TextStyle from "@tiptap/extension-text-style";

declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        fontSize: {
            setFontSize: (size: string) => ReturnType;
            unsetFontSize: () => ReturnType;
        }
    }
}

export const FontSizeExtension = Extension.create({
    name: "fontSize",

    addExtensions() {
        return [
            TextStyle.configure()
        ];
    },

    addOptions() {
        return {
            types: ["textStyle"],
            defaultSize: "16px"
        };
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: (element) => {
                            // Safely extract font size from inline styles
                            const fontSize = element.style.fontSize;
                            return fontSize || null;
                        },
                        renderHTML: (attributes) => {
                            if (!attributes.fontSize) {
                                return {};
                            }

                            return {
                                style: `font-size: ${attributes.fontSize}`
                            };
                        }
                    }
                }
            }
        ];
    },

    addCommands() {
        return {
            setFontSize: (fontSize: string) => ({ chain, state }) => {
                // Ensure the font size is a valid CSS size value
                const sanitizedFontSize = fontSize.endsWith('px')
                    ? fontSize
                    : `${fontSize}px`;

                return chain()
                    .setMark('textStyle', { fontSize: sanitizedFontSize })
                    .run();
            },

            unsetFontSize: () => ({ chain }) => {
                return chain()
                    .setMark('textStyle', { fontSize: null })
                    .removeEmptyTextStyle()
                    .run();
            }
        };
    }
});