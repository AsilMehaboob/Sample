// pages/app/comics.js
import Link from 'next/link';

const Comics = () => {
  // Define the content for the Comics page here
  return (
    <div>
      <h1>Comics Page</h1>

      <div className="flex justify-center items-center w-full h-screen">
        {/* Container for the Grid */}
        <div className="mx-auto">
          {/* First Set of Images */}
          <div className="grid grid-cols-4 gap-4">
            {/* First Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <a href="https://archive.org/details/supermanactionco0000morr" target="_blank" rel="noopener noreferrer">
                <div>
                  <img
                    src="https://vignette.wikia.nocookie.net/comics/images/7/79/Superman_2018_1.jpg/revision/latest?cb=20180711111140"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2 text-white">Superman</p>
                </div>
              </a>
              {/* Button */}
              <div className="mt-2">
                <button className="text-red-500">Borrow</button>
              </div>
            </div>
            {/* Second Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/autobiography">
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.f4c44b3266ca31196c5f00dc7014c952?rik=e%2by55yCkDXQh1g&riu=http%3a%2f%2f13thdimension.com%2fwp-content%2fuploads%2f2015%2f04%2fBatman-66-22-Cover.jpg&ehk=a5kr3XMwjeBtBS4lBHnmriGXc1RpDlLGhU3bZTIy10c%3d&risl=&pid=ImgRaw&r=0"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2 text-white">batman</p>
                </div>
              </Link>
              {/* Button */}
              <div className="mt-2">
                <button className="text-red-500">Borrow</button>
              </div>
            </div>

            {/* Third Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/horror">
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.18f459d6f365b8335ee3063e37b7aaf9?rik=ysxqbQr2WRjxbQ&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20131211211749%2fmarveldatabase%2fimages%2f4%2f40%2fAmazing_Spider-Man_Vol_1_700.3.jpg&ehk=uRSw1aTe1Y%2fH7SOP5ckyYwhxL4bxfVoNleFOA5KOe9k%3d&risl=&pid=ImgRaw&r=0"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2 text-white">Spiderman</p>
                </div>
              </Link>
              {/* Button */}
              <div className="mt-2">
                <button className="text-red-500">Borrow</button>
              </div>
            </div>

            {/* Fourth Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/romance">
                <div>
                  <img
                    src="https://1.bp.blogspot.com/-CT7nLL53Syc/V0wZbpjBCHI/AAAAAAAAFN4/r1blzrag6t02XOcof3uWLZKiKbMzPAYwQCLcB/s1600/The-Incredible-Hulk-Comics-Cover.jpg"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2 text-white">Hulk</p>
                </div>
              </Link>
              {/* Button */}
              <div className="mt-2">
                <button className="text-red-500">Return</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comics;
