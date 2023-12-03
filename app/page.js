
import Link from 'next/link';
import React from 'react';
import Comics from './comics/page';

export default function Home() {
  return (
    <>
      <div className="bg-primary text-white py-4 px-12 text-2xl font-semibold">
        <span className="py-4">AnyBook</span>
      </div>

      <div className="flex justify-center items-center w-full h-screen">

        <div className="mx-auto">
          {/* First Set of Images */}
          <div className="grid grid-cols-4 gap-4">
            {/* First Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/comics">
                <div>
                  <img
                    src="https://cdn4.whatculture.com/images/2019/01/9468f0c64a37615c-400x600.jpeg"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Comics</p>
                </div>
              </Link>
            </div>

            {/* Second Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/autobiography">
                <div>
                  <img
                    src="https://images.ucpress.edu/covers/300/9780520267190.jpg"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Autobiography</p>
                </div>
              </Link>
            </div>

            {/* Third Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/horror">
                <div>
                  <img
                    src="https://miblart.com/wp-content/uploads/2020/11/Raymond-Beckham-683x1024.jpg"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Horror</p>
                </div>
              </Link>
            </div>

            {/* Fourth Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/romance">
                <div>
                  <img
                    src="https://th.bing.com/th/id/OIP.nhaVDdhhI6W3jzgilyn3OgHaLg?rs=1&pid=ImgDetMain"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Romance</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Second Set of Images */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            {/* Fifth Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/thriller">
                <div>
                  <img
                    src="https://www.mydomaine.com/thmb/ehSijdvLehMKzOzZ6eCHFJx7HJA=/1600x2408/filters:no_upscale():max_bytes(150000):strip_icc()/916EaU54GlL-c89ee8c555a94ca2a1a42aee519d5981.jpg"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Thriller</p>
                </div>
              </Link>
            </div>

            {/* Sixth Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/fiction">
                <div>
                  <img
                    src="https://th.bing.com/th/id/R.847ff818eb060a80aa401c0273ee49ef?rik=PitBxG7NXly9yA&riu=http%3a%2f%2fi2.wp.com%2fgeekdad.com%2fwp-content%2fuploads%2f2013%2f02%2fHP1-Kibuishi.jpg&ehk=uafYYv3yMqpRGlecJf0Si6SPSZwksDcZUzc982%2byhlQ%3d&risl=&pid=ImgRaw&r=0"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Fiction</p>
                </div>
              </Link>
            </div>

            {/* Seventh Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/science-fiction">
                <div>
                  <img
                    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_74814572-e1486420174369.jpg?auto=format&q=60&fit=max&w=930"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Science Fiction</p>
                </div>
              </Link>
            </div>

            {/* Eighth Image */}
            <div className="p-4 flex flex-col items-center transition-transform duration-300 transform hover:scale-105">
              <Link href="/app/sports">
                <div>
                  <img
                    src="https://example.com/eighth-image.jpg"
                    className="object-cover h-48 w-full aspect-square rounded-2xl"
                  />
                  <p className="text-center mt-2">Sports</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
