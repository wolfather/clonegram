import { ReactNode } from "react"
import { PostsProvider } from "./posts.provider"

type ProvidersProps = {
    children: ReactNode;
}

export const Providers = ({children}: ProvidersProps) => {
    return (
        <PostsProvider>{children}</PostsProvider>
    )
}