const BottomNav = () => {
  return (
    <div class="bg-button-bg relative w-full  mx-auto rounded-t-lg pb-4 mt-12 px-4 text-white">
      <div class="absolute bg-second rounded-full p-2 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div class="rounded-full bg-gray-500 border-4 border-white shadow-xl w-16 h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v4m0 4v8m6-12a9 9 0 11-12 0"
            />
          </svg>
        </div>
      </div>

      <div class="flex justify-around items-center mt-8 pt-4 border-t border-first">
        <div class="flex flex-col items-center">
          <svg class="w-6 h-6 mb-1" fill="white" viewBox="0 0 24 24">
            <path d="M4 17v2h16v-2H4zm1-5v2h14v-2H5zm3-5v2h8V7H8z" />
          </svg>
          <span class="text-sm">Profit</span>
        </div>
        <div class="flex flex-col items-center">
          <svg class="w-6 h-6 mb-1" fill="white" viewBox="0 0 24 24">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
          </svg>
          <span class="text-sm">Group</span>
        </div>
        <div class="flex flex-col items-center">
          <svg class="w-6 h-6 mb-1" fill="white" viewBox="0 0 24 24">
            <path d="M13 2H6a2 2 0 00-2 2v7h2V4h7V2zM18 8h-5v2h5v10H6v-5H4v5a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2z" />
          </svg>
          <span class="text-sm">Boost</span>
        </div>
        <div class="flex flex-col items-center">
          <svg class="w-6 h-6 mb-1" fill="white" viewBox="0 0 24 24">
            <path d="M20 6h-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2H4c-1.1 0-2 .9-2 2v2h20V8c0-1.1-.9-2-2-2zM4 20h16c1.1 0 2-.9 2-2v-6H2v6c0 1.1.9 2 2 2z" />
          </svg>
          <span class="text-sm">Wallet</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
