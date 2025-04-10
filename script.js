const workingPapers = [
    {
    	id: 8,
        title: "TTC Domains",
        coauthors: "(with Yuki Tamura)",
        conference_info: "",
        journal_info: "",
        abstract: `We study the classical object reallocation problem under strict preferences, with a focus on characterizing TTC domains -- preference domains on which the Top Trading Cycles (TTC) mechanism is the unique mechanism satisfying individual rationality, Pareto efficiency, and strategyproofness. We introduce a sufficient condition for a domain to be a TTC domain, which we call the top-two condition. This condition requires that, within any subset of objects, if two objects can each be most-preferred, they can also be the top-two most-preferred objects (in both possible orders). A weaker version of this condition, applying only to subsets of size three, is shown to be necessary. These results provide a complete characterization of TTC domains for the case of three objects, unify prior studies on specific domains such as single-peaked and single-dipped preferences, and classify several previously unexplored domains as TTC domains or not.`,
        pdfLink: "files/exchange_ttc.pdf",
    },
    {
    	id: 7,
        title: "The effect of competition in contests: A unifying approach",
        coauthors: "(with Andrzej Baranski)",
        conference_info: "",
        journal_info: "",
        abstract: `We study how increasing competition, by making prizes more unequal, affects effort in contests. In a finite type-space environment, we characterize the equilibrium, analyze the effect of competition under linear costs, and identify conditions under which these effects persist under general costs. Our findings reveal that competition may encourage or deter effort, depending on the relative likelihood of efficient versus inefficient types. We derive implications for the classical budget allocation problem and establish that the most competitive winner-takes-all contest is robustly optimal under linear and concave costs, thereby resolving an open question. Methodologically, our analysis of the finite type-space domain---which includes complete information as a special case and can approximate any continuum type-space---provides a unifying approach that sheds light on the contrasting results in these extensively studied environments.`,
        pdfLink: "files/contests_finitetype.pdf",
    },
    {
    	id: 6,
        title: "Multi-agent contract design with a budget",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1145/3670865.3673598'>Proc. of EC 2024</a></i>",
        journal_info: "",
        abstract: `We study a multi-agent contract design problem with moral hazard. In our model, each agent exerts costly effort towards an individual task at which it may either succeed or fail, and the principal, who wishes to encourage effort, has an exclusive-use budget that it can use to reward the agents. Our main contribution is to introduce a novel class of contracts, which we call Luce contracts, and show that there is always a Luce contract that is optimal. A (generic) Luce contract assigns weights to the agents and distributes the entire budget among the successful agents in proportion to their weights. Furthermore, we characterize effort profiles that can be implemented by Luce contracts and show that Luce contracts offer a way to mitigate the uncertainty in total payments compared to alternative contracts—such as piece-rate or bonus-pool contracts—suggesting their desirability even in environments without budget constraints.`,
        pdfLink: "files/contract_multiagent.pdf",
    }
]

const publishedPapers = [
    {
    	id: 5,
        title: "Optimal grading contests",
        coauthors: "",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1145/3580507.3597670'>Proc. of EC 2023</a></i>",
        journal_info: "Accepted at <i>Games and Economic Behavior</i>",
        abstract: `We study the design of effort-maximizing grading schemes between agents with private abilities. Assuming agents derive value from the information their grade reveals about their ability, we find that more informative grading schemes induce more competitive contests. In the contest framework, we investigate the effect of manipulating individual prizes and increasing competition on expected effort, identifying conditions on ability distributions and cost functions under which these transformations may encourage or discourage effort. Our results suggest that more informative grading schemes encourage effort when agents of moderate ability are highly likely, and discourage effort when such agents are unlikely.`,
        pdfLink: "files/contests_grading.pdf",
    },
    {
    	id: 4,
        title: "Project selection with partially verifiable information",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in   <i><a href='https://doi.org/10.1007/978-3-031-22832-2'>Proc. of WINE 2022</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1016/j.mathsocsci.2024.10.003'>Mathematical Social Sciences</a></i>, Volume 132, 2024.",
        abstract: `We study a principal-agent project selection problem with asymmetric information. The principal must choose exactly one of \\( N \\) projects, each defined by the utility it provides to the principal and to the agent. The agent knows all the utilities, and the principal can commit to a mechanism (without transfers) that maps the agent's report about the utilities to a chosen project. Unlike the typical literature, which assumes the agent can lie arbitrarily, we examine the principal's problem under partial verifiability constraints. We characterize the class of truthful mechanisms under a family of partial verifiability constraints and study the principal's problem for the specific cases of no-overselling and no-underselling. Our results suggest significant benefits for the principal from identifying or inducing such partial verifiability constraints, while also highlighting the simple mechanisms that perform well.`,
        pdfLink: "files/mechdesign_projects.pdf",
    },
    {
    	id: 3,
        title: "Stable allocations in discrete exchange economies",
        coauthors: "(with Federico Echenique and SangMok Lee)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.jet.2024.105921'>Journal of Economic Theory</a></i>, Volume 222, 2024.",
        abstract: `We study stable allocations in an exchange economy with indivisible goods. The problem is well-known to be challenging, and rich enough to encode fundamentally unstable economies, such as the roommate problem. Our approach stems from generalizing the original study of an exchange economy with unit demand and unit endowments, the housing model. Our first approach uses Scarf's theorem, and proposes sufficient conditions under which a \"convexify then round\" technique ensures that the core is nonempty. The upshot is that a core allocation exists in categorical economies with dichotomous preferences. Our second approach uses a generalization of the TTC: it works under general conditions, and finds a solution that is a version of the stable set. `,
        pdfLink: "files/exchange_stable.pdf",
    },
    {
    	id: 2,
        title: "Optimal tie-breaking rules",
        coauthors: "(with Amit Goyal)",
        conference_info: "",
        journal_info: "<i><a href='https://doi.org/10.1016/j.jmateco.2023.102872'>Journal of Mathematical Economics</a></i>, Volume 108, 2023.",
        abstract: `We consider two-player contests with the possibility of ties and study the effect of different tie-breaking rules on effort. For ratio-form and difference-form contests that admit pure-strategy Nash equilibrium, we find that the effort of both players is monotone decreasing in the probability that ties are broken in favor of the stronger player. Thus, the effort-maximizing tie-breaking rule commits to breaking ties in favor of the weaker agent. With symmetric agents, we find that the equilibrium is generally symmetric and independent of the tie-breaking rule. We also study the design of random tie-breaking rules that are unbiased ex-ante and identify sufficient conditions under which breaking ties before the contest actually leads to greater expected effort than the more commonly observed practice of breaking ties after the contest.`,
        pdfLink: "files/contests_tiebreak.pdf",
    },
    {
    	id: 1,
        title: "Optimality of the coordinate-wise median mechanism for strategyproof facility location in two dimensions",
        coauthors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in  <i><a href='https://doi.org/10.1007/978-3-031-15714-1'>Proc. of SAGT 2022</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1007/s00355-022-01435-1'>Social Choice and Welfare</a></i>, Volume 61, 2023.",
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

// function generateResearchHTML(item) {
// 	return `
//         <li>
//           	<p> <b>${item.title}</b><br>
//           	${item.coauthors ? `${item.coauthors}<br>` : ''}
//       		${item.conference_info ? `${item.conference_info}<br>` : ''}
//       		${item.journal_info ? `${item.journal_info}<br>` : ''}
//       		<button id="button-${item.id}" onclick="toggleAbstract(${item.id})">Abstract +</button> <button><a href="${item.pdfLink}">PDF</a></button>
//       		</p>
//       		
//           	<p class="abstract" id="abstract-${item.id}">${item.abstract}</p>
//         </li>
//         	`;
// }

function generateResearchHTML(item) {
	return `
		<li>
			<strong>${item.title}</strong><br>
			${item.coauthors ? `<em>${item.coauthors}</em><br>` : ''}
			${item.conference_info ? `${item.conference_info}<br>` : ''}
			${item.journal_info ? `${item.journal_info}<br>` : ''}
			
			<div style="margin-top: 4px;">
				<button id="button-${item.id}" onclick="toggleAbstract(${item.id})">Abstract +</button>
				<a href="${item.pdfLink}" target="_blank">[PDF]</a>
			</div>

			<p id="abstract-${item.id}" style="display: none; margin-top: 8px;">${item.abstract}</p>
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
