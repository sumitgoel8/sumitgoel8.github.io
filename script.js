const workingPapers = [
    {
    	id: 7,
        title: "Contest design with a finite type-space: A unifying approach",
        coauthors: "(with Andrzej Baranski)",
        conference_info: "",
        journal_info: "",
        abstract: `We study the classical contest design problem of allocating a budget across prizes to maximize effort. While the previous literature has predominantly focused on continuum type-space or complete information domains, we analyse the finite type-space domain, thus providing a unifying approach that sheds light on the contrasting structure of optimal contests in these extreme environments. Our results include a characterization of the equilibrium, which involves agents mixing over contiguous intervals and converges to the appropriate continuum type-space equilibrium, and an investigation of how increasing competition influences effort, leading to optimality of winner-takes-all contest under linear and concave costs.`,
        pdfLink: "files/contests_finitetype.pdf",
    },
    {
    	id: 6,
        title: "Optimality of weighted contracts for multi-agent contract design with a budget",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <i><a href='https://ec24.sigecom.org/program/accepted-papers/'>Proc. of EC 2024</a></i>",
        journal_info: "",
        abstract: `We study a contract design problem between a principal and multiple agents. Each agent participates in an independent task, in which it may exert costly effort towards improving its probability of success, and the principal has a fixed budget which it can use to provide outcome-dependent rewards to the agents. Assuming the principal cares only about maximizing the agents' probabilities of success, and not how much of the budget it expends, we characterize the Pareto frontier of success probability profiles that can be implemented in Nash equilibrium as equilibria of successful-get-everything contracts. An immediate consequence of this result is that piece-rate contracts and bonus-pool contracts, two types of contracts which are well-studied and motivated in the literature on multi-agent contract design, are never optimal in this setting. We then identify a natural subclass called priority-based weighted contracts which we show is actually sufficient to implement the Pareto frontier, thus providing a significant reduction in the dimensionality of the principal's optimal contract design problem. Finally, we solve the design problem for the special case with two agents and quadratic costs where our results suggest that the structure of the optimal contract depends primarily on the bias in the principal's objective and is, to some extent, robust to the heterogeneity in the agents' cost functions.`,
        pdfLink: "files/contract_multiagent.pdf",
    },
    {
    	id: 5,
        title: "Optimal grading contests",
        coauthors: "",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1145/3580507.3597670'>Proc. of EC 2023</a></i>",
        journal_info: "R&R at <i>Games and Economic Behavior</i>",
        abstract: `We study the design of grading schemes between agents with private abilities. Interpreting grades as signals about ability, and assuming agents derive value from the induced posteriors, we find that more informative grading schemes induce more competitive contests. We show that even though increasing competition by transferring value to the first prize always encourages effort, doing so by transferring value to better ranked intermediate prizes may discourage effort. Consequently, while the effort-maximizing grading scheme always uniquely identifies the best-performing agent, the full structure depends on the underlying distribution of abilities. We identify sufficient conditions under which the fully informative rank-revealing grading scheme is optimal, and also those under which a coarse grading scheme that gives at most three different grades is optimal.`,
        pdfLink: "files/contests_grading.pdf",
    }
]

const publishedPapers = [
    {
    	id: 4,
        title: "Project selection with partially verifiable information",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in   <i><a href='https://doi.org/10.1007/978-3-031-22832-2'>Proc. of WINE 2022</a></i>",
        journal_info: "<i><a href='https://www.sciencedirect.com/journal/mathematical-social-sciences'>Mathematical Social Sciences</a></i>",
        abstract: `We study a principal-agent project selection problem with asymmetric information. The principal must choose exactly one of \\( N \\) projects, each defined by the utility it provides to the principal and to the agent. The agent knows all the utilities, and the principal can commit to a mechanism (without transfers) that maps the agent's report about the utilities to a chosen project. Unlike the typical literature, which assumes the agent can lie arbitrarily, we examine the principal's problem under partial verifiability constraints. We characterize the class of truthful mechanisms under a family of partial verifiability constraints and study the principal's problem for the specific cases of no-overselling and no-underselling. Our results suggest significant benefits for the principal from identifying or inducing such partial verifiability constraints, while also highlighting the simple mechanisms that perform well.`,
        pdfLink: "files/mechdesign_projects.pdf",
    },
    {
    	id: 3,
        title: "Stable allocations in discrete exchange economies",
        coauthors: "(with Federico Echenique and SangMok Lee)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.jet.2024.105921'>Journal of Economic Theory</a></i>",
        abstract: `We study stable allocations in an exchange economy with indivisible goods. The problem is well-known to be challenging, and rich enough to encode fundamentally unstable economies, such as the roommate problem. Our approach stems from generalizing the original study of an exchange economy with unit demand and unit endowments, the housing model. Our first approach uses Scarf's theorem, and proposes sufficient conditions under which a \"convexify then round\" technique ensures that the core is nonempty. The upshot is that a core allocation exists in categorical economies with dichotomous preferences. Our second approach uses a generalization of the TTC: it works under general conditions, and finds a solution that is a version of the stable set. `,
        pdfLink: "files/exchange_stable.pdf",
    },
    {
    	id: 2,
        title: "Optimal tie-breaking rules",
        coauthors: "(with Amit Goyal)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.jmateco.2023.102872'>Journal of Mathematical Economics</a></i>",
        abstract: `We consider two-player contests with the possibility of ties and study the effect of different tie-breaking rules on effort. For ratio-form and difference-form contests that admit pure-strategy Nash equilibrium, we find that the effort of both players is monotone decreasing in the probability that ties are broken in favor of the stronger player. Thus, the effort-maximizing tie-breaking rule commits to breaking ties in favor of the weaker agent. With symmetric agents, we find that the equilibrium is generally symmetric and independent of the tie-breaking rule. We also study the design of random tie-breaking rules that are unbiased ex-ante and identify sufficient conditions under which breaking ties before the contest actually leads to greater expected effort than the more commonly observed practice of breaking ties after the contest.`,
        pdfLink: "files/contests_tiebreak.pdf",
    },
    {
    	id: 1,
        title: "Optimality of the coordinate-wise median mechanism for strategyproof facility location in two dimensions",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1007/978-3-031-15714-1'>Proc. of SAGT 2022</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1007/s00355-022-01435-1'>Social Choice and Welfare</a></i>",
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
