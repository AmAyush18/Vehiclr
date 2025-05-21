import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs"

export const Header = () => {
  return (
    <div>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
    </div>
  )
}
