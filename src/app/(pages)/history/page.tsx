import "../../../../public/styles.css"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { NavBar } from "@/components/NavBar";
import { validateRequest } from "@/database/auth";
import { redirect } from "next/navigation";
import { viewOrder } from "@/app/actions/checker"
import { ViewOrders } from "@/components/ViewOrders";
export default async function Page() {
    const { user } = await validateRequest()
    if (!user) {
        return redirect("/home")
    }
    const user_session_id = user.id
    const items = await viewOrder(user_session_id)

    return (<>
        <NavBar nav="history" />
        <br></br>
        <br></br>
        <br></br>
        <ViewOrders orders={items} userSessionId={user_session_id}/>

    </>)


}