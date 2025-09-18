import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    name: "@JoeK",
    text: "Botpress makes it very easy to host bots on their cloud servers and they have a lot of integrations with platforms such as Whatsapp, Telegram, Zapier, Zendesk and much more. The Botpress studio is very user friendly and easy to use and scale up with for larger bots.",
  },
  {
    name: "@BogdanA",
    text: "The unlimited number of integrations it has! It's perfect for any type of workflow you'd like to perform: Cancellations, refunds, authentications and many more!",
  },
  {
    name: "@CarolynM",
    text: "Botpress is a great platform with a strong community of developers around the world that are welcoming and open to sharing their time, resources, and elevating best practices among bot builders.",
  },
  {
    name: "@DilanR",
    text: "One of the most important things is how intuitive the tool is, and the free tier is very generous, the number of possible integrations is also one of my favorite things because of how versatile it can be.",
  },
  {
    name: "@JD_C",
    text: "The botpress discord is hands down the best discord I have ever joined. The experience I have had learning/troubleshooting in real time with changing trends is a non-stop shop for realizing Botpress potential.",
  },
];

const ReviewSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setHovered] = useState(false);

  useEffect(() => {
    let frame: number;
    let offset = 0;
    const speed = 1.2; // px per frame

    function animate() {
      if (!isHovered && scrollRef.current) {
        offset += speed;
        scrollRef.current.scrollLeft = offset;
        if (
          offset >=
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth
        ) {
          offset = 0; // Loop and reset
        }
      }
      frame = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [isHovered]);

  return (
    <>
    <section
      className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden w-full 
      bg-black "
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/80 -z-10" />

      {/* Heading and Join Button */}
      <div className="mb-12 ml-40 max-w-3xl px-12 z-10">
        <p className="text-gray-400 text-sm mb-2">Community</p>
        <h1 className="text-white text-[3rem] leading-tight">
          Join the largest bot building community.
        </h1>
        <button className="mt-6 px-8 py-3 rounded-full bg-white text-black font-medium shadow hover:bg-gray-200 transition flex items-center gap-2">
          Join our discord <span>➜</span>
        </button>
      </div>

      {/* Reviews Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 py-8 w-full px-12 overflow-x-scroll no-scrollbar z-10 bg-[url('https://cdn.prod.website-files.com/635c4eeb78332f7971255095/681a534c15a07135457fdae8_wave01.png')] 
      bg-cover bg-center"
        style={{ scrollBehavior: "auto", cursor: "grab" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {[...reviews, ...reviews].map((review, idx) => (
          <div
            key={idx}
            className="min-w-[230px] h-fit bg-black bg-opacity-70 text-white p-4 shadow-lg border border-green-500/60"
          >
            <span className="flex items-center justify-start gap-2 p-3">
              <img src="https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg=" alt="" className="w-10 h-10 rounded-full" />
              <div className=" mb-2 text-sm text-gray-300">{review.name}</div>
            </span>
            <div className="text-sm">{review.text}</div>
          </div>
        ))}
      </div>
  
    </section>

        <div className="grid grid-cols-2 h-auto w-3/4 mx-auto border border-gray-400">
      {/* Left Side */}
      <div className="grid grid-rows-3">
        {/* Row 1 */}
        <div className="flex items-center justify-start">
          <h1 className="text-white text-[6vw] w-3/4 h-full bg-black font-light leading-none border border-gray-400  flex items-center justify-center">
            Build
          </h1>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-end">
          <h1 className="text-white text-[6vw] h-full w-3/4 bg-black font-light flex items-center border border-gray-400 justify-center">
            better
          </h1>
        </div>

        {/* Row 3 (split into 2 cols) */}
        <div className="grid grid-cols-2 h-fit ">
          {/* Left text */}
          <div className="flex items-center justify-start   ">
            <h2 className="text-white text-[4vw] font-light w-screen leading-snug flex items-center justify-center border border-gray-400 border-b-transparent">
              with <br /> Botpress
            </h2>
          </div>

          {/* Right circle button */}
          <div className="flex items-center justify-center border border-black">
            <button className="w-42 h-42 rounded-full bg-[#1D3A8A] flex flex-col items-center justify-center hover:bg-[#294dbf] transition">
              <span className="text-white text-sm">Get started</span>
              <span className="text-white text-xl">&#8599;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-white">
        <img
          src='https://cdn.prod.website-files.com/635c4eeb78332f7971255095/682391efe465814b90c5ff68_23959dcacb8779e2b3664e2877d793ca_cta.webp'
          alt="Decorative"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
    </>


  );
};

export default ReviewSlider;
