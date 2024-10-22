// Research items data for Working Papers
const workingPapers = [
    {
        title: "Contest design with a finite type-space: A unifying approach",
        authors: "(with Andrzej Baranski)",
        pdfLink: "files/contests_finitetype.pdf",
        abstract: `We study the classical contest design problem of allocating a budget across prizes to maximize effort. While the previous literature has predominantly focused on continuum type-space or complete information domains, we analyse the finite type-space domain, thus providing a unifying approach that sheds light on the contrasting structure of optimal contests in these extreme environments. Our results include a characterization of the equilibrium, which involves agents mixing over contiguous intervals and converges to the appropriate continuum type-space equilibrium, and an investigation of how increasing competition influences effort, leading to optimality of winner-takes-all contest under linear and concave costs.`,
        id: 7
    },
    {
        title: "Optimality of weighted contracts for multi-agent contract design with a budget",
        authors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in <i><a href='https://ec24.sigecom.org/program/accepted-papers/'>Proc. of EC 2024</a></i>",
        pdfLink: "files/contract_multiagent.pdf",
        abstract: `We study a contract design problem between a principal and multiple agents. Each agent participates in an independent task, in which it may exert costly effort towards improving its probability of success, and the principal has a fixed budget which it can use to provide outcome-dependent rewards to the agents. Assuming the principal cares only about maximizing the agents' probabilities of success, and not how much of the budget it expends, we characterize the maximal set of success probability profiles that can be implemented in Nash equilibrium as equilibria of successful-get-everything contracts. An immediate consequence of this result is that piece-rate contracts and bonus-pool contracts, two types of contracts which are well-studied and motivated in the literature on multi-agent contract design, are never optimal in this setting. We then identify a natural subclass called priority-based weighted contracts which we show is actually sufficient to implement the Pareto frontier, thus providing a significant reduction in the dimensionality of the principal's optimal contract design problem. Finally, we solve the design problem for the special case with two agents and quadratic costs where our results suggest that the structure of the optimal contract depends primarily on the bias in the principal's objective and is, to some extent, robust to the heterogeneity in the agents' cost functions.`,
        id: 6
    },
    {
        title: "Optimal grading contests",
        authors: "",
        conference_info: "Ext. abs. in <i><a href='https://doi.org/10.1145/3580507.3597670'>Proc. of EC 2023</a></i><br>R&R at <i>Games and Economic Behavior</i>",
        pdfLink: "files/contests_grading.pdf",
        abstract: `We study the design of grading contests between agents with private information about their abilities under the assumption that the value of a grade is determined by the information it reveals about the agent's productivity. Towards the goal of identifying the effort-maximizing grading contest, we study the effect of increasing prizes and increasing competition on effort and find that the effects depend qualitatively on the distribution of abilities in the population. Consequently, while the optimal grading contest always uniquely identifies the best performing agent, it may want to pool or separate the remaining agents depending upon the distribution. We identify sufficient conditions under which a rank-revealing grading contest, a leaderboard-with-cutoff type grading contest, and a coarse grading contest with at most three grades are optimal. In the process, we also identify distributions under which there is a monotonic relationship between the informativeness of a grading scheme and the effort induced by it.`,
        id: 5
    }
];

// Research items data for Journal Articles
const journalArticles = [
    {
        title: "Project selection with partially verifiable information",
        authors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in <i><a href='https://doi.org/10.1007/978-3-031-22832-2'>Proc. of WINE 2022</a></i>",
        pdfLink: "files/mechdesign_projects.pdf",
        journal_info: "Accepted at <i>Mathematical Social Sciences</i>",
        abstract: `We study a principal-agent project selection problem with asymmetric information. The principal must choose exactly one of $N$ projects, each defined by the utility it provides to the principal and to the agent. The agent knows all the utilities, and the principal can commit to a mechanism (without transfers) that maps the agent's report about the utilities to a chosen project. Unlike the typical literature, which assumes the agent can lie arbitrarily, we examine the principal's problem under partial verifiability constraints. We characterize the class of truthful mechanisms under a family of partial verifiability constraints and study the principal's problem for the specific cases of no-overselling and no-underselling. Our results suggest significant benefits for the principal from identifying or inducing such partial verifiability constraints, while also highlighting the simple mechanisms that perform well.`,
        id: 4
    }
    {
        title: "Stable allocations in discrete exchange economies",
        authors: "(with Federico Echenique and SangMok Lee)",
        journal_link: "https://doi.org/10.1016/j.jet.2024.105921",
        pdfLink: "files/exchange_stable.pdf",
        journal_info: "<i>Journal of Economic Theory</i>",
        abstract: `We study stable allocations in an exchange economy with indivisible goods. The problem is well-known to be challenging, 
                   and rich enough to encode fundamentally unstable economies, such as the roommate problem. Our approach stems from 
                   generalizing the original study of an exchange economy with unit demand and unit endowments, the housing model.`,
        id: 3
    },
    {
        title: "Optimal tie-breaking rules",
        authors: "(with Amit Goyal)",
        journal_link: "https://doi.org/10.1016/j.jmateco.2023.102872",
        pdfLink: "files/contests_tiebreak.pdf",
        journal_info: "Published in <i>Journal of Mathematical Economics</i>",
        abstract: `We consider two-player contests with the possibility of ties and study the effect of different tie-breaking rules 
                   on effort. We find that the effort-maximizing tie-breaking rule commits to breaking ties in favor of the weaker agent. 
                   With symmetric agents, we find that the equilibrium is generally symmetric and independent of the tie-breaking rule.`,
        id: 2
    },
    {
        title: "Optimality of the coordinate-wise median mechanism for strategyproof facility location in two dimensions",
        authors: "(with Wade Hann-Caruthers)",
        conference_info: "Ext. abs. in <i><a href='https://doi.org/10.1007/978-3-031-15714-1'>Proc. of SAGT 2022</a></i>",
        journal_info: "<i><a href='https://doi.org/10.1007/s00355-022-01435-1'>Published in Social Choice and Welfare</a></i>",
        pdfLink: "files/mechdesign_facility.pdf",
        abstract: `We consider the facility location problem in two dimensions, where agents have Euclidean preferences for a facility to be 
                   located in ℝ^2. We show that the coordinate-wise median mechanism (CM) has the lowest worst-case approximation ratio in 
                   the class of deterministic, anonymous, and strategyproof mechanisms. For the p-norm social cost objective, we 
                   conjecture that the approximation ratio of CM matches the lower bound for any p ≥ 2.`,
        id: 1
    }
];

// Function to generate HTML for each research item
function generateResearchHTML(item) {
    return `
        <div class="research-item">
            <h4>${item.title}</h4>
            <p>${item.authors}</p>
            ${item.conference_info ? `<p>${item.conference_info}</p>` : ''}
            ${item.journal_info ? `<p>${item.journal_info}</p>` : ''}
            ${item.journal_link ? `<p><i><a href="${item.journal_link}" target="_blank">Journal Link</a></i></p>` : ''}
            <div class="buttons">
                <button id="button-${item.id}" onclick="toggleAbstract(${item.id})">Abstract +</button>
                <a href="${item.pdfLink}" class="pdf-button">PDF</a>
            </div>
            <p class="abstract" id="abstract-${item.id}" style="display: none;">${item.abstract}</p>
        </div>
    `;
}

// Inject working papers into the page
const workingPapersContainer = document.getElementById("working-papers-container");
workingPapers.forEach(item => {
    workingPapersContainer.innerHTML += generateResearchHTML(item);
});

// Inject journal articles into the page
const journalArticlesContainer = document.getElementById("journal-articles-container");
journalArticles.forEach(item => {
    journalArticlesContainer.innerHTML += generateResearchHTML(item);
});

// Toggle Abstract function
function toggleAbstract(id) {
    const abstract = document.getElementById(`abstract-${id}`);
    const button = document.getElementById(`button-${id}`);
    if (abstract.style.display === "none" || abstract.style.display === "") {
        abstract.style.display = "block";
        button.textContent = "Abstract -";
    } else {
        abstract.style.display = "none";
        button.textContent = "Abstract +";
    }
}
