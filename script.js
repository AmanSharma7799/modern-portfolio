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
      <a href="${project.link}" class="text-teal-600 hover:underline break-words">Link: ${project.link}</a>
      <hr style="height: 1px; background-color: grey; border: none;">
      <p class="text-sm text-gray-600 mb-2">${project.desc}</p>
    `;
    projectsList.appendChild(div);
  });
});
