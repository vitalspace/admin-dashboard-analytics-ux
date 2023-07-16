<script lang="ts">
  console.log("Hello admin-dashboard-analytics-ux");
</script>

<div class="absolute inset-0 bg-[#faf9f3]">
  <div class="fixed inset-0 flex w-72 flex-wrap border-l-2">
    <section class="flex w-72 flex-col items-center justify-between space-y-4 px-8 py-8">
      <header class="mt-20 w-full space-y-8 text-center">
        <h2 class="text-3xl font-bold">Solarius</h2>
        <div class="flex flex-col space-y-4">
          <button class="flex items-center space-x-2 bg-[#eee6e0] px-5 py-2 font-bold">
            <img class="h-8 w-8" src="graph-svgrepo-com.svg" alt="graph" />
            <span>Dashbord</span>
          </button>
          <button class="flex items-center space-x-2 px-5 py-2 font-bold">
            <img class="h-8 w-8" src="education-learning-20-svgrepo-com.svg" alt="education" />
            <p>Education</p>
          </button>
          <button class="flex items-center space-x-2 px-5 py-2 font-bold">
            <img class="h-8 w-8" src="copy-svgrepo-com.svg" alt="education" />
            <p>Resuources</p>
          </button>
          <button class="flex items-center space-x-2 px-5 py-2 font-bold">
            <img class="h-8 w-8" src="settings-svgrepo-com.svg" alt="settings" />
            <p>Settings</p>
          </button>
        </div>
      </header>
      <footer class="flex items-center space-x-4">
        <button class="h-10 w-10 rounded-full bg-[url('/log-out-02-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></button>
        <p class="font-bold">Log out</p>
      </footer>
    </section>
  </div>

  <div class="absolute inset-0 ml-72">
    <div class="fixed inset-0 ml-72 flex">
      <div class="flex w-1/2 flex-wrap items-center space-y-4 bg-white px-8 py-8">
        <section class="w-full">
          <header class="flex justify-between">
            <div>
              <h2 class="text-2xl">Today's Plan</h2>
              <p>Jul 14th 2023</p>
            </div>
            <button class="h-10 w-10 rounded-full bg-[url('/cross-circle-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></button>
          </header>
        </section>

        <section class="w-full space-y-4">
          <header><h2 class="text-3xl">Sustainable development goals and health innovation</h2></header>
          <div class="flex justify-between">
            <div class="flex">
              <div class="h-10 w-10 rounded-full bg-cyan-400"></div>
              <div class="h-10 w-10 rounded-full bg-slate-400"></div>
              <div class="h-10 w-10 rounded-full bg-pink-400"></div>
            </div>
            <div class="border-l-2 pl-4">
              <h2 class="text-xl font-bold">Medi Team meeting</h2>
              <p>13:30 - 14:50</p>
            </div>
          </div>
        </section>

        <section class="flex h-2/5 w-full flex-col justify-between space-y-4 border-2 bg-gradient-to-br from-[#ece4d3] via-[#d6ddd3] to-[#98aeb0] px-8 py-8">
          <header>
            <h2 class="text-2xl font-bold">Weekly report</h2>
            <p>Track your performance</p>
          </header>
          <footer>
            <button class="border-2 border-black px-2 py-2 font-bold">VIEW REPORT</button>
          </footer>
        </section>

        <section class="flex w-full space-x-4">
          <div class="h-72 w-1/2 space-y-4 border-2 bg-gradient-to-br from-[#e6ccc1] via-[#e0c8c3] to-[#fadfc6] pl-8 pt-8">
            <h2 class="text-2xl font-bold">Study 78x</h2>
            <div class="flex space-x-2">
              <img class="h-7 w-7" src="time-filled-svgrepo-com.svg" alt="" />
              <p>In progress</p>
            </div>
          </div>

          <div class="h-72 w-1/2 space-y-4 border-2 bg-gradient-to-br from-[#e6ccc1] via-[#e0c8c3] to-[#fadfc6] pl-8 pt-8">
            <h2 class="text-2xl font-bold">Analyses</h2>
            <div class="flex space-x-2">
              <img class="h-7 w-7" src="check-svgrepo-com.svg" alt="" />
              <p>Completed</p>
            </div>
          </div>
        </section>
      </div>

      <div class="flex w-1/2 flex-wrap items-center space-y-4 px-8">
        <section class="w-full">
          <header class="flex justify-between">
            <h2 class="text-2xl font-bold">Monthly pinned</h2>
            <p>View all</p>
          </header>
        </section>

        <section class="w-full space-y-4">
          <div class="space-y-4 bg-white px-8 py-4 shadow-md">
            <header class="flex justify-between">
              <h2>Next-gen inmmuno</h2>
              <p>5d</p>
            </header>
            <div>
              <h3 class="text-xl font-bold">Multispectific liquids analysis</h3>
            </div>
            <footer class="flex items-center space-x-2">
              <img class="h-7 w-7" src="bell-bing-svgrepo-com.svg" alt="" />
              <p>New feedback</p>
            </footer>
          </div>

          <div class="space-y-4 bg-white px-8 py-4 shadow-md">
            <header class="flex justify-between">
              <h2>Harmony</h2>
              <p>5d</p>
            </header>
            <div>
              <h3 class="font-bold">Protein characterization during childhood and pregnancy</h3>
            </div>
            <footer class="flex items-center space-x-2">
              <img class="h-7 w-7" src="exclamation-svgrepo-com.svg" alt="" />
              <p>Deadline is today</p>
            </footer>
          </div>

          <div class="space-y-4 bg-white px-8 py-4 shadow-md">
            <header class="flex justify-between">
              <h2>Pharmaceutical</h2>
              <p>5d</p>
            </header>
            <div>
              <h3 class="font-bold">Quick element dissolution testing</h3>
            </div>
            <footer class="flex items-center space-x-2">
              <img class="h-7 w-7" src="check-svgrepo-com.svg" alt="" />
              <p>Accepted</p>
            </footer>
          </div>
        </section>

        <section class="w-full space-y-4">
          <header>
            <div class="flex justify-between">
              <h2 class="text-2xl font-bold">My learnings</h2>
              <p>...</p>
            </div>
            <p>Your progress of medical lectures</p>
          </header>

          <div class="flex flex-wrap items-center justify-between py-2">
            <div class="my-2 flex w-2/5 items-center space-x-4">
              <div class="h-20 w-20 bg-[url('/shapes-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></div>
              <div>
                <h2 class="font-bold">Viruses</h2>
                <p>96% progress</p>
              </div>
            </div>

            <div class="my-2 flex w-2/5 items-center space-x-4">
              <div class="h-20 w-20 bg-[url('/shapes-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></div>
              <div>
                <h2 class="font-bold">Med scinece</h2>
                <p>33% progress</p>
              </div>
            </div>

            <div class="my-2 flex w-2/5 items-center space-x-4">
              <div class="h-20 w-20 bg-[url('/shapes-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></div>
              <div>
                <h2 class="font-bold">Bacterial cells</h2>
                <p>7% progress</p>
              </div>
            </div>

            <div class="my-2 flex w-2/5 items-center space-x-4">
              <div class="h-20 w-20 bg-[url('/shapes-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></div>
              <div>
                <h2 class="font-bold">Human gens</h2>
                <p>58% progress</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="flex w-72 flex-wrap bg-white px-8">
        <section class="flex w-full flex-col items-center justify-between space-y-4 px-8 py-8">
          <header class="flex flex-col items-center space-y-2 text-center">
            <figure class="h-20 w-20 rounded-full bg-[url('/vitalspace.png')] bg-cover bg-center bg-no-repeat shadow-lg"></figure>
            <div>
              <h2 class="text-xl font-bold">JrDev</h2>
              <p>Developer</p>
            </div>
          </header>
          <footer class="flex flex-col items-center space-y-4">
            <button class="h-10 w-10 rounded-full bg-[url('/write-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat shadow-lg"></button>
            <button class="h-10 w-10 rounded-full bg-[url('/message-square-lines-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat shadow-lg"></button>
            <button class="h-16 w-16 rounded-full bg-[url('/cross-circle-svgrepo-com.svg')] bg-cover bg-center bg-no-repeat"></button>
          </footer>
        </section>
      </div>
    </div>
  </div>
</div>
