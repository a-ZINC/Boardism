"use client"
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient,AuthLoading,Authenticated } from "convex/react";
import Loading from "@/components/ui/Loading";

interface ConvexClientProviderProps{
    children:React.ReactNode
}

const convexurl=process.env.NEXT_PUBLIC_CONVEX_URL!;
const publishableKey=process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
const convex=new ConvexReactClient(convexurl);

export const ConvexClientProvider=({children}:ConvexClientProviderProps)=>{
    return(
        <ClerkProvider publishableKey={publishableKey}>
            <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
                <Authenticated>{children}</Authenticated>
                <AuthLoading><Loading/></AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
}