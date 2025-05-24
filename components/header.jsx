import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowLeftIcon, CarFrontIcon, HeartIcon } from "lucide-react"
import { checkUser } from "@/lib/checkUser"

export const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser()

  const isAdmin = user?.role === "ADMIN";

  return (
    <header className="fixed top-0 tertiary w-full backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? "/admin" : "/"} className="flex">
          <Image 
            src={'/vehiclr_logo.png'}
            alt="Vehiclr Logo"
            width={250}
            height={50}
            className="w-20 object-contain"
          />
          {isAdminPage && (
            <span className="text-xs font-extralight">admin</span>
          )}
        </Link>

        <div className="flex items-center space-x-4">
          {
            isAdminPage ? (
              <Link href={"/"}>
                  <Button variant={"outline"} className="flex items-cemter gap-2">
                    <ArrowLeftIcon size={18} />
                    <span className="hidden md:inline">Back to App</span>
                  </Button>
                </Link>
            ) : (
              <SignedIn>
                <Link href={"/saved-cars"}>
                  <Button>
                    <HeartIcon size={18} />
                    <span className="hidden md:inline">Saved Cars</span>
                  </Button>
                </Link>
                {!isAdmin ? (
                    <Link href={"/reservations"}>
                      <Button variant={"outline"}>
                        <CarFrontIcon size={18} />
                        <span className="hidden md:inline">My Reservations</span>
                      </Button>
                    </Link>
                  ) : (
                    <Link href={"/admin"}>
                      <Button variant={"outline"}>
                        <CarFrontIcon size={18} />
                        <span className="hidden md:inline">Admin Portal</span>
                      </Button>
                    </Link>
                  )}
              </SignedIn>
            )
          }
          <SignedOut>
            <SignInButton forceRedirectUrl="/">
              <Button variant={"outline"}>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10"
                }
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
