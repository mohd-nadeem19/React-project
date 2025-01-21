import React from 'react'

const OrderDetails = () => {
    return (
        <div className='flex mt-16 gap-12'>
            <div className='bg-gray-50  text-left p-10 mb-48 w-[400px] h-[500px] '>
                <div>
                    <h1 className='text-[36px] text-[#333333] font-Taviraj font-[600]'>Detail Order</h1>
                    <div className='flex gap-20'>
                        <div className='flex flex-col pt-6 font-Taviraj font-[500] text-[20px] leading-[60px] text-[#333333] tracking-[2%] '>
                            <span>Subtotal</span>
                            <span>Shipping Cost</span>
                            <span>Promo Code</span>
                            <span>Packaging</span>
                        </div>
                        <div className='flex flex-col pt-6 font-Taviraj font-[500] text-[16px] leading-[60px] text-[#333333] tracking-[2%]'>
                            <span>Rp 2.152.000</span>
                            <span> Rp 500.000</span>
                            <span> INDONESIA</span>
                            <span> Rp 50.000</span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 border-[#333333] w-full ml- mt-10"></div>

                <span className='font-Taviraj font-[500] text-[20px] leading-[60px] tracking-[2%] text-[#333333]'>Grand Total</span>
                <span className='font-Taviraj font-[500] text-[28px] ml-12 leading-[60px] tracking-[2%] text-[#333333]'>Rp 2.702.000</span>

                <div className='bg-gray-50 w-[400px] ml-[-35px] mt-[70px] '>
                    <div className='flex p-6 gap-6'>
                        <h1 className='text-[36px] text-[#333333] font-Taviraj font-[600]'>Detail Order</h1>
                        <span className='pt-4 pl-6 text-[24px] font-[500] text-[#D93F3F] '>11:55:55</span>
                    </div>
                    <p className='p-[12px]'>Please make a payment according with the limit time specified, starting from now</p>
                </div>

            </div>
            <div className='bg-gray-50 w-[550px] p-10 text-left'>
                <h1 className='text-[36px] text-[#333333] font-Taviraj font-[600]'>Order Detail</h1>

                <div className='flex mt-10'>
                    <span className="flex  whitespace-nowrap">Order Number</span>
                    <div className='ml-20'>
                        <span>MTAWEB-3A86D4DB</span>
                        <span className='ml-24 text-[#D93F3F]'>COPY</span>
                        <p className='text-[#777777] mt-2 '>Always remember Order Number for easy tracking</p>
                    </div>
                </div>

                <div className='mt-8'>
                    <span>Purchase Date</span>
                    <span className='ml-20'>2019-11-07 14:01:48</span>
                </div>

                <div className='mt-8'>
                    <span>Items</span>
                    <div className='flex flex-col ml-[180px] mt-[-22px]'>
                        <span>Way Kambas Mini Ebony</span>
                        <span className='text-[#777777] text-sm pt-2'>2 x IDR 1.024.000</span>
                        <span className='pt-2'>Sikka (Ebony & Mapple)</span>
                        <span className='text-[#777777] text-sm pt-2'>1 x IDR 1.264.000</span>
                    </div>
                </div>

                <div className='mt-8'>
                    <span>Name</span>
                    <span className='ml-[140px]'>Rasyidin Arsyad Nasution</span>
                </div>

                <div className='mt-8'>
                    <span>Phone</span>
                    <span className='ml-32'>+8755655758</span>
                </div>

                <div className='mt-8'>
                    <span>Email</span>
                    <span className='ml-36'>rasyid.arsyad@gmail.com</span>
                </div>

                <div className='mt-8'>
                    <span>Shipping Address</span>
                    <div className='flex flex-col ml-[180px] mt-[-22px]'>
                        <span>18 Richardson Drive</span>
                        <span>Fountain Valley, CA 92708</span>
                    </div>


                </div>


            </div>
        </div>
    )
}

export default OrderDetails