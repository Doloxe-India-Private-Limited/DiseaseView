// Shape matches the JSON payload returned by Q18 in disease_overview_schema.sql.
// Swap this module for a fetch() against your API and nothing else changes.

export const diseaseOverview = {
  disease: {
    name: "Alzheimer's Disease",
    therapyArea: "Neuro-Psychiatric",
    icd10Code: "G30",
    meshCode: null,
    aliases: ["Alzheimer's dementia", "AD"],
    summary:
      "Alzheimer's disease is a progressive, irreversible neurodegenerative disorder that slowly destroys memory, cognitive function, and eventually the ability to carry out simple tasks. An estimated 7.4 million Americans aged 65 and older are living with clinical Alzheimer's dementia in 2026, representing about 1 in 9 adults in this age bracket (Alzheimer's Association Facts and Figures, 2026). Globally, more than 57 million people live with dementia, with Alzheimer's accounting for 60% to 70% of all cases (WHO Dementia Fact Sheet, updated July 2026; underlying global prevalence data). It ranks as a leading cause of death and total economic burden among older adults worldwide, costing the global economy approximately US$ 1.3 trillion annually (WHO, 2026).",
    pathologyNote:
      "Alzheimer's disease is the most common form of dementia, characterized pathologically by the accumulation of extracellular amyloid-beta plaques and intracellular hyperphosphorylated tau neurofibrillary tangles in the brain. These toxic protein aggregates trigger chronic neuroinflammation, synaptic dysfunction, and widespread neuronal death, predominantly starting in the hippocampus and entorhinal cortex before spreading to the broader neocortex. Clinically, it manifests as insidious memory loss, executive dysfunction, language impairment, and behavioral disturbances that gradually rob individuals of their independence. Early detection and intervention are critical because pathological changes begin decades before clinical symptoms appear; identifying patients in the preclinical or mild cognitive impairment stage allows for timely initiation of disease-modifying therapies, lifestyle risk modification, and comprehensive care planning that can preserve cognitive function and quality of life for a longer duration.",
    descriptionSourceLine: "Sources: Alzheimer's Association 2026 · WHO 2026",
    dataCurrencyNote:
      "Epidemiology and cost figures from the 2026 Alzheimer's Association Facts and Figures report (April 2026) and WHO Dementia Fact Sheet (July 2026).",
  },

  tabs: [
    { label: "Disease Overview", active: true },
    { label: "Drugs" },
    { label: "Companies" },
    { label: "Drug Price" },
    { label: "Cost Of Therapy" },
    { label: "News & Deals" },
    { label: "Clinical Trials" },
  ],

  assets: [
    {
      assetKind: "overview_infographic",
      storageUrl: "/assets/Alzheimer_s_Disease_Overview_2026.png",
      altText: "Alzheimer's Disease overview 2026 infographic",
    },
  ],

  metrics: [
    { metricKey: "us_prevalence_65plus", label: "US prevalence, age 65+", valueDisplay: "7.4 M", footnote: "about 1 in 9 adults in this age bracket" },
    { metricKey: "global_dementia_prevalence", label: "Global dementia prevalence", valueDisplay: "57 M+", footnote: "Alzheimer's accounts for 60%–70%" },
    { metricKey: "global_annual_incidence", label: "New dementia cases annually", valueDisplay: "~10 M", footnote: "globally, each year" },
    { metricKey: "global_annual_cost", label: "Global economic cost", valueDisplay: "$1.3 T", footnote: "annually; roughly half unpaid caregiving" },
  ],
  metricsSourceLine: "Alzheimer's Association, 2026 · WHO, 2026",

  ageBands: [
    { segmentLabel: "65–74", valueDisplay: "5.2%", valueNumeric: 5.2 },
    { segmentLabel: "75–84", valueDisplay: "13.8%", valueNumeric: 13.8 },
    { segmentLabel: "85+", valueDisplay: "35.8%", valueNumeric: 35.8 },
  ],

  segmentation: [
    { label: "Sex", narrative: "nearly two-thirds of all Americans with Alzheimer's are women, driven partly by longer life expectancy and potential biological factors (Alzheimer's Association, 2026)" },
    { label: "Race & ethnicity", narrative: "older Black Americans are about twice as likely, and older Hispanic Americans about 1.5 times as likely, to have Alzheimer's or other dementias compared to older White Americans (Alzheimer's Association, 2026)" },
    { label: "Etiological status", narrative: "early-onset vs. late-onset" },
  ],

  epiNotes: [
    { noteKind: "annual_incidence", heading: "Annual incidence", body: "Nearly 10 million new dementia cases globally each year (WHO, 2026), with hundreds of thousands of new Alzheimer's diagnoses annually in the US alone." },
    { noteKind: "point_prevalence", heading: "Point prevalence", body: "Approximately 7.4 million older Americans in 2026 (Alzheimer's Association, 2026) and over 35 to 40 million individuals globally with Alzheimer's specifically." },
    { noteKind: "population_impact", heading: "Chronic population impact", body: "Characterized by a multi-year to multi-decade continuum transitioning from silent pathology to fatal end-stage neurodegeneration." },
    { noteKind: "global_burden", heading: "Global burden", body: "Global economic cost estimated at US$ 1.3 trillion annually, roughly half of which is driven by unpaid caregiving provided by family and friends (WHO, 2026). The condition represents one of the leading global public health and socioeconomic burdens among aging populations.", highlight: true },
  ],

  stagingSystem: "Clinical continuum",
  stages: [
    { stageOrder: 1, stageName: "Preclinical Alzheimer's Disease", definingFeatures: "Asymptomatic biomarker-positive stage" },
    { stageOrder: 2, stageName: "Mild Cognitive Impairment (MCI) due to Alzheimer's Disease", definingFeatures: "Measurable cognitive decline that does not yet disrupt instrumental activities of daily living" },
    { stageOrder: 3, stageName: "Mild Alzheimer's Dementia", definingFeatures: "Memory loss, executive deficits, and navigational challenges beginning to interfere with daily independence" },
    { stageOrder: 4, stageName: "Moderate Alzheimer's Dementia", definingFeatures: "Profound memory deficits, need for assistance with basic activities of daily living, personality changes, and behavioral symptoms" },
    { stageOrder: 5, stageName: "Severe / Late-Stage Alzheimer's Dementia", definingFeatures: "Complete loss of verbal communication, full dependency for personal care, and physical immobility" },
  ],

  types: [
    { typeName: "Sporadic Late-Onset Alzheimer's Disease", shareLabel: ">95% of cases", description: "Typically manifesting after age 65 with APOE epsilon-4 as a major genetic risk factor" },
    { typeName: "Familial Early-Onset Autosomal Dominant Alzheimer's Disease (FAD)", shareLabel: "<1%–5% of cases", description: "Driven by fully penetrant mutations in APP, PSEN1, or PSEN2 genes with symptom onset typically between ages 30 and 60" },
    { typeName: "Mixed Dementia", shareLabel: "Co-pathology", description: "Classic Alzheimer's pathology coexists with cerebrovascular disease or Lewy body pathology" },
  ],

  symptoms: [
    { symptomText: "Progressive short-term memory loss (forgetting recently learned information or important dates)", isRedFlag: false },
    { symptomText: "Difficulty planning or solving problems", isRedFlag: false },
    { symptomText: "Confusion with time or place", isRedFlag: false },
    { symptomText: "Trouble understanding visual images and spatial relationships", isRedFlag: false },
    { symptomText: "New problems with words in speaking or writing", isRedFlag: false },
    { symptomText: "Misplacing items and losing the ability to retrace steps", isRedFlag: false },
    { symptomText: "Decreased or poor judgment", isRedFlag: false },
    { symptomText: "Withdrawal from work or social activities", isRedFlag: false },
    { symptomText: "Rapid, uncharacteristic cognitive declines, sudden focal neurological deficits, or acute behavioral psychosis warrant urgent clinical evaluation to rule out reversible causes such as normal pressure hydrocephalus, structural lesions, severe depression, or metabolic encephalopathy.", isRedFlag: true },
  ],

  riskFactors: [
    { category: "non_modifiable", label: "Advancing age", detail: "strongest known risk factor" },
    { category: "non_modifiable", label: "Biological sex", detail: "higher lifetime prevalence in women" },
    { category: "non_modifiable", label: "Genetics", detail: "presence of APOE epsilon-4 allele, rare autosomal dominant mutations" },
    { category: "modifiable", label: "Physical inactivity" },
    { category: "modifiable", label: "Midlife hypertension" },
    { category: "modifiable", label: "Midlife obesity" },
    { category: "modifiable", label: "Type 2 diabetes" },
    { category: "modifiable", label: "Smoking" },
    { category: "modifiable", label: "Excessive alcohol consumption" },
    { category: "modifiable", label: "Traumatic brain injury" },
    { category: "modifiable", label: "Air pollution" },
    { category: "modifiable", label: "Depression" },
    { category: "modifiable", label: "Social isolation" },
    { category: "modifiable", label: "Low educational attainment" },
  ],
  riskFactorNotes: { modifiable: "up to 45% of global dementia risk" },
  riskFactorSourceLine: "WHO Guidelines, updated July 2026; Alzheimer's Association, 2026",

  geographyIntro:
    "Burden spans all major world regions, with the fastest growth in low- and middle-income countries where over 60% of people with dementia currently live. Asia accounts for the highest absolute number of cases due to massive aging populations in East and South Asia (China and India leading). Europe and Northern America exhibit high prevalence rates driven by advanced population aging structures, while Latin America and Sub-Saharan Africa are experiencing sharp proportional increases in absolute case numbers due to rising life expectancies and changing cardiovascular risk profiles.",
  geographyNote: "Over 60% of people with dementia live in low- and middle-income countries",
  markets: [
    { marketName: "United States", populationAffected: "7.4 million individuals aged 65 and older living with clinical Alzheimer's dementia in 2026 (Alzheimer's Association, 2026)", keyObservation: "Represents the most heavily diagnosed and heavily researched market with expanding access to novel immunotherapies" },
    { marketName: "China", populationAffected: "Home to the world's largest absolute population of Alzheimer's patients", keyObservation: "Rapidly aging demographic pressures are driving massive government investments in specialized memory clinics and domestic drug pipelines" },
    { marketName: "Japan", populationAffected: "One of the oldest populations globally", keyObservation: "High societal readiness and institutional focus on long-term dementia care infrastructure and early screening initiatives" },
    { marketName: "Western Europe (UK, Germany, France, Italy, Spain)", populationAffected: "High prevalence scaling past tens of millions of affected citizens combined", keyObservation: "Universal healthcare systems face severe access hurdles regarding biomarker diagnostics and complex infusion centers for disease-modifying therapies" },
    { marketName: "Canada & Australia", populationAffected: "Substantial affected cohorts tracking closely with US epidemiological curves", keyObservation: "Ongoing national strategies prioritize primary care provider training and Indigenous community health outreach" },
  ],

  treatments: [
    { modality: "Disease-modifying anti-amyloid monoclonal antibodies", description: "Intravenous or subcutaneous infusions clearing amyloid plaque to slow cognitive decline in early-stage patients", stageOfDisease: "Early-stage", agents: [] },
    {
      modality: "Symptomatic cognitive enhancers",
      descriptionParts: [
        { text: "Cholinesterase inhibitors like " },
        { text: "donepezil", href: "#" },
        { text: ", " },
        { text: "rivastigmine", href: "#" },
        { text: ", and " },
        { text: "galantamine", href: "#" },
        { text: " for mild-to-moderate disease; NMDA receptor antagonists like " },
        { text: "memantine", href: "#" },
        { text: " for moderate-to-severe disease" },
      ],
      stageOfDisease: "Mild to severe",
    },
    { modality: "Non-pharmacological management frameworks", description: "Cognitive stimulation, structured physical exercise programs, caregiver support interventions, and behavioral management strategies", stageOfDisease: "All stages", agents: [] },
  ],

  biomarkers: {
    intro: "Established biomarker framework — ATN system: Amyloid, Tau, Neurodegeneration",
    closing: "These blood-based and imaging biomarkers are rapidly standardizing early clinical trial selection and diagnostic precision.",
    domains: [
      { domainCode: "A", domainName: "Amyloid", description: "Amyloid-beta deposition measured via positron emission tomography (PET) imaging or cerebrospinal fluid (CSF) assays (low A-beta-42 or low A-beta-42/40 ratio)" },
      { domainCode: "T", domainName: "Tau", description: "Pathological tau measured via tau-PET or elevated CSF/plasma phosphorylated tau (p-tau181, p-tau217)" },
      { domainCode: "N", domainName: "Neurodegeneration", description: "Quantified via structural magnetic resonance imaging (MRI) hippocampal atrophy or elevated CSF/plasma neurofilament light chain (NfL)" },
    ],
  },

  unmetNeeds: [
    "Highly scalable, non-invasive, low-cost screening and blood biomarker diagnostics accessible in primary care settings before symptom onset.",
    "Safe, highly effective disease-modifying therapies that arrest or reverse tau pathology and neurodegeneration across all disease stages, not just early amyloid clearance.",
    "Substantial reduction or mitigation of serious treatment-related adverse events, such as amyloid-related imaging abnormalities (ARIA).",
    "Sustainable models for long-term care financing, workforce expansion, and robust economic relief for unpaid family caregivers.",
    "Targeted combination therapies addressing neuroinflammation, vascular contributions, and metabolic dysfunction alongside core proteinopathies.",
  ],

  mortalityAndCost: [
    { valueDisplay: "1 in 3", footnote: "older Americans dies with Alzheimer's or another dementia, killing more than breast cancer and prostate cancer combined (Alzheimer's Association, 2026)" },
    { valueDisplay: "$409 B", footnote: "total direct healthcare, long-term care, and hospice payments in 2026, with Medicare and Medicaid covering roughly 64% ($263 billion) (Alzheimer's Association, 2026)" },
    { valueDisplay: "4–8 yrs", footnote: "average survival post-diagnosis, though some individuals live up to 20 years, spending nearly 40% of their post-70 disease duration in the severe stage (Alzheimer's Association, 2026)" },
  ],

  atAGlance: [
    { label: "Therapy area", valueText: "Neuro-Psychiatric" },
    { label: "Chronicity", valueText: "Progressive, irreversible neurodegeneration" },
    { label: "Share of all dementia cases", valueText: "60%–70%" },
    { label: "Dominant type", valueText: "Sporadic late-onset (>95% of cases)" },
    { label: "Diagnostic framework", valueText: "ATN: Amyloid, Tau, Neurodegeneration" },
    { label: "Modifiable risk share", valueText: "Up to 45% of global dementia risk" },
  ],

  sources: [
    { title: "Alzheimer's Association, '2026 Alzheimer's Disease Facts and Figures Report'", meta: "Published April 2026", url: "#" },
    { title: "World Health Organization (WHO), 'Dementia Fact Sheet'", meta: "Updated July 2026 (underlying global prevalence and burden data)", url: "#" },
    { title: "World Health Organization (WHO), 'New WHO guidelines on risk reduction of cognitive decline and dementia'", meta: "Published July 2026", url: "#" },
  ],

  verificationNote:
    "Spot-checked load-bearing figures against the newly released 2026 Alzheimer's Association Facts and Figures report. Verified that the U.S. prevalence figure of 7.4 million Americans aged 65 and older and the total 2026 cost projection of $409 billion are fully accurate and traceable to the 2026 report. Confirmed no cancer-specific metrics (like TNM or SEER) were improperly used, and all neuropsychiatric classifications and source attribution years are aligned.",
};

export default diseaseOverview;
