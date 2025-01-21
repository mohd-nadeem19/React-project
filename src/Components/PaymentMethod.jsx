import React from 'react'

const PaymentMethod = () => {
    return (
        <div className='bg-gray-50 mt-32 p-8'>
            <div>
                <h1 className='text-[36px] text-[#333333] font-Taviraj font-[600] text-left '>Payment Method</h1>

                <div className='flex gap-24 mt-4'>
                    <div className='flex place-items-center gap-2 mt-4'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>BNI Cicilan 0%</span>
                    </div>
                    <div className='flex place-items-center gap-2 mt-4'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>Mandiri Cicilan 0%</span>
                    </div>
                    <div className='flex place-items-center gap-2 mt-4'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>Bank Transfer</span>
                    </div>
                    <div className='flex place-items-center gap-2 mt-4'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>Credit Card</span>
                    </div>
                </div>

                <div className='flex place-items-center gap-28 mt-4'>

                    <img src="https://s3-alpha-sig.figma.com/img/1ae5/feec/0c256d34ff155bdfd31f4a1ee53afa06?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=djgwpWfNRNdZKrrs0r5J-iAQrpvJPUlI0GpDwNu6xraFuImIJYtXyG-ZgYRYG-nkuyc3Xuj-ANfglqQFlIcP1WGaG5Fzss0qzv0Fa31D0s4ud9rw~NnkK7vyrtGpapII9OYFT~0ORWnI4-uvhp5ExvKZxFeQRbDXYdrr0YxdCd3IhKsMvWklVI5qgQeFmwbC~~eiPO0XPKEcWxhoxwfuzWMPA9dzkHgUbeWjMNGWX304I2uctoQaPwYPyDuO~NFsNnaRNEINYsEfEDP1ygu5GfHJkBBpE43AHEI5O0BM-Dk5Jhwqyd1A8SbHNMf8r8YJv9DLewBlJw3WPxC4e0O-WQ__" alt="" className='w-[100px] h-[100px] ' />

                    <img src="https://s3-alpha-sig.figma.com/img/d2fe/82bc/d5ae320aeb474bdf238a9d6721761f1d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XoL1O3F7TxEsvpqN8GIAWZff05HZDtkb4kXpNVgUfZ8XWCzhz0jj52~3tq2JTQmywt6smHYAGD4-xrTM6o3ONljheg4aY0zhnAEOB6a~HwLWyT4NqcDKQIqWTFr1B~RImW-6zPsRSuY3tSIBw-A7GKGM7TUMHM6jc1E6qfOft5cMd7OdKGhPQ3Qrs71nePVy3BqBuActE8xWorKY1ndN6uedzavW5x0iaNY5SatRzYGMRSsH-9fUlwg7A1NiGWqBYVx0l2C8Bgc0~bNZ2rBi~haUOBy7vQNL6mg8LT0xgChVXANgwnADhrqoiGOLaFnFfEdBet34sXFnBP0iM0skMA__" alt="" className='w-[100px] h-[100px] ' />

                    <img src="https://s3-alpha-sig.figma.com/img/91c7/a697/14d89b96f26a4c7d88eafad5201f500b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CeC1UoGd-SSFEY9A5vDq-NTtdwA8wBn2NwV7DmZhdAQvry9Eb9DgtV-0edy9grcK5NNLu9WSnZaDG~jdp2G4bsXPnakw~Se39Mx7Uu-6wmgPMUgEIWeCfpCJGm28J6WFkx63NXVyyo8OZIJXqJNYxLfI9TxNEQqNsIyR8JiTAzDdxKhZCllKQvKF6bah0VU05KiY4l3wcyA5uBNUNLvMoXVmsHHwlIorvtxup5f8ZxMxqw4gX1nfw8GIKlLJU76aIz6QLQxjeYTYonGLlJ42vAm6C8PooJT3sShRG0GkqAhyUVBTIXPf8IxhDzKnCbHd2kn673PlCBjomWuM3BscKA__" alt="" className='w-[100px] h-[100px] ' />

                    <img src="https://s3-alpha-sig.figma.com/img/5255/36a0/26e4398b17d4bffbb55bcc0912a23036?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cKBfMdWYbksueszm9aTrVYWCz~d4if616o0SFa0CqUB0mN6FVTAqkkmrTMqZcUE684IA4IzaaWZJMRorfntxn26V2dO0L1jZxO3ae2a2~qKIhDBhiXTXDhEOiBVa5zyC-F-Xo6rl-rx8dCIwsEK9dVE2B0P3sMf9QqCqZMBVGFMQd-~KZ8D6vsFv6wWQrbfZYosMdOESijxdSv0uhH4tUY8uYJBXfdLPnF0mlTPQhn7~J-rqNZlmuXV2x8efY59uIHyvpnurWfE9xCZYlOHDoB3inKYCsOVkZg4ahhVhjc9lolb~iCscqY8xhRgcwcIQ5g27Q-34pwrnSa6ljLFIPw__" alt="" className='w-[100px] h-[100px] ' />

                    <img src="https://s3-alpha-sig.figma.com/img/d34d/bfa7/10197414005523a56d0410a9b3ef3b6d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hC72uYLU0-qHAhboV58GTCwg9Md65qgpIG6t71HlwGyqSXcSM2rGQDJ7t4VtU4cJflHLVQoPkx8HizCBlrDcRSSlHMuuQlOfJ3MvlccbOgBVmPgqOWFOk~7aDnoFfVS3Xt0oclTcPRAs7qpjcmR4-emP0wgNjEWt5AoFxzzrtBgbkXs6FH9BhFCM9EvEeG6Bjq0NfktUl5dbZ3XrnKmqQRIp493CJLVLCGtwauURmNbDmFGXusGIMROsKAxjgHhjsHTC-l6Q-ilqmDqtmflWXzHm3MiKfxiTkcmqTVKGy7FHRP8rc4ycO53yZTnbxN1RM-~0-6-UPXRmYt1tb2a~2A__" alt="" className='w-[100px] h-[100px] ' />



                </div>

                <div className='flex place-items-center gap-40  mt-4'>
                    <div className='flex place-items-center  gap-2'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)</span>
                    </div>

                    <div className='flex place-items-center  gap-2'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>GO-PAY</span>
                    </div>

                    <div className='flex place-items-center  gap-2'>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="11.5" stroke="#333333" />
                        </svg>
                        <span>Krdivo</span>
                    </div>


                </div>

                <div className='flex gap-80'>

                    <div className='flex gap-10'>
                        <img src="https://s3-alpha-sig.figma.com/img/797e/26bd/f86d06b7bdc097b3efed52c8be8a6fde?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJC9LAEXnZZYpf9VXZHVOAG3TGXvdN2YGyWyBZ0PiH4wpfWUnB8~lup~s8RJcEZZbKiUc2YPykAXlgWSs6QjNjKepgUThIEHfvZ86Y54PXNijM1avr1G-PrbKDcl4R9CPG1UO9L9h7~hw20L~J7kZy10URhqEJwpcF~ZfbKUYOnt5se3V56FCjYBTj94HFDJpPukv-BO8lbLyXUZJ73IWars92Yu9OwUmBQ1dSQ1miZYWOctJ9j2NDgtxqfe4qEdG-JmpGjxViUbunWRRzSxQawdtAB-3dqc92GFA6DaZxI4UEI1zZBROyoPE4YLTPKwTi8KRDa3h-H9~Pbo-imPcQ__" alt="" className='w-[100px] h-[100px] ' />

                        <img src="https://s3-alpha-sig.figma.com/img/256f/c0aa/128f862e434bca5c267a4808be791e96?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V~mStcbgBt9KL2vWO0wimjaYjK17D7c0PrsebCKX6bP3FZuUFQf6MBro5GGNC0luFXizGwfTtJW~qwGrmpCh-yXEL4IDG3fQxuD7Jd~BNIWIdwk8umP2ZWQzvYgcS4kYOWjl8DN7f1pMBZtJWoxNIWXkik07o3X4ticHt8kdATROiirxVizoN-ZSJBmemkELGUhTySFTKc0yQabcm1MgcW7anrbTdGku~f9269J8-~skfTIAnAMzTfu4vng9srgBy1XtDBQJmEdzASuob1BxwaSw4pgbXF0TJn0hM3CvadmVTnW1LzeN6LcPhQP6yD4RVPmIKqLmu7bKYwxhENcNBQ__" alt="" className='w-[100px] h-[100px] ' />

                        <img src="https://s3-alpha-sig.figma.com/img/e069/1910/24a77190c938262ad3e60de4290e3adc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Taj6WcZlT-rB2KP-ysERJuxKOPOHcGK3JwzwwXqe9z6Oi50rCcJ3a-7~Lt5g9dITkakCLL9VmSacY89AeNFM-oWofAcHlFE3y~cc1xH52sv0l3TEQkV5QlPiPe20dIcY3yrIputbaHR8ntx2uUuEc3kCXYYk~LB9CR9yUn-ouzw~LW6q33i0LRFQ9hRAndTO1-Tdfw8loQ7NkWdQwb0hWZD1bXMnzGwFIDb-w4rJTdVwChV1Oqchu4lq0Cb34jU~WYAneu82Qj0q4X9zDJQw3IHkTNMNVyem-FN63tGOe~CeKqj~kOeF9KKULNfVDQ9h5evY53YYPMiXpJEalMN4kg__" alt="" className='w-[100px] h-[100px] ' />
                    </div>
                    <div className='flex gap-10'>
                        <img src="https://s3-alpha-sig.figma.com/img/5dca/6dad/f5c3ee737236856aaaec9fa1e5c69983?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kBW5L0BjcNj6mRNW3WMcO5a~HeRK60l7Foa0zRBp0DGAoKMw-GvoYRCC4Njuc2zCtV7x-b4CWJ5~~Fq5GQ4qjQEbbdtdzhVbYiL4n~IKg644TAwi-wFrCxbE7jgbtjleqmaOAu3OIgSg~QBwIQn3vkFPjJlH99vOh6AckXkyqvdHiUjqmKMHPqjcg36aXSkxAIDrYIcc9MTlLyySKOIUmXHij2nO8VhGUMh13GylF3ldmXIAiLjJNXPstdmlNJwlTSM4cwr7SnlImUHQNX6I-oVYj~zIMIRgt0DECVFJ~zc-M5FyWBOLI-ZVI5TYe3qNTO8JIV3Oe~X~zklk-Iv09A__" alt="" className='w-[100px] h-[100px] ' />

                        <img src="https://s3-alpha-sig.figma.com/img/b5fa/d73e/e9cea1ff0da34b74bf658cb67cea3a6e?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MmsreCcYLTEJ4uPR1ysQSGdXoI0DQWxe~7b9hrKOvdRU1psiEVNRVp68eibWqyAJU283OJPLopDkQ56KSD-5U2Wo7f6ucTAh6JoAEtmy~thSHsx1EwYgDdHblTd7zyumfM8zCfPlrInpzJXOcoKIbo-ZDpJ3MbTOl9zkZQS~Vei6Uj2P5vF5g2~-lgXS29GP2NhVDy~b7Wg0RRuHkXFHTE5Pg-m~wSs9o6xkh1-x9255Ft~uzYe9H6OLr3Z0DK51nXgMXCndtUqFfhfoKiBuyOzenVhEaqp1zB1oFNvplsRi~GvUXyRAYrSGpuqkjl87tg6uX1vYoziFsEcJCKJ8sQ__" alt="" className='w-[100px] h-[100px] ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod