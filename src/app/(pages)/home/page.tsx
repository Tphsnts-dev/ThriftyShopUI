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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInForm } from "@/components/SignInForm";
import { SignUpForm } from "@/components/SignUpForm";
export default async function Home() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Dialog>
                  <DialogTrigger style={{ position: 'relative', left: '79em', top: '8px' }}>Sign-in</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Log-in</DialogTitle>
                      <DialogDescription>
                        Please Sign in to Proceed in Ordering
                       <SignInForm />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" style={{ position: 'relative', left: '90em' }}>Sign-up</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Create an Account</SheetTitle>
                      <SheetDescription>
                        To Proceed in Pre-Ordering Items, Kindly Create an Account first
                      </SheetDescription>
                    </SheetHeader>
                    <SignUpForm />
                  </SheetContent>
                  <SheetFooter>
                    <SheetClose asChild>
                    </SheetClose>
                  </SheetFooter>
                </Sheet>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <section className="animate-slide-fade relative">
        <div className="home_page">
          <div className="home_img">
            <img src="https://i.postimg.cc/t403yfn9/home2.jpg" alt="img" className="h-700 w-full object-cover" />
          </div>
          <div className="home_txt absolute top-1/3 left-10">
            <p className="text-3xl md:text-5xl collectio text-primary font-semibold pb-5 uppercase tracking-wider">Thrifty Haven</p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-none pb-5">A ONE-STOP SHOP<br />FOR CLOTHING </h2>
            <div className="home_label">
              <span className="text-gray-500 text-sm">Discover vintage vibes at our thrift shop! From retro tees to classic denim,<br /> find your next fashion statement with us. Shop sustainable style today!</span>
            </div>
            <br></br>
            <Dialog>
              <DialogTrigger className="bg-black text-white border-none py-4 px-8 text-base font-semibold tracking-wide flex items-center mb-8" style={{ left: '500px' }}>SHOP NOW</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log-in</DialogTitle>
                  <DialogDescription>
                    Please Sign in to Proceed in Ordering
                   <SignInForm />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <div className="flex justify-center" style={{ marginTop: "50px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-36">
          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <CardTitle>Tops</CardTitle>
              <CardDescription>Effortlessly chic, this timeless piece seamlessly blends comfort with style, perfect for any occasion.</CardDescription>
            </CardHeader>
            <CardContent>
              <section className="mx-auto w-fit">
                <div className="w-72 h-fit group">
                  <div className="relative overflow-hidden">
                    <img className="h-96 w-full object-cover" src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t31.18172-8/13576656_986978981400198_574511200447317271_o.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEVk7wDY8oypg8AmqRTyi5DkRgUA0aOQA6RGBQDRo5ADtXke63U0qXXFxIdr7LOGxmH4B5TiDWnI0uiPNrDili-&_nc_ohc=un303r9c90MAb6ihBy_&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfBAs-3qcGFszpDKLw16oR5Gvf8NGiSoO1RD9N3WDZ6kNA&oe=66557AAF" alt="" />
                    <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Dialog>
                        <DialogTrigger className="bg-black text-white py-2 px-5" style={{ left: '500px' }}>Shop Now</DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Log-in</DialogTitle>
                            <DialogDescription>
                              Please Sign in to Proceed in Ordering
                             <SignInForm />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <CardTitle>Bottoms</CardTitle>
              <CardDescription>Crafted for both comfort and flair, these bottoms elevate any ensemble with their impeccable fit and versatile design.</CardDescription>
            </CardHeader>
            <CardContent>
              <section className="mx-auto w-fit">
                <div className="w-72 h-fit group">
                  <div className="relative overflow-hidden">
                    <img className="h-96 w-full object-cover" src="https://www.therail.com.ph/cdn/shop/products/Artboard6_16e1709f-1bfb-46cc-8f49-87de9d3eb35d-433881_720x.jpg?v=1656513981" alt="" />
                    <div className="absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Dialog>
                        <DialogTrigger className="bg-black text-white py-2 px-5" style={{ left: '500px' }}>Shop Now</DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Log-in</DialogTitle>
                            <DialogDescription>
                              Please Sign in to Proceed in Ordering
                             <SignInForm />
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>



      <div className="animate-slide-fade mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-start items-center space-y-6 lg:space-y-0 lg:space-x-0">
          <div className="w-full lg:w-1/2 lg:pr-12 flex flex-col justify-start items-start">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">About Us :</p>
            </div>
            <div className="mt-4 lg:w-4/5 xl:w-3/5">
              <p className="text-base leading-6 text-gray-600 dark:text-white">Thrifty Haven, where every item tells a story. Our curated collection of pre-loved treasures brings new life to fashion, homeware, and beyond. With a passion for sustainability and style, we offer a unique blend of timeless classics and trendy finds, all at affordable prices. At Thrifty Haven, every purchase not only enhances your wardrobe or living space but also contributes to a greener, more conscious world. Join us in the joy of thrift shopping and discover the magic of secondhand gems at Thrifty Haven.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
            <div className="">
              <img className="hidden lg:block" src="https://www.wetteeshirt.co/wp-content/uploads/bella-canvas-t-shirt-mockup-featuring-a-smiling-man-and-woman.jpg" width="432" height="296" />
              <img className="w-80 sm:w-auto lg:hidden" src="https://www.wetteeshirt.co/wp-content/uploads/bella-canvas-t-shirt-mockup-featuring-a-smiling-man-and-woman.jpg" width="432" height="296" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img className="hidden lg:block" src="https://thehowler.org/wp-content/uploads/2023/01/trend.jpg" width="296" height="200" />
                <img className="w-80 sm:w-auto lg:hidden" src="https://thehowler.org/wp-content/uploads/2023/01/trend.jpg" width="296" height="200" />
              </div>
              <div>
                <img className="hidden lg:block" src="https://lifehop.co.uk/wp-content/uploads/2023/02/IMG_2260.jpg" width="296" height="200" />
                <img className="w-80 sm:w-auto lg:hidden" src="https://lifehop.co.uk/wp-content/uploads/2023/02/IMG_2260.jpg" width="296" height="200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white animate-slide-fade">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">

          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>

          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 Thrifty Haven, Inc. All Rights Reserved
          </p>
        </div>
      </section>




    </>
  );
}


