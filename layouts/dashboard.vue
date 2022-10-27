<template>

  <div class="w-full h-full bg-gray-200">
    <div class="flex flex-no-wrap">
      <!-- Sidebar starts -->
      <div class="absolute lg:relative w-64 h-screen shadow bg-gray-100 hidden lg:block">
        <div class="flex flex-col justify-between h-screen bg-white border-r">
          <div class="px-4 py-3">
            <h4 class="text-2xl font-bold leading-tight text-black mb-2">starter</h4>

            <nav class="flex flex-col mt-6 space-y-1">
              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span class="ml-3 text-sm font-medium"> General </span>
              </a>

              <details class="group">
                <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span class="ml-3 text-sm font-medium"> Teams </span>

                  <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <nav class="mt-1.5 ml-8 flex flex-col">
                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                      />
                    </svg>

                    <span class="ml-3 text-sm font-medium"> Banned Users </span>
                  </a>

                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>

                    <span class="ml-3 text-sm font-medium"> Calendar </span>
                  </a>
                </nav>
              </details>

              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>

                <span class="ml-3 text-sm font-medium"> Billing </span>
              </a>

              <a
                href=""
                class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>

                <span class="ml-3 text-sm font-medium"> Invoices </span>
              </a>

              <details class="group">
                <summary class="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span class="ml-3 text-sm font-medium"> Account </span>

                  <span class="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <nav class="mt-1.5 ml-8 flex flex-col">
                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                      />
                    </svg>

                    <span class="ml-3 text-sm font-medium"> Details </span>
                  </a>

                  <a
                    href=""
                    class="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>

                    <span class="ml-3 text-sm font-medium"> Security </span>
                  </a>

                  <form action="/logout">
                    <button
                      type="submit"
                      class="flex items-center w-full px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>

                      <span class="ml-3 text-sm font-medium"> Logout </span>
                    </button>
                  </form>
                </nav>
              </details>
            </nav>
          </div>
          <div class="sticky inset-x-0 bottom-0 border-t border-gray-300">
            <a
              href=""
              class="flex items-center p-4 bg-white hover:bg-gray-50 shrink-0"
            >

              <div class="ml-1.5">
                <button @click.prevent="$auth.logout()">Logout</button>
              </div>
            </a>
            <div class="px-8 border-t border-gray-300">
              <ul class="w-full flex items-center justify-between bg-white">
                <li class="cursor-pointer text-gray-500 pt-5 pb-3">
                  <button
                    aria-label="show notifications"
                    class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg3.svg"
                      alt="notifications"
                    >
                  </button>
                </li>
                <li class="cursor-pointer text-gray-500 pt-5 pb-3">
                  <button
                    aria-label="open chats"
                    class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg4.svg"
                      alt="chat"
                    >
                  </button>
                </li>
                <li class="cursor-pointer text-gray-500 pt-5 pb-3">
                  <button
                    aria-label="open settings"
                    class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg5.svg"
                      alt="settings"
                    >
                  </button>
                </li>
                <li class="cursor-pointer text-gray-500 pt-5 pb-3">
                  <button
                    aria-label="open logs"
                    class="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg6.svg"
                      alt="drawer"
                    >
                  </button>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      <!--Mobile responsive sidebar-->
      <!-- Sidebar ends -->
      <div class="w-full">
        <!-- Navigation starts -->
        <nav class="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
          <div class="hidden lg:flex w-full">
            <div class="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
              <div class="relative w-full">
                <div class="text-gray-600 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg3.svg"
                    alt="Search"
                  >
                </div>
                <input
                  class="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-600 placeholder-gray-600 bg-gray-100 pl-12 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="w-1/2 hidden lg:flex">
              <div class="w-full flex items-center pl-8 justify-end">
                <div class="h-full w-20 flex items-center justify-center border-r border-l">
                  <button
                    aria-label="open notifications"
                    class="relative cursor-pointer text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg5.svg"
                      alt="notifications"
                    >
                    <div class="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto"></div>
                  </button>
                </div>
                <div class="h-full w-20 flex items-center justify-center cursor-pointer text-gray-600 ">
                  <button
                    onclick="toggleFAQSlideOver()"
                    aria-label="open chats"
                    class="focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg4.svg"
                      alt="chats"
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            aria-label="Main Menu"
            class="text-gray-600 mr-8 visible lg:hidden relative focus:outline-none focus:ring-2 focus:ring-gray-600 "
            onclick="sidebarHandler(true)"
            id="menu"
          >
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_header_and_icons-svg7.svg"
              alt="toggler"
            >
          </button>
        </nav>
        <!-- Navigation ends -->
        <!-- Remove class [ h-64 ] when adding a card block -->
        <!-- Page title starts -->
        <div class="bg-gray-800 pt-8 pb-16 relative z-10">
          <div class="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div class="flex-col flex lg:flex-row items-start lg:items-center">
              <div class="ml-0 my-6 lg:my-0">
                <h4 class="text-2xl font-bold leading-tight text-white mb-2">Dashboard</h4>
                <p class="flex items-center text-gray-300 text-xs">
                  <span class="cursor-pointer">Portal</span>
                  <span class="mx-2">&gt;</span>
                  <span class="cursor-pointer">Dashboard</span>
                  <span class="mx-2">&gt;</span>
                  <span class="cursor-pointer">KPIs</span>
                </p>
              </div>
            </div>
            <div>
              <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mr-3 bg-transparent transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">Back</button>
              <button class="focus:outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-gray-200 border bg-white rounded text-indigo-700 px-8 py-2 text-sm">Edit Profile</button>
            </div>
          </div>
        </div>
        <!-- Page title ends -->
        <div class="container px-6 mx-auto">
          <!-- Remove class [ h-64 ] when adding a card block -->
          <div class="rounded shadow relative bg-white z-10 -mt-8 mb-8 w-full h-64">
            <!-- Place your content here -->
            <Nuxt />

            <div
              id="faq-slide-over"
              class="fixed inset-0 overflow-hidden z-100 hidden"
              aria-labelledby="slide-over-title"
              role="dialog"
              aria-modal="true"
            >
              <div class="absolute inset-0 overflow-hidden">
                <!-- Background overlay, show/hide based on slide-over state. -->
                <div
                  class="absolute inset-0"
                  aria-hidden="true"
                >
                  <div class="fixed inset-y-0 pl-16 max-w-full right-0 flex">
                    <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
                    <div class="w-screen max-w-md">
                      <form class="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                        <div class="flex-1 h-0 overflow-y-auto">
                          <div class="py-6 px-4 bg-indigo-700 sm:px-6">
                            <div class="flex items-center justify-between">
                              <h2
                                class="text-lg font-medium text-white"
                                id="slide-over-title"
                              >
                                Frequently Asked Questions
                              </h2>
                              <div class="ml-3 h-7 flex items-center">
                                <button
                                  onClick="toggleFAQSlideOver"
                                  type="button"
                                  class="bg-indigo-700 rounded-md text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                  <span class="sr-only">Close panel</span>
                                  <!-- Heroicon name: outline/x -->
                                  <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div class="mt-1">
                              <p class="text-sm text-indigo-300">
                                Get started by filling in the information below to create your new project.
                              </p>
                            </div>
                          </div>
                          <div class="flex-1 flex flex-col justify-between">
                            <div class="px-4 divide-y divide-gray-200 sm:px-6">
                              <div class="space-y-6 pt-6 pb-5">
                                <div>
                                  <label
                                    for="project-name"
                                    class="block text-sm font-medium text-gray-900"
                                  >
                                    Project name
                                  </label>
                                  <div class="mt-1">
                                    <input
                                      type="text"
                                      name="project-name"
                                      id="project-name"
                                      class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    >
                                  </div>
                                </div>
                                <div>
                                  <label
                                    for="description"
                                    class="block text-sm font-medium text-gray-900"
                                  >
                                    Description
                                  </label>
                                  <div class="mt-1">
                                    <textarea
                                      id="description"
                                      name="description"
                                      rows="4"
                                      class="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                                    ></textarea>
                                  </div>
                                </div>
                                <div>
                                  <h3 class="text-sm font-medium text-gray-900">
                                    Team Members
                                  </h3>
                                  <div class="mt-2">
                                    <div class="flex space-x-2">
                                      <a
                                        href="#"
                                        class="rounded-full hover:opacity-75"
                                      >
                                        <img
                                          class="inline-block h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt="Tom Cook"
                                        >
                                      </a>

                                      <a
                                        href="#"
                                        class="rounded-full hover:opacity-75"
                                      >
                                        <img
                                          class="inline-block h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt="Whitney Francis"
                                        >
                                      </a>

                                      <a
                                        href="#"
                                        class="rounded-full hover:opacity-75"
                                      >
                                        <img
                                          class="inline-block h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt="Leonard Krasner"
                                        >
                                      </a>

                                      <a
                                        href="#"
                                        class="rounded-full hover:opacity-75"
                                      >
                                        <img
                                          class="inline-block h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt="Floyd Miles"
                                        >
                                      </a>

                                      <a
                                        href="#"
                                        class="rounded-full hover:opacity-75"
                                      >
                                        <img
                                          class="inline-block h-8 w-8 rounded-full"
                                          src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                          alt="Emily Selman"
                                        >
                                      </a>

                                      <button
                                        type="button"
                                        class="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <span class="sr-only">Add team member</span>
                                        <!-- Heroicon name: solid/plus -->
                                        <svg
                                          class="h-5 w-5"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                          aria-hidden="true"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                            clip-rule="evenodd"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <fieldset>
                                  <legend class="text-sm font-medium text-gray-900">
                                    Privacy
                                  </legend>
                                  <div class="mt-2 space-y-5">
                                    <div class="relative flex items-start">
                                      <div class="absolute flex items-center h-5">
                                        <input
                                          id="privacy-public"
                                          name="privacy"
                                          aria-describedby="privacy-public-description"
                                          type="radio"
                                          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                          checked
                                        >
                                      </div>
                                      <div class="pl-7 text-sm">
                                        <label
                                          for="privacy-public"
                                          class="font-medium text-gray-900"
                                        >
                                          Public access
                                        </label>
                                        <p
                                          id="privacy-public-description"
                                          class="text-gray-500"
                                        >
                                          Everyone with the link will see this project.
                                        </p>
                                      </div>
                                    </div>
                                    <div>
                                      <div class="relative flex items-start">
                                        <div class="absolute flex items-center h-5">
                                          <input
                                            id="privacy-private-to-project"
                                            name="privacy"
                                            aria-describedby="privacy-private-to-project-description"
                                            type="radio"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                          >
                                        </div>
                                        <div class="pl-7 text-sm">
                                          <label
                                            for="privacy-private-to-project"
                                            class="font-medium text-gray-900"
                                          >
                                            Private to project members
                                          </label>
                                          <p
                                            id="privacy-private-to-project-description"
                                            class="text-gray-500"
                                          >
                                            Only members of this project would be able to access.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div class="relative flex items-start">
                                        <div class="absolute flex items-center h-5">
                                          <input
                                            id="privacy-private"
                                            name="privacy"
                                            aria-describedby="privacy-private-to-project-description"
                                            type="radio"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                          >
                                        </div>
                                        <div class="pl-7 text-sm">
                                          <label
                                            for="privacy-private"
                                            class="font-medium text-gray-900"
                                          >
                                            Private to you
                                          </label>
                                          <p
                                            id="privacy-private-description"
                                            class="text-gray-500"
                                          >
                                            You are the only one able to access this project.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                              <div class="pt-4 pb-6">
                                <div class="flex text-sm">
                                  <a
                                    href="#"
                                    class="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900"
                                  >
                                    <!-- Heroicon name: solid/link -->
                                    <svg
                                      class="h-5 w-5 text-indigo-500 group-hover:text-indigo-900"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span class="ml-2">
                                      Copy link
                                    </span>
                                  </a>
                                </div>
                                <div class="mt-4 flex text-sm">
                                  <a
                                    href="#"
                                    class="group inline-flex items-center text-gray-500 hover:text-gray-900"
                                  >
                                    <!-- Heroicon name: solid/question-mark-circle -->
                                    <svg
                                      class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                    <span class="ml-2">
                                      Learn more about sharing
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex-shrink-0 px-4 py-4 flex justify-end">
                          <button
                            type="button"
                            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            class="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="container px-6 mx-auto">
          <div class="pt-6 mt-6 border-t border-gray-300 sm:justify-between sm:items-center sm:flex">
            <p class="text-sm text-center text-gray-500 sm:text-left">
              Opt1mize starter v 1.0

            </p>

            <ul class="flex justify-center gap-6 mt-4 sm:mt-0 sm:justify-start">
              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span class="sr-only">Facebook</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span class="sr-only">Instagram</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span class="sr-only">Twitter</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span class="sr-only">GitHub</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span class="sr-only">Dribbble</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>

          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  middleware: 'auth',
})
</script>

<style>
</style>