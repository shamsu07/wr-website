import Link from "next/link";

export default function NotFound() {
    return (

        <div className="grid min-h-full place-items-center bg-darkGunmetal px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-spiroDiscoBall">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-blueSapphire px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-spiroDiscoBall hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <Link href="/contact" className="text-sm font-semibold text-gray-400 hover:text-spiroDiscoBall">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
    )
  }
  