export const Banner = () => {
  return (
    <div className="bg-[linear-gradient(to_right,rgba(252,214,255,0.7),rgba(41,216,255,0.7),rgba(255,253,128,0.7),rgba(248,154,191,0.7),rgba(252,214,255,0.7))] py-3 text-center">
      <div className="container flex justify-center items-center gap-1 text-sm font-medium text-black flex-wrap">
        <span className="hidden sm:inline">
          Introducing a completely redesigned interface –
        </span>
        <a
          href="#"
          className="underline underline-offset-4"
        >
          Explore the demo
        </a>
      </div>
    </div>
  );
};
