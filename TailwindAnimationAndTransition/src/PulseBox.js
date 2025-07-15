const PulseBox = () => {
  return (
    <div class="mx-auto w-full max-w-lg rounded-md border border-blue-500 p-5 hover:scale-110 transition duration-500">
      <div class="flex animate-pulse space-x-4">
        <div class="size-10 rounded-full bg-gray-500"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 rounded bg-gray-500"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="col-span-2 h-2 rounded bg-gray-500"></div>
              <div class="col-span-1 h-2 rounded bg-gray-500"></div>
            </div>
            <div class="h-2 rounded bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PulseBox;
