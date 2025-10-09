const workingPapers = [
    {
    	id: 10,
        title: "The effect of competition in contests: A unifying approach",
        coauthors: "(with Andrzej Baranski)",
        conference_info: "",
        journal_info: "<i>Job Market Paper</i>",
        abstract: `We study all-pay contests with a general finite type-space and show that the most competitive winner-takes-all contest maximizes both total and maximum effort under linear or concave costs, resolving a long-standing open question in contest design. However, the effect of competition is nuanced, as we uncover an interior discouragement effect: making prizes more unequal may reduce effort if relatively inefficient types are sufficiently likely. An experiment provides qualitative support for these findings. Our analysis develops a novel methodology based on characterizing equilibrium effort through the probability of outperforming an arbitrary opponent, offering a broadly applicable tool particularly useful in settings where mixed equilibria hinder analysis. Moreover, it provides a unifying framework that reconciles contrasting results under complete information and continuum type-space environments (for which we establish an equilibrium convergence result).`,
        pdfLink: "files/contests_finitetype.pdf",
    },
    {
    	id: 9,
        title: "Swap Bounded Envy",
        coauthors: "(with Federico Echenique and SangMok Lee)",
        conference_info: "",
        journal_info: "",
        abstract: `We study fairness in the allocation of discrete goods. Exactly fair (envy-free) allocations are impossible, so we discuss notions of approximate fairness. In particular, we focus on allocations in which the swap of two items serves to eliminate any envy, either for the allocated bundles or with respect to a reference bundle. We propose an algorithm that, under some restrictions on agents' preferences, achieves an allocation with "swap bounded envy".`,
        pdfLink: "files/allocation_swapBE.pdf",
    },
    {
    	id: 8,
        title: "TTC Domains",
        coauthors: "(with Yuki Tamura)",
        conference_info: "Ext. abs. in <i><a href='https://wine2025.cs.rutgers.edu/'> Proc. of WINE 2025</a></i>",
        journal_info: "",
        abstract: `We study the object reallocation problem under strict preferences. On the unrestricted domain, Ekici (2024) showed that the Top Trading Cycles (TTC) mechanism is the unique mechanism that is individually rational, pair efficient, and strategyproof. We introduce a richness property on preference domains---the top-two condition---and show that this characterization extends to all domains satisfying it. The condition requires that within any subset of objects, if two objects can each be most-preferred, they can also be ranked as the top two (in either order). We further show that almost all domains failing the top-two condition for a triple or quadruple of objects admit non-TTC mechanisms satisfying the axioms. These results unify prior findings on specific domains, demonstrate the robustness of Ekici (2024)’s characterization, and suggest a minimal richness requirement that may underlie it.`,
        pdfLink: "files/exchange_ttc.pdf",
    },
    {
    	id: 7,
        title: "Multi-agent contract design with a budget",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1145/3670865.3673598'>Proc. of EC 2024</a></i>",
        journal_info: "R&R at <i>Games and Economic Behavior</i>",
        abstract: `We study a multi-agent contract design problem with moral hazard. In our model, each agent exerts costly effort towards an individual task at which it may either succeed or fail, and the principal, who wishes to encourage effort, has an exclusive-use budget that it can use to reward the agents. A motivating application is crowdsourcing for innovation, where a fixed budget is provided to a crowdsourcing platform to use for rewarding participants based on their submissions. Our main contribution is to introduce a novel class of contracts, which we call Luce contracts, and show that there is always a Luce contract that is optimal. A (generic) Luce contract assigns weights to the agents and distributes the entire budget among the successful agents in proportion to their weights. Furthermore, we characterize effort profiles that can be implemented by Luce contracts and show that Luce contracts offer a way to mitigate the uncertainty in total payments compared to alternative contracts—such as piece-rate or bonus-pool contracts—suggesting their desirability even in environments without budget constraints.`,
        pdfLink: "files/contract_multiagent.pdf",
    }
]

const publishedPapers = [
    {
    	id: 6,
        title: "An efficiency ordering of k-price auctions under complete information",
        coauthors: "(with Jeffrey Zeidel)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.econlet.2025.112565'>Economics Letters</a></i>, 2025",
        abstract: `We study k-price auctions in a complete information environment and characterize all pure-strategy Nash equilibrium outcomes. In a setting with n agents having ordered valuations, we show that any agent, except those with the lowest k-2 valuations, can win in equilibrium. As a consequence, worst-case welfare increases monotonically as we go from second-price auction (k=2) to lowest-price auction (k=n), with the first-price auction achieving the highest worst-case welfare.`,
        pdfLink: "files/auctions_efficiency.pdf",
    },
    {
    	id: 5,
        title: "Optimal grading contests",
        coauthors: "",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1145/3580507.3597670'>Proc. of EC 2023</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1016/j.geb.2025.04.005'>Games and Economic Behavior</a></i>, 2025",
        abstract: `We study the design of effort-maximizing grading schemes between agents with private abilities. Assuming agents derive value from the information their grade reveals about their ability, we find that more informative grading schemes induce more competitive contests. In the contest framework, we investigate the effect of manipulating individual prizes and increasing competition on expected effort, identifying conditions on ability distributions and cost functions under which these transformations may encourage or discourage effort. Our results suggest that more informative grading schemes encourage effort when agents of moderate ability are highly likely, and discourage effort when such agents are unlikely.`,
        pdfLink: "files/contests_grading.pdf",
    },
    {
    	id: 4,
        title: "Project selection with partially verifiable information",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in   <i><a href='https://doi.org/10.1007/978-3-031-22832-2'>Proc. of WINE 2022</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1016/j.mathsocsci.2024.10.003'>Mathematical Social Sciences</a></i>, 2024",
        abstract: `We study a principal-agent project selection problem with asymmetric information. The principal must choose exactly one of \\( N \\) projects, each defined by the utility it provides to the principal and to the agent. The agent knows all the utilities, and the principal can commit to a mechanism (without transfers) that maps the agent's report about the utilities to a chosen project. Unlike the typical literature, which assumes the agent can lie arbitrarily, we examine the principal's problem under partial verifiability constraints. We characterize the class of truthful mechanisms under a family of partial verifiability constraints and study the principal's problem for the specific cases of no-overselling and no-underselling. Our results suggest significant benefits for the principal from identifying or inducing such partial verifiability constraints, while also highlighting the simple mechanisms that perform well.`,
        pdfLink: "files/mechdesign_projects.pdf",
    },
    {
    	id: 3,
        title: "Stable allocations in discrete exchange economies",
        coauthors: "(with Federico Echenique and SangMok Lee)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.jet.2024.105921'>Journal of Economic Theory</a></i>, 2024",
        abstract: `We study stable allocations in an exchange economy with indivisible goods. The problem is well-known to be challenging, and rich enough to encode fundamentally unstable economies, such as the roommate problem. Our approach stems from generalizing the original study of an exchange economy with unit demand and unit endowments, the housing model. Our first approach uses Scarf's theorem, and proposes sufficient conditions under which a \"convexify then round\" technique ensures that the core is nonempty. The upshot is that a core allocation exists in categorical economies with dichotomous preferences. Our second approach uses a generalization of the TTC: it works under general conditions, and finds a solution that is a version of the stable set. `,
        pdfLink: "files/exchange_stable.pdf",
    },
    {
    	id: 2,
        title: "Optimal tie-breaking rules",
        coauthors: "(with Amit Goyal)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.jmateco.2023.102872'>Journal of Mathematical Economics</a></i>, 2023",
        abstract: `We consider two-player contests with the possibility of ties and study the effect of different tie-breaking rules on effort. For ratio-form and difference-form contests that admit pure-strategy Nash equilibrium, we find that the effort of both players is monotone decreasing in the probability that ties are broken in favor of the stronger player. Thus, the effort-maximizing tie-breaking rule commits to breaking ties in favor of the weaker agent. With symmetric agents, we find that the equilibrium is generally symmetric and independent of the tie-breaking rule. We also study the design of random tie-breaking rules that are unbiased ex-ante and identify sufficient conditions under which breaking ties before the contest actually leads to greater expected effort than the more commonly observed practice of breaking ties after the contest.`,
        pdfLink: "files/contests_tiebreak.pdf",
    },
    {
    	id: 1,
        title: "Optimality of the coordinate-wise median mechanism for strategyproof facility location in two dimensions",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1007/978-3-031-15714-1'>Proc. of SAGT 2022</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1007/s00355-022-01435-1'>Social Choice and Welfare</a></i>, 2023",
        abstract: `We consider the facility location problem in two dimensions. In particular, we consider a setting where agents have Euclidean preferences, defined by their ideal points, for a facility to be located in \\( \\mathbb{R}^2 \\).  We show that for the  p-norm ( \\( p \\geq 1 \\)) objective, the coordinate-wise median mechanism (CM) has the lowest worst-case  approximation ratio  in the class of deterministic, anonymous, and strategyproof mechanisms. For the minisum objective and an odd number of agents \\( n \\), we show that CM has a worst-case approximation ratio (AR) of \\( \\sqrt{2}\\frac{\\sqrt{n^2+1}}{n+1} \\). For the p-norm social cost objective (\\( p\\geq 2 \\)),  we find that the AR for CM is bounded above by \\( 2^{\\frac{3}{2}-\\frac{2}{p}} \\). We conjecture that the AR of CM actually equals the lower bound \\( 2^{1-\\frac{1}{p}} \\) (as is the case for \\( p=2 \\) and \\( p=\\infty\\)) for any \\( p\\geq 2 \\).`,
        pdfLink: "files/mechdesign_facility.pdf",
    }
]


const workingPapersContainer = document.getElementById("working-papers-container");
workingPapers.forEach(item => {
    workingPapersContainer.innerHTML += generateResearchHTML(item);
});

const publishedPapersContainer = document.getElementById("published-papers-container");
publishedPapers.forEach(item => {
    publishedPapersContainer.innerHTML += generateResearchHTML(item);
});

function generateResearchHTML(item) {
	return `
        <li>
          	<p> <b>${item.title}</b><br>
          	${item.coauthors ? `${item.coauthors}<br>` : ''}
      		${item.conference_info ? `${item.conference_info}<br>` : ''}
      		${item.journal_info ? `${item.journal_info}<br>` : ''}
      		<button id="button-${item.id}" onclick="toggleAbstract(${item.id})">Abstract +</button> <button><a href="${item.pdfLink}">PDF</a></button>
      		</p>
      		
          	<p class="abstract" id="abstract-${item.id}">${item.abstract}</p>
        </li>
        	`;
}


function toggleAbstract(id) {
  const abstract = document.getElementById(`abstract-${id}`);
  const button = document.getElementById(`button-${id}`);
  if (abstract.style.display === "block") {
    abstract.style.display = "none";
    button.innerHTML = "Abstract +";
  } else {
    abstract.style.display = "block";
    button.innerHTML = "Abstract -";
  }
}
