import React from 'react';

const AddService = () => {

    const handlePostService = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const artiest = form.artiest.value;
        const description = form.description.value;
    
        const addservices = {
          title: title,
          img: img,
          price: price,
          artiest: artiest,
          description: description

        };

            //posting method
    fetch("https://art-masters-server.vercel.app/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addservices),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            alert('Review posted successfully')
            form.reset();
          }
        })
        .catch((err) => console.error(err));
    };
    
    return (
        <section class="max-w-4xl p-6 my-16 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handlePostService} className="w-50">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 dark:text-gray-200">Service Name</label>
                <input type="text" name="title" placeholder="Service Name" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
                <label class="text-gray-700 dark:text-gray-200">Service Image</label>
                <input type="text" name="img" placeholder="Photo URL of the service"
                required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
                <label class="text-gray-700 dark:text-gray-200">Service Charge</label>
                <input type="text" name="price" placeholder="Charge of Your Service" required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
                <label class="text-gray-700 dark:text-gray-200">Artiest Name</label>
                <input type="text" name="artiest" placeholder="Artiest name"
                required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
          </div>
          <div className='mt-6'>
                <label class="text-gray-700 dark:text-gray-200">Write Service Details</label>
                <textarea name="description" type="text" className="textarea block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Service Description" required></textarea>
            </div>

            <div class="flex justify-end mt-6">
                <input className='btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' type="submit" value="Add Your Service" />
            </div>
        </form>
      </section>
    );
};

export default AddService;