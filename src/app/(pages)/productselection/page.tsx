import "../../../../public/styles.css"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import 'flowbite';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { validateRequest } from "@/lib/lucia/session";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { ProductComponent} from "@/components/ProductComponent";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { NextApiRequest, NextApiResponse } from "next";
export default async function Page(req: NextApiRequest, res: NextApiResponse) {
  const { user } = await validateRequest()
  if (!user) {
    return redirect("/home")
  }
  console.log(user.id)
 
  return (
    <>
      <NavBar />
      <br></br>
      <br></br>
      <br></br>
      <Dialog>
        <DialogTrigger className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{position:'fixed', left:'120em',bottom:'8em', zIndex:1, padding:'20px'}}>
        <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21" style={{height:'30px', width:'30px'}}>
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
          <p style={{fontSize:'17px'}}>Checkout</p>
          </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cart</DialogTitle>
            <DialogDescription>
              <Table>
          
                <TableHeader>
                  <TableRow>
                    <TableHead>Items</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead >Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell >$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-base  text-gray-900 dark:text-white" style={{marginLeft:'220px'}}>Grand Total</p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
         
          
          <Button type="button" variant="destructive">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36">
          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://shoptommy.scene7.com/is/image/ShopTommy/MW34523_1BG_BCK?wid=428&hei=564&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Denim Jacket</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Tommy Hilfager</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 500</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Denim Jacket</DialogTitle>
                    <DialogDescription>
                      Rock a timeless vibe with our Denim Jacket. Crafted from premium denim, it offers versatility for any occasion. Featuring classic button closures and functional pockets, it effortlessly elevates your style.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://shoptommy.scene7.com/is/image/ShopTommy/MW34523_1BG_BCK?wid=428&hei=564&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://shoptommy.scene7.com/is/image/ShopTommy/MW34523_1BG_DE1?wid=428&hei=564&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://shoptommy.scene7.com/is/image/ShopTommy/MW34523_1BG_DE2?wid=428&hei=564&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>



          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219788_ww034_full_crop.jpg" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Cosy Fit T-Shirt</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Champion</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 300</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Cosy Fit T-Shirt</DialogTitle>
                    <DialogDescription>
                      The Cosy Fit T-Shirt: Combining comfort and style effortlessly with its premium cotton fabric and snug fit. Perfect for any occasion, from lounging to outings, it's your go-to for all-day comfort and coolness.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219788_ww034_full_crop.jpg" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219788_ww034_full_front.jpg" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219788_ww034_full_back.jpg" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>

          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219828_em021_full_crop.jpg" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Sweatshirt</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Champion</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 700</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Sweatshirt</DialogTitle>
                    <DialogDescription>
                      Elevate your casual wardrobe with our timeless sweatshirt. Crafted from soft, high-quality fabric, it offers both comfort and style. Whether you're lounging at home or running errands, this versatile piece keeps you cozy and effortlessly chic.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219828_em021_full_crop.jpg" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219828_em021_full_front.jpg" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.championstore.com/media/catalog/product/cache/d973219a415532ad39c8ae77bf208b8d/c/h/chpeu_219828_em021_full_back.jpg" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center" style={{ marginTop: "20px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36">
          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://images.wrangler.com/is/image/Wrangler/112336423-HERO?$KDP-XXLARGE$" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Hoodie</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Wrangler</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 900</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Hoodie</DialogTitle>
                    <DialogDescription>
                      A staple for the modern wardrobe, our hoodie blends comfort with street-style flair. Crafted from premium materials, it's perfect for casual outings or relaxing at home. Stay cozy and on-trend with this versatile essential.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://images.wrangler.com/is/image/Wrangler/112336423-HERO?$KDP-XXLARGE$" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://images.wrangler.com/is/image/Wrangler/112336423-ALT1?$KDP-XXLARGE$" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://images.wrangler.com/is/image/Wrangler/112336423-ALT2?$KDP-XXLARGE$" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>

          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://oldnavy.com.ph/cdn/shop/files/cn55315070_800x.jpg?v=1714443290" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Polo Shirt</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Old Navy</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 600</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Polo Shirt</DialogTitle>
                    <DialogDescription>
                      Effortlessly blend sophistication with casual comfort in our timeless polo shirt. Crafted from premium materials, it offers a refined fit and feel for any occasion. Whether you're at work or out for leisure, this wardrobe essential keeps you stylish and comfortable all day long.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://oldnavy.com.ph/cdn/shop/files/cn55315070_800x.jpg?v=1714443290" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://oldnavy.com.ph/cdn/shop/files/cn55624009_800x.jpg?v=1714016285" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://oldnavy.com.ph/cdn/shop/files/cn55188031_800x.jpg?v=1714443290" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>
          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/24_H1_MB_28894-0256_EAS_PS_ON_FA_860x945_crop_center.progressive.jpg?v=1714495518" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Jeans</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Levi's</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 900</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Jeans</DialogTitle>
                    <DialogDescription>
                      Elevate your everyday style with our iconic jeans. Crafted from premium denim, they offer a perfect blend of comfort and durability. Whether you're dressing up or keeping it casual, these versatile jeans are the epitome of timeless fashion.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/24_H1_MB_28894-0256_EAS_PS_ON_FA_860x945_crop_center.progressive.jpg?v=1714495518" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/24_H1_MB_28894-0256_EAS_PS_ON_BV_860x945_crop_center.progressive.jpg?v=1714495518" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/24_H1_MB_28894-0256_EAS_PS_ON_SV_860x945_crop_center.progressive.jpg?v=1714495518" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>        </div>
      </div>

      <div className="flex justify-center" style={{ marginTop: "20px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36">
          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/levis-mens-silvertab-loose-cargo-pants-a56660000_2_ON_BV_860x945_crop_center.progressive.jpg?v=1713359882" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Cargo Pants</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Levi's</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 900</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Cargo Pants</DialogTitle>
                    <DialogDescription>
                      Enjoy the classic comfort of jeans with the added functionality of cargo pants. Perfect for everyday wear or outdoor adventures, these versatile bottoms keep you stylish and prepared for anything.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/levis-mens-silvertab-loose-cargo-pants-a56660000_2_ON_BV_860x945_crop_center.progressive.jpg?v=1713359882" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/levis-mens-silvertab-loose-cargo-pants-a56660000_3_ON_SV_860x945_crop_center.progressive.jpg?v=1713359882" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://levi.com.ph/cdn/shop/files/levis-mens-silvertab-loose-cargo-pants-a56660000_1_ON_FV_860x945_crop_center.progressive.jpg?v=1713359882" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>




          </Card>          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dw2a6dc6c1/images/J2954LCL682_CHU_E2.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Cropped Pants</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Jag</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 800</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Chino Tailored Cropped Pants</DialogTitle>
                    <DialogDescription>
                      Elevate your style with our tailored fit and chic cropped length. Perfect for any occasion, these pants blend sophistication with comfort for a polished look
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dw2a6dc6c1/images/J2954LCL682_CHU_E2.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dw3b9d2f48/images/J2954LCL682_CHU_E1.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dw0b1c517d/images/J2954LCL682_CHU_E3.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>


          <Card className="card animate-slide-fade w-[350px]">
            <CardHeader>
              <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dwc2ba1e5b/images/J3101PCT689_CHU_E1.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800 dark:text-white">Skirt</p>
              <p className="mt-1 text-base leading-6 text-gray-400">Jag</p>
              <br></br>
              <hr></hr>
              <br></br>

              <CardTitle>P 600</CardTitle>
              <Dialog>
                <DialogTrigger className="bg-black text-white py-2 px-4" style={{ marginLeft: '178px' }}>Add to Cart</DialogTrigger>
                <DialogContent style={{ height: '600px' }}>
                  <DialogHeader>
                    <DialogTitle>Skirt</DialogTitle>
                    <DialogDescription>
                      Redefine sophistication with our chic cropped skirt. Crafted with precision and style, it offers a tailored fit and trendy length. Versatile enough for work or casual outings, this skirt effortlessly blends elegance with comfort for a polished look.
                      <Carousel style={{ width: '200px', marginLeft: '30px', marginTop: '10px' }}>
                        <CarouselContent >
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dwc2ba1e5b/images/J3101PCT689_CHU_E1.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dw14a8fdce/images/J3101PCT689_CHU_E2.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
                          </CarouselItem>
                          <CarouselItem>
                            <img className="h-96 w-full object-cover" src="https://www.jagjeans.com/dw/image/v2/BBWD_PRD/on/demandware.static/-/Sites-jag-master/default/dw49c81f53/images/J3101PCT689_CHU_E3.jpg?sw=1200&sfrm=jpg&q=75" alt="" />
                          </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                        <p className="text-gray-500 text-sm" style={{ position: 'relative', left: '225px', bottom: '270px' }}>Quantity:</p>
                        <ProductComponent/>
                        
                      </Carousel>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

            </CardContent>
          </Card>
        </div>
      </div>
      <br></br>
      <br></br>

    </>


  )


}