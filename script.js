document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  $("name").textContent = portfolio.name;
  $("nameInline").textContent = portfolio.name;
  $("title").textContent = portfolio.title;
  $("bio").textContent = portfolio.bio;
  $("emailLink").textContent = portfolio.email;
  $("emailLink").href = "mailto:" + portfolio.email;
  $("contactNumber").textContent = portfolio.contact;
  $("contactNumber").href = "tel:" + portfolio.contact.replace(/\s+/g, "");
  $("github").href = portfolio.github;
  $("X").href = portfolio.X;
  $("year").textContent = new Date().getFullYear();

  const skillsList = $("skillsList");
  portfolio.skills.forEach((skill) => {
    const div = document.createElement("div");
    div.className =
      "bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full";
    div.textContent = skill;
    skillsList.appendChild(div);
  });

  // const experienceList = $("experienceList");
  // portfolio.experience.forEach((exp) => {
  //   const div = document.createElement("div");
  //   div.className =
  //     "flex items-start gap-4 p-4 border border-purple-200 rounded-xl shadow bg-white";

  //   div.innerHTML = `
  //   <img src="${exp.logo}" alt="${
  //     exp.company
  //   } Logo" class="w-16 h-16 rounded-md object-contain border border-gray-300" />
  //   <div>
  //     <h4 class="text-xl font-semibold text-purple-700">${exp.title}</h4>
  //     <p class="text-teal-600 font-medium">${exp.company}</p>
  //     <p class="text-sm text-gray-500 mb-2">${exp.duration}</p>
  //     <ul class="list-disc list-inside text-sm text-gray-700 space-y-1">
  //       ${exp.responsibilities.map((item) => `<li>${item}</li>`).join("")}
  //     </ul>
  //   </div>
  // `;
  //   experienceList.appendChild(div);
  // });

  // const experienceList = $("experienceList");
  // portfolio.experience.forEach((exp) => {
  //   const div = document.createElement("div");
  //   div.className =
  //     "text-center p-6 border border-purple-200 rounded-xl shadow bg-white";

  //   div.innerHTML = `
  //   <img src="${exp.logo}" alt="${
  //     exp.company
  //   } Logo" class="w-20 h-20 mx-auto mb-4 rounded-md object-contain border border-gray-300 shadow" />
  //   <h4 class="text-xl font-semibold text-purple-700">${exp.company}</h4>
  //   <p class="text-teal-600 font-medium mt-1">${exp.title}</p>
  //   <p class="text-sm text-gray-500 mb-4">${exp.duration}</p>
  //   <ul class="list-disc text-left list-inside text-sm text-gray-700 space-y-1 max-w-xl mx-auto">
  //     ${exp.responsibilities.map((item) => `<li>${item}</li>`).join("")}
  //   </ul>
  // `;
  //   experienceList.appendChild(div);
  // });

  const experienceList = $("experienceList");
  portfolio.experience.forEach((exp) => {
    const div = document.createElement("div");
    div.className =
      "max-w-md mx-auto text-center p-6 border border-purple-200 rounded-xl shadow bg-white";

    div.innerHTML = `
    <img src="${exp.logo}" alt="${
      exp.company
    } Logo" class="w-20 h-20 mx-auto mb-4 rounded-md object-contain border border-gray-300 shadow" />
    <h4 class="text-xl font-semibold text-purple-700">${exp.company}</h4>
    <p class="text-teal-600 font-medium mt-1">${exp.title}</p>
    <p class="text-sm text-gray-500 mb-4">${exp.duration}</p>
    <ul class="list-disc text-left list-inside text-sm text-gray-700 space-y-1">
      ${exp.responsibilities.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
    experienceList.appendChild(div);
  });

  const projectsList = $("projectsList");
  portfolio.projects.forEach((project) => {
    const iconClass =
      project.platform === "github" ? "fab fa-github" : "fas fa-bolt"; // Customize as needed

    const div = document.createElement("div");
    div.className = "bg-white border border-purple-200 rounded-xl p-4 shadow";
    div.innerHTML = `
      <div class="flex items-center gap-3 mb-2">
        <i class="${iconClass} text-purple-600 text-xl"></i>
        <h4 class="text-xl font-semibold text-purple-700">${project.name}</h4>
      </div>
      <a href="${project.link}" class="text-teal-600 hover:underline break-words">View Project -></a>
      <hr style="height: 1px; background-color: grey; border: none;">
      <p class="text-sm text-gray-600 mb-2">${project.desc}</p>
    `;
    projectsList.appendChild(div);
  });
});
