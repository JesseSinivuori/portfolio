export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <p className="animate-pulse bg-transparent p-[10px] font-light text-white">
        <span className={"text-white"}>Loading.</span>
        &#106;
        <span className={`text-[#70ffff]`}>s</span>
      </p>
    </div>
  );
}
