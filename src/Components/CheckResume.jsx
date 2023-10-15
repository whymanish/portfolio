import React from 'react'

const CheckResume = () => {
    return (
        <div >
            <section class=" px-4 py-20  bg-gradient-to-r from-white to-purple-100">
                <div class="grid items-center grid-cols-1 gap-4 mx-auto max-w-7xl lg:grid-cols-2 xl:grid-cols-3">
                    <div >
                        <p class="mb-1 text-base font-medium md:text-xl text-primary">For Recruiter</p>
                        <h2 class="mb-6 text-3xl font-bold md:leading-tight md:text-4xl md:mb-4">Checkout my Resume</h2>
                        <div class="flex flex-col mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                            <a href="#" class="w-full shadow btn btn-primary btn-lg sm:w-auto">Resume</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default CheckResume
