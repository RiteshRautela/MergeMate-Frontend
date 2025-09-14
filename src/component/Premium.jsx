import React from 'react';

const Premium = () => {
    // Reusable checkmark icon component
    const CheckmarkIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    // Reusable cross-out icon component for unavailable features
    const CrossoutIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );


    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="flex w-full max-w-4xl flex-col lg:flex-row items-center justify-center gap-8">

                {/* Silver Membership Card */}
                <div className="card w-96 bg-base-100 shadow-xl border-2 border-primary">
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Silver</h2>
                            <span className="text-xl font-semibold">₹200/mo</span>
                        </div>
                        <p className="text-sm opacity-60">Get started with our essential features.</p>
                        <ul className="mt-6 flex flex-col gap-3 text-sm">
                            <li>
                                <CheckmarkIcon />
                                <span>Chat with other people</span>
                            </li>
                            <li>
                                <CheckmarkIcon />
                                <span>50 Connection Requests per day</span>
                            </li>
                            <li>
                                <CheckmarkIcon />
                                <span>Verified Blue Tick</span>
                            </li>
                            <li className="opacity-50">
                                <CrossoutIcon />
                                <span className="line-through">Weekly Profile Boost</span>
                            </li>
                            <li className="opacity-50">
                                <CrossoutIcon />
                                <span className="line-through">See Who Likes You</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-outline btn-primary btn-block">Choose Silver</button>
                        </div>
                    </div>
                </div>

                <div className="divider lg:divider-horizontal font-semibold">OR</div>

                {/* Gold Membership Card */}
                <div className="card w-96 bg-base-100 shadow-xl border-2 border-warning">
                    <div className="card-body">
                        <span className="badge badge-warning badge-md self-start font-semibold">Most Popular</span>
                        <div className="flex justify-between mt-2">
                            <h2 className="text-3xl font-bold">Gold</h2>
                            <span className="text-xl font-semibold">₹500/mo</span>
                        </div>
                        <p className="text-sm opacity-60">Unlock everything with our premium plan.</p>
                        <ul className="mt-6 flex flex-col gap-3 text-sm">
                            <li>
                                <CheckmarkIcon />
                                <span>Chat with other people</span>
                            </li>
                            <li>
                                <CheckmarkIcon />
                                <span>50 Connection Requests per day</span>
                            </li>
                            <li>
                                <CheckmarkIcon />
                                <span>Verified Blue Tick</span>
                            </li>
                            <li>
                                <CheckmarkIcon />
                                <span>Weekly Profile Boost</span>
                            </li>
                            <li>
                                <CheckmarkIcon />
                                <span>See Who Likes You</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-warning btn-block">Choose Gold</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Premium;