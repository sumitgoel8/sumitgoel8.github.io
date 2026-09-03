/* Google Analytics */
(function () {
  const measurementId = "G-NX2T0MVJLL";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

  document.head.appendChild(script);
})();


const workingPapers = [
    {
    	id: 11,
        title: "The Effect of Competition in Contests: A Unifying Approach",
        coauthors: "(with Andrzej Baranski)",
        conference_info: "",
        journal_info: "",
        abstract: `We study all-pay contests under finite type-spaces, examining how the competitiveness of the prize structure affects effort. We characterize the unique symmetric equilibrium and analyze it through a novel quantile representation. Our results establish the most competitive winner-takes-all contest as robustly optimal---it maximizes the total effort across the top q agents, for any q, under linear, concave, and even moderately convex costs. Even so, the effect of competition is not monotone, as we uncover an <i>interior discouragement effect</i>: shifting value toward better-ranked intermediate prizes may reduce effort when inefficient types are relatively likely. An experiment provides qualitative support for these findings. Our framework embeds complete-information (Fang, Noe, and Strack, 2020) as a special case and can approximate any continuum type-space (Moldovanu and Sela, 2001), for which we also establish an equilibrium convergence result. Our analysis thus offers a unifying lens on the contrasting results in these environments.`,
        pdfLink: "files/contests_finitetype.pdf",
    },
    {
    	id: 10,
        title: "Swap Bounded Envy",
        coauthors: "(with Federico Echenique and SangMok Lee)",
        conference_info: "",
        journal_info: "",
        abstract: `We study fairness in the allocation of discrete goods. Exactly fair (envy-free) allocations are impossible, so we discuss notions of approximate fairness. In particular, we focus on allocations in which the swap of two items serves to eliminate any envy, either for the allocated bundles or with respect to a reference bundle. We propose an algorithm that, under some restrictions on agents' preferences, achieves an allocation with "swap bounded envy".`,
        pdfLink: "files/allocation_swapBE.pdf",
    },
    {
    	id: 9,
        title: "Feedback in Dynamic Contests: Theory and Experiment",
        coauthors: "(with Yiqing Yan and Jeffrey Zeidel)",
        conference_info: "",
        journal_info: "",
        abstract: `We study the effect of feedback policies in a two-stage all-pay auction with two players. Equilibrium outcomes are characterized by Cheapest Signal Equilibria, wherein at least one agent bids 0 in stage 1, payoffs for both players are zero, and sum of total bids equals the prize value. We conduct an experiment with four natural feedback policy treatments---full, rank, and two cutoff policies---and while the bids deviate from equilibrium, we fail to reject the hypothesis of no treatment effect on total bids. We also test for the effect of sunk costs and head starts from stage 1 bids on stage 2 bids.`,
        pdfLink: "files/contests_feedback.pdf",
    },
    {
    	id: 8,
        title: "TTC Domains",
        coauthors: "(with Yuki Tamura)",
        conference_info: "Ext. abs. in <a href='https://doi.org/10.1007/978-3-032-18660-7'> Proc. of WINE 2025</a>",
        journal_info: "R&R at Games and Economic Behavior",
        abstract: `For the object reallocation problem, we study whether characterizations of Top Trading Cycles (TTC) based on individual rationality, efficiency, and strategyproofness on the unrestricted domain extend to restricted preference domains. We introduce the top-two condition and show that it offers a useful criterion for answering this question. The condition requires that, within every subset of objects, any two objects that can each be ranked first can also be ranked as the top two, in both possible orders. We first show that this condition is sufficient: on every domain satisfying the top-two condition, TTC is the unique rule satisfying the relevant axioms. We also provide a partial converse. For domains that fail the top-two condition within a small subset of objects and satisfy a mild extension condition, we construct a rule distinct from TTC satisfying these axioms. Our results provide a unifying perspective on existing findings for specific domains, such as the single-peaked and single-dipped domains, while also addressing several previously unexplored domains, including the circular and partial-agreement domains.`,
        pdfLink: "files/exchange_ttc.pdf",
    }
]

const publishedPapers = [
    {
    	id: 7,
        title: "Multi-Agent Contract Design with a Budget",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <a href='https://doi.org/10.1145/3670865.3673598'>Proc. of EC 2024</a>",
        journal_info: "Games and Economic Behavior, 2026",
        abstract: `We study a multi-agent contract design problem with moral hazard. In our model, each agent exerts costly effort towards an individual task at which it may either succeed or fail, and the principal, who wishes to encourage effort, has an exclusive-use budget that it can use to reward the agents. A motivating application is crowdsourcing for innovation, where a fixed budget is provided to a crowdsourcing platform to use for rewarding participants based on their submissions. Our main contribution is to introduce a novel class of contracts, which we call Luce contracts, and show that there is always a Luce contract that is optimal. A (generic) Luce contract assigns weights to the agents and distributes the entire budget among the successful agents in proportion to their weights. Furthermore, we characterize effort profiles that can be implemented by Luce contracts and show that Luce contracts offer a way to mitigate the uncertainty in total payments compared to alternative contracts—such as piece-rate or bonus-pool contracts—suggesting their desirability even in environments without budget constraints.`,
        pdfLink: "files/contract_multiagent.pdf",
    },
    {
    	id: 6,
        title: "An Efficiency Ordering of k-Price Auctions under Complete Information",
        coauthors: "(with Jeffrey Zeidel)",
        conference_info: "",
        journal_info: "<a href='https://doi.org/10.1016/j.econlet.2025.112565'>Economics Letters</a>, 2025",
        abstract: `We study k-price auctions in a complete information environment and characterize all pure-strategy Nash equilibrium outcomes. In a setting with n agents having ordered valuations, we show that any agent, except those with the lowest k-2 valuations, can win in equilibrium. As a consequence, worst-case welfare increases monotonically as we go from second-price auction (k=2) to lowest-price auction (k=n), with the first-price auction achieving the highest worst-case welfare.`,
        pdfLink: "files/auctions_efficiency.pdf",
    },
    {
    	id: 5,
        title: "Optimal Grading Contests",
        coauthors: "",
        conference_info: "Ext. abs. in  <a href='https://doi.org/10.1145/3580507.3597670'>Proc. of EC 2023</a>",
        journal_info: "<a href='https://doi.org/10.1016/j.geb.2025.04.005'>Games and Economic Behavior</a>, 2025",
        abstract: `We study the design of effort-maximizing grading schemes between agents with private abilities. Assuming agents derive value from the information their grade reveals about their ability, we find that more informative grading schemes induce more competitive contests. In the contest framework, we investigate the effect of manipulating individual prizes and increasing competition on expected effort, identifying conditions on ability distributions and cost functions under which these transformations may encourage or discourage effort. Our results suggest that more informative grading schemes encourage effort when agents of moderate ability are highly likely, and discourage effort when such agents are unlikely.`,
        pdfLink: "files/contests_grading.pdf",
    },
    {
    	id: 4,
        title: "Project Selection with Partially Verifiable Information",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in   <a href='https://doi.org/10.1007/978-3-031-22832-2'>Proc. of WINE 2022</a>",
        journal_info: "<a href='https://doi.org/10.1016/j.mathsocsci.2024.10.003'>Mathematical Social Sciences</a>, 2024",
        abstract: `We study a principal-agent project selection problem with asymmetric information. The principal must choose exactly one of \\( N \\) projects, each defined by the utility it provides to the principal and to the agent. The agent knows all the utilities, and the principal can commit to a mechanism (without transfers) that maps the agent's report about the utilities to a chosen project. Unlike the typical literature, which assumes the agent can lie arbitrarily, we examine the principal's problem under partial verifiability constraints. We characterize the class of truthful mechanisms under a family of partial verifiability constraints and study the principal's problem for the specific cases of no-overselling and no-underselling. Our results suggest significant benefits for the principal from identifying or inducing such partial verifiability constraints, while also highlighting the simple mechanisms that perform well.`,
        pdfLink: "files/mechdesign_projects.pdf",
    },
    {
    	id: 3,
        title: "Stable Allocations in Discrete Exchange Economies",
        coauthors: "(with Federico Echenique and SangMok Lee)",
        conference_info: "",
        journal_info: "<a href='https://doi.org/10.1016/j.jet.2024.105921'>Journal of Economic Theory</a>, 2024",
        abstract: `We study stable allocations in an exchange economy with indivisible goods. The problem is well-known to be challenging, and rich enough to encode fundamentally unstable economies, such as the roommate problem. Our approach stems from generalizing the original study of an exchange economy with unit demand and unit endowments, the housing model. Our first approach uses Scarf's theorem, and proposes sufficient conditions under which a \"convexify then round\" technique ensures that the core is nonempty. The upshot is that a core allocation exists in categorical economies with dichotomous preferences. Our second approach uses a generalization of the TTC: it works under general conditions, and finds a solution that is a version of the stable set. `,
        pdfLink: "files/exchange_stable.pdf",
    },
    {
    	id: 2,
        title: "Optimal Tie-Breaking Rules",
        coauthors: "(with Amit Goyal)",
        conference_info: "",
        journal_info: "<a href='https://doi.org/10.1016/j.jmateco.2023.102872'>Journal of Mathematical Economics</a>, 2023",
        abstract: `We consider two-player contests with the possibility of ties and study the effect of different tie-breaking rules on effort. For ratio-form and difference-form contests that admit pure-strategy Nash equilibrium, we find that the effort of both players is monotone decreasing in the probability that ties are broken in favor of the stronger player. Thus, the effort-maximizing tie-breaking rule commits to breaking ties in favor of the weaker agent. With symmetric agents, we find that the equilibrium is generally symmetric and independent of the tie-breaking rule. We also study the design of random tie-breaking rules that are unbiased ex-ante and identify sufficient conditions under which breaking ties before the contest actually leads to greater expected effort than the more commonly observed practice of breaking ties after the contest.`,
        pdfLink: "files/contests_tiebreak.pdf",
    },
    {
    	id: 1,
        title: "Optimality of the Coordinate-Wise Median Mechanism for Strategyproof Facility Location in Two Dimensions",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <a href='https://doi.org/10.1007/978-3-031-15714-1'>Proc. of SAGT 2022</a>",
        journal_info: "<a href='https://doi.org/10.1007/s00355-022-01435-1'>Social Choice and Welfare</a>, 2023",
        abstract: `We consider the facility location problem in two dimensions. In particular, we consider a setting where agents have Euclidean preferences, defined by their ideal points, for a facility to be located in \\( \\mathbb{R}^2 \\).  We show that for the  p-norm ( \\( p \\geq 1 \\)) objective, the coordinate-wise median mechanism (CM) has the lowest worst-case  approximation ratio  in the class of deterministic, anonymous, and strategyproof mechanisms. For the minisum objective and an odd number of agents \\( n \\), we show that CM has a worst-case approximation ratio (AR) of \\( \\sqrt{2}\\frac{\\sqrt{n^2+1}}{n+1} \\). For the p-norm social cost objective (\\( p\\geq 2 \\)),  we find that the AR for CM is bounded above by \\( 2^{\\frac{3}{2}-\\frac{2}{p}} \\). We conjecture that the AR of CM actually equals the lower bound \\( 2^{1-\\frac{1}{p}} \\) (as is the case for \\( p=2 \\) and \\( p=\\infty\\)) for any \\( p\\geq 2 \\).`,
        pdfLink: "files/mechdesign_facility.pdf",
    }
]


const ashokaCourses = [
  {
    name: "Algorithmic Economics",
    term: "Monsoon 2026",
//     links: [
//       { label: "webpage", url: "algoecon.html" },
//     ],
    links: [],
  },
  {
    name: "Microeconomics (1-Yr MA)",
    term: "Monsoon 2026",
//     links: [
//       { label: "webpage", url: "micro.html" },
//     ],
    links: [],
  },
]

const nyuadCourses = [
  {
    name: "Intermediate Microeconomics",
    term: "Spring 2024\u201326",
    links: [],
  },
]

const caltechCourses = [
  {
    name: "Algorithmic Economics",
    term: "Spring 2022\u201323",
    links: [
      { label: "notes", url: "https://fedors.info/tutorials/2022ec149/ec149_Fedor_Sandomirskiy_lecture_notes.pdf" },
    ],
  },
  {
    name: "Theory of Value",
    term: "Fall 2021",
    links: [
      { label: "notes", url: "https://farzad-pourbabaee.github.io/Teaching/EC121a_Fall2021/EC121a_Lecture_Notes.pdf" },
    ],
  },
  {
    name: "Introduction to Finance",
    term: "Winter 2020, Winter 2022",
    links: [],
  },
  {
    name: "Game Theory",
    term: "Spring 2020",
    links: [
      { label: "notes", url: "http://tamuz.caltech.edu/teaching/ps172/lectures.pdf" },
    ],
  },
  {
    name: "Introduction to Economics",
    term: "Winter 2019",
    links: [
      { label: "edX", url: "https://learning.edx.org/course/course-v1:CaltechX+Ec1011x+1T2019/home" },
    ],
  },
  {
    name: "Econometrics",
    term: "Fall 2018\u201319",
    links: [],
  },
]

const econschoolCourses = [
  {
    name: "Mathematics for Economists",
    term: "Fall 2020",
    links: [],
  },
]


function courseHTML(item){
  const sep = `<span class="sep">·</span>`;
  const links = (item.links || [])
    .map(l => `<a href="${l.url}">[${l.label}]</a>`)
    .join(sep);
  const parts = [item.term, links].filter(Boolean).join(sep);
  const meta = parts ? `<div class="course-meta">${parts}</div>` : "";

  return `
    <li>
      <div class="course">${item.name}</div>
      ${meta}
    </li>
  `;
}


function paperHTML(item){
  const metaLines = [item.coauthors, item.conference_info, item.journal_info].filter(Boolean);
  const meta = metaLines.length ? `<p class="paper-meta">${metaLines.join("<br>")}</p>` : "";

  return `
    <li>
      <p class="paper-title">${item.title}</p>
      ${meta}
      <p class="paper-links">
        <a href="${item.pdfLink}">[pdf]</a>
        <button class="linklike" id="button-${item.id}" type="button" onclick="toggleAbstract(${item.id})" aria-expanded="false">[abstract]</button>
      </p>
      <div class="abstract" id="abstract-${item.id}">${item.abstract}</div>
    </li>
  `;
}

function render(){
  const wp = document.getElementById("working-papers-container");
  const pp = document.getElementById("published-papers-container");
  if (wp) wp.innerHTML = workingPapers.map(paperHTML).join("");
  if (pp) pp.innerHTML = publishedPapers.map(paperHTML).join("");

  const ash = document.getElementById("ashoka-container");
  const ny = document.getElementById("nyuad-container");
  const ct = document.getElementById("caltech-container");
  const es = document.getElementById("econschool-container");
  
  if (ash) ash.innerHTML = ashokaCourses.map(courseHTML).join("");
  if (ny) ny.innerHTML = nyuadCourses.map(courseHTML).join("");
  if (ct) ct.innerHTML = caltechCourses.map(courseHTML).join("");
  if (es) es.innerHTML = econschoolCourses.map(courseHTML).join("");

  if (window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise();
}

function toggleAbstract(id){
  const abs = document.getElementById(`abstract-${id}`);
  const btn = document.getElementById(`button-${id}`);
  if (!abs || !btn) return;

  const open = abs.style.display === "block";
  abs.style.display = open ? "none" : "block";
  btn.textContent = open ? "[abstract]" : "[hide abstract]";
  btn.setAttribute("aria-expanded", String(!open));

  if (!open && window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([abs]);
}

/* Theme toggle */
(function(){
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  const root = document.documentElement;

  function systemDark(){
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function effectiveDark(){
    const t = root.getAttribute("data-theme");
    if (t === "dark") return true;
    if (t === "light") return false;
    return systemDark();
  }
  function label(){
    btn.textContent = effectiveDark() ? "Light mode" : "Dark mode";
  }

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  label();

  btn.addEventListener("click", () => {
    const next = effectiveDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    label();
  });
})();

render();

/* Open all links except top navigation in a new tab */
document.querySelectorAll("a").forEach(link => {
  if (!link.closest(".topnav")) {
    link.target = "_blank";
    link.rel = "noopener";
  }
});
