
// nodes array
var nodes = [
    // process
    {id:"design_sprint", label:"Design Sprint", group:"process"},
    {id:"co_creation", label:"Co-Creation", group:"process"},
    {id:"in_depth_interview", label:"In Depth Interview", group:"process"},
    {id:"scrum_sprint", label:"Scrum Sprint", group:"process"},
    {id:"usability_testing", label:"Usability", group:"process"},

    // deliverables artifact
    {id:"med_fidelity", label:"Medium Fidelity Prototype \n (Interactive Mockup)", group:"deliverables", shape:"box"},
    {id:"problem_statement", label:"Problem Statement", group:"deliverables", shape:"box"},
    {id:"customer_journey_design", label:"Customer Journey Design", group:"deliverables", shape:"box"},
    {id:"low_fidelity", label:"Low Fidelity Prototype \n (Paper Prototype, etc)", group:"deliverables", shape:"box"},
    {id:"existing_cust_journey", label:"Existing Customer \n Journey Map", group:"deliverables", shape:"box"},
    {id:"user_persona", label:"User Persona", group:"deliverables", shape:"box"},
    {id:"design_uiux", label:"Design UI/UX", group:"deliverables", shape:"box"},
    {id:"existing_design_val", label:"Existing Design \n Validation", group:"deliverables", shape:"box"},
    {id:"high_fidelity", label:"High Fidelity Prototype \n (Functional Software)", group:"deliverables", shape:"box"},
    {id:"product_backlog", label:"Product Backlog", group:"deliverables", shape:"box"},
    {id:"cust_insight", label:"Customer Insight", group:"deliverables", shape:"box"},
];

// create an array with edges
var edges = [
    // input/output usability
    {from: "med_fidelity", to: "usability_testing", arrows: "to"},
    {from: "existing_design_val", to: "usability_testing", arrows: "to"},
    {from: "high_fidelity", to: "usability_testing", arrows: "to"},
    {from: "usability_testing", to: "existing_design_val", arrows: "to"},

    // input/output design sprint 
    {from: "design_sprint", to: "med_fidelity", arrows: "to"},
    {from: "design_sprint", to: "design_uiux", arrows: "to"},
    {from: "user_persona", to: "design_sprint", arrows: "to"},
    {from: "problem_statement", to: "design_sprint", arrows: "to"},
    {from: "customer_journey_design", to: "design_sprint", arrows: "to"},
    {from: "low_fidelity", to: "design_sprint", arrows: "to"},
    {from: "existing_cust_journey", to: "design_sprint", arrows: "to"},

    // input/output co-creation
    {from: "co_creation", to: "customer_journey_design", arrows: "to"},
    {from: "co_creation", to: "problem_statement", arrows: "to"},
    {from: "co_creation", to: "low_fidelity", arrows: "to"},
    {from: "co_creation", to: "existing_cust_journey", arrows: "to"},
    {from: "co_creation", to: "user_persona", arrows: "to"},
    {from: "co_creation", to: "product_backlog", arrows: "to"},

    {from: "user_persona", to: "co_creation", arrows: "to"},
    {from: "design_uiux", to: "co_creation", arrows: "to"},
    {from: "existing_cust_journey", to: "co_creation", arrows: "to"},
    {from: "cust_insight", to: "co_creation", arrows: "to"},
    {from: "product_backlog", to: "co_creation", arrows: "to"},
    {from: "existing_design_val", to: "co_creation", arrows: "to"},

    // input/output in-depth-interview
    {from: "in_depth_interview", to: "cust_insight", arrows: "to"},
    {from: "problem_statement", to: "in_depth_interview", arrows: "to"},

    // input/output scrum-sprint
    {from: "scrum_sprint", to: "high_fidelity", arrows: "to"},
    {from: "product_backlog", to: "scrum_sprint", arrows: "to"},


];

// options
var options = {
    groups:{
        "deliverables":{
            color:{
                background:'#8EAACD',
                border:"#8EAACD"
            },
            font:{
                size: 16,
                color: '#ffffff'
            },
            shape:"box"
        },
        "process":{
            shape:"circle",
            font:{
                size: 16,
                color: '#000000'
            },
            color:{
                background:'#CDBF95',
                border:'#CDBF95'
            }
        }
    }
};

// create a network
// var container = document.getElementById('desc-tree-net');
var container = document.querySelector('.network');
var data = {
    nodes: nodes,
    edges: edges
};
var network = new vis.Network(container, data, options);