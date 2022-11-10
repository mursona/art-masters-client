import React from 'react';

const Galary = () => {
    return (
    <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">

            <div className="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                <div className="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                    <div className="text-3xl md:text-4xl font-bold mt-10 mb-6">
                        Make Your Art Look More Charming</div>
                </div>
                <div
                    className="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                    <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                        <img src="https://images.unsplash.com/photo-1580192985029-9b0e4679a180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGFydCUyMGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                    </div>
                    <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                        <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                            <img src="https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGFydCUyMGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                        </div>
                        <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                            <img src="https://images.unsplash.com/photo-1582201942988-13e60e4556ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                        </div>
                    </div>
                    <div className="lg:w-60 w-64 h-100  overflow-hidden rounded-xl ">
                        <img src="https://images.unsplash.com/photo-1580193090099-5f31cf4e7202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydCUyMGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                    </div>
                    <div className="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                        <div className="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                            <img src="https://images.unsplash.com/photo-1578301978859-714d194a5abf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFydCUyMGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                        </div>
                        <div className="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                            <img src="https://images.unsplash.com/photo-1561851107-a9af359fd2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGFydCUyMGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                        </div>
                    </div>
                    <div className="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                        <img src="https://images.unsplash.com/photo-1582201943021-e8e5cb6dedc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGFydCUyMGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className="" />
                    </div>


                </div>

            </div>
        </div>
    </div> 
    );
};

export default Galary;