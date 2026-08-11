import Image from "next/image";

export default function about() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-center text-5xl font-bold text-emerald-900">
        About Us
      </h1>
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <Image src={"/images/ba-cay-thong.JPG"} alt="ba-cay-thong" width={600} height={400}/>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-8 text-gray-700">
        <p>
          We are Vinh and Hien, two nature lovers who enjoy escaping the busy
          city to discover the beauty of the outdoors. Whether it’s pitching a
          tent in the mountains, watching the sunrise beside a peaceful lake, or
          driving to a hidden campsite, every journey becomes a story worth
          remembering.
        </p>
        <p>
          Camp Log was created to document our adventures and share our
          experiences with fellow travelers and camping enthusiasts. Here,
          you’ll find the campsites we’ve visited, honest reviews, travel tips,
          beautiful scenery, and lessons we’ve learned along the way. We believe
          that every trip—whether close to home or far away—offers an
          opportunity to reconnect with nature and with the people we love.
        </p>
        <p>
          Our hope is that this website inspires others to step outside, explore
          new places, and create unforgettable memories of their own. Camping
          isn’t just about spending a night outdoors; it’s about slowing down,
          appreciating the simple things in life, and embracing the adventure
          that awaits beyond the city.
        </p>
        <p className="text-center font-medium text-emerald-700">
          Thank you for visiting Camp Log, and we hope our journey encourages
          you to begin your own. Happy camping! 🏕️
        </p>
      </div>
    </div>
  );
}
