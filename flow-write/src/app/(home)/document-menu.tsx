import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"

export const DocumentMenu = () => {
    return (
        <Button variant="ghost" size="icon" className="rounded-full">
            <MoreVertical className="size-4" />
        </Button>
    )
}