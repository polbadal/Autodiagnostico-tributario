const axes = [
  {
    id: "taxpayer",
    number: "01",
    title: "Relación con el Contribuyente",
    subtitle: "Servicios omnicanal, proactivos y personalizados con GenAI, NLP y atención automática 24/7.",
    color: "#22d3ee",
    levels: [
      ["Administration – Centric", "La organización define los servicios desde la perspectiva del trámite y las necesidades propias de la entidad, sin tener en cuenta la experiencia del usuario."],
      ["Citizen – Aware", "La organización prioriza la eficiencia de los servicios y la calidad de la experiencia usuaria se recoge en las cartas de servicio públicas de la entidad."],
      ["Citizen – Engaged", "La organización involucra de manera puntual a sus usuarios en la definición y diseño de los servicios y busca mejorar la satisfacción ciudadana."],
      ["Citizen – Centric", "La organización involucra a las personas usuarias en la definición y diseño de los servicios y toma la iniciativa para mejorar la calidad de la experiencia usuaria."],
      ["Citizen – Driven", "La organización aplica un enfoque centrado en las personas y desarrolla modelos de personalización y proactividad en todos los servicios que presta."],
    ],
    capabilities: ["Omnicanal", "IA Generativa", "NLP", "Atención 24/7", "Pre-relleno", "Servicios proactivos"],
    questions: [
      {
        id: "taxpayer_1",
        text: "¿Qué nivel de digitalización tiene la relación con el contribuyente?",
        options: [
          "Existe una sede y una web informativa pero el canal presencial es el más usado (por sujetos no obligados).",
          "Más del 75% de los procedimientos están disponibles en la sede u oficina virtual.",
          "Existe un área personal para tramitar online y hacer un seguimiento de los expedientes y notificaciones.",
          "El 100% de los procedimientos están digitalizados y parte de su gestión está asistida por tecnologías avanzadas (NLP, IA o similar).",
          "Existe tramitación agéntica con funcionalidades de personalización avanzada.",
        ],
      },
      {
        id: "taxpayer_2",
        text: "¿La administración anticipa necesidades del contribuyente?",
        options: [
          "No hay proactividad.",
          "Se realizan comunicaciones a segmentos definidos de contribuyentes y avisos personalizados básicos (ej. fechas de expiración).",
          "Se detectan errores o riesgos en los formularios antes de finalizar los trámites.",
          "Se informa al contribuyente de sus obligaciones, se sugieren servicios y se explican próximos pasos de forma inteligente.",
          "Existen simuladores de escenarios de obligaciones y pago, trámites precompletados, informes y estadísticas personalizadas al contexto de cada contribuyente.",
        ],
      },
      {
        id: "taxpayer_3",
        text: "¿Qué capacidad de autogestión se ofrece al contribuyente?",
        options: [
          "Existen formularios en pdf y en html que puede completar el contribuyente.",
          "Algunos trámites cuentan con formularios adaptados para facilitar su autogestión.",
          "Existe un modelo de tramitación online guiada básica y con ayudas contextuales para algunos procedimientos.",
          "Existen modelos basados en IA que permiten tramitar en modo conversacional por voz o texto.",
          "Declaraciones o trámites casi automáticos, confirmables por el contribuyente.",
        ],
      },
      {
        id: "taxpayer_4",
        text: "¿Qué nivel de atención se ofrece?",
        options: [
          "Bajo demanda en horario definido, en oficinas y teléfono.",
          "Web informativa con sección de preguntas frecuentes.",
          "Canales digitales básicos (webchat en horario definido) y base de conocimiento indexada.",
          "Agente virtual con capacidades de IA generativa y lenguaje natural para consultas. Modelo omnicanal.",
          "Atención orquestada por red de agentes que resuelven o enrutan en función de la necesidad detectada.",
        ],
      },
      {
        id: "taxpayer_5",
        text: "¿Los servicios son accesibles, comprensibles y centrados en las personas?",
        options: [
          "Cumplimiento mínimo de accesibilidad, la información publicada es técnica.",
          "Existen guías de servicios digitales y sistemas de diseño que se aplican en distintos canales.",
          "Los servicios web ofrecen niveles altos de accesibilidad y se aplica comunicación clara en los contenidos.",
          "Los servicios y trámites están adaptados a diferentes grupos de usuarios y disponibles en todos los canales.",
          "Los servicios incorporan a las personas usuarias en todo el ciclo de diseño e implementación, y se usan tecnologías avanzadas para evaluar la calidad y el impacto de los servicios.",
        ],
      },
    ],
    useCases: [
      "Asistente virtual tributario (GenAI)",
      "Declaración pre-rellenada y validación automática",
      "Detección proactiva de errores y riesgos",
      "Tramitación documental con Computer Vision",
      "Asistente IA para el agente de atención",
      "Notificaciones omnicanal accesibles",
      "Apps conversacionales",
    ],
  },
  {
    id: "data",
    number: "02",
    title: "Gobernanza del Dato y la IA",
    subtitle: "Data Intelligence, IA Responsable y colaboración público-privada para una administración basada en datos.",
    color: "#14b8a6",
    levels: [
      ["Data – Incipient", "Decisiones basadas en la intuición, problemas de calidad de datos y datos en silos."],
      ["Data – Opportunistic", "Decisiones basadas en hechos históricos, falta de un modelo de gobierno de datos y analítica avanzada en estado inicial."],
      ["Data – Tactical", "Toma de decisiones basada en información, enfoque en la calidad del dato y uso de analítica avanzada para desafíos específicos."],
      ["Data – Managed", "Estrategia de datos alineada con objetivos corporativos, mejora del gobierno del dato y analítica avanzada aplicada en múltiples casos de uso."],
      ["Data – Driven", "Gobierno del dato implantado, analítica avanzada aplicada de forma extensiva, con enfoque en la seguridad y ética del dato."],
    ],
    capabilities: ["Data Intelligence", "IA gobernada", "Seguridad jurídica", "Soberanía tecnológica", "Data Lake / MDM", "XAI"],
    questions: [
      {
        id: "data_1",
        text: "¿Cuál es el estado de calidad, integración y arquitectura del dato tributario?",
        options: [
          "Datos en silos y baja calidad.",
          "Integración parcial y reporting básico.",
          "Data Lake o MDM inicial, BI, calidad controlada e interoperabilidad básica.",
          "Datos integrados, trazables, compartidos entre áreas y con calidad monitorizada.",
          "Dato gobernado, actualizado, interoperable, en tiempo real y preparado para IA.",
        ],
      },
      {
        id: "data_2",
        text: "¿La IA está alineada con la estrategia y el portfolio de casos de uso?",
        options: [
          "No existe portfolio ni priorización de casos de uso de IA.",
          "Hay iniciativas aisladas sin hoja de ruta común.",
          "Existe una hoja de ruta básica con responsables y objetivos iniciales.",
          "El portfolio de IA se prioriza con KPIs de impacto y seguimiento ejecutivo.",
          "La IA está alineada con la misión, objetivos, portfolio unificado y medición de valor.",
        ],
      },
      {
        id: "data_3",
        text: "¿Qué modelo organizativo de gobierno de la IA existe?",
        options: [
          "No existe gobierno de IA.",
          "Existen criterios iniciales o uso experimental sin accountability claro.",
          "Hay políticas básicas, responsables definidos y comité de supervisión inicial.",
          "Existe Oficina de IA centralizada o federada con roles, comité ético y adopción interna.",
          "Oficina de IA, accountability, cultura de datos, embajadores y gestión del cambio plenamente operativos.",
        ],
      },
      {
        id: "data_4",
        text: "¿Qué nivel de operación, interoperabilidad y ciclo de vida de IA existe?",
        options: [
          "Sistemas aislados y modelos no industrializados.",
          "Intercambios manuales o parciales y pilotos sin ciclo de vida estable.",
          "Integración interna, algunas conexiones externas y controles básicos de modelos.",
          "APIs, Data Lake, MDM, MLOps/IAOps y monitorización de modelos en producción.",
          "Ecosistema interoperable con datos en tiempo real, colaboración público-privada y control operativo de IA.",
        ],
      },
      {
        id: "data_5",
        text: "¿La administración garantiza IA responsable, seguridad jurídica y soberanía tecnológica?",
        options: [
          "No hay enfoque claro.",
          "Controles básicos de privacidad y seguridad.",
          "Cumplimiento normativo, seguridad y privacidad definidos.",
          "IA responsable con EU AI Act, categorización de riesgos, XAI, trazabilidad, assessment ético y auditoría.",
          "IA gobernada con seguridad jurídica, soberanía tecnológica, RGPD y ENS por diseño.",
        ],
      },
    ],
    useCases: [
      "Data Lake tributario unificado",
      "Interoperabilidad con AEAT, Catastro, TGSS y Aduanas",
      "Datos en tiempo real",
      "Gestión del dato maestro (MDM)",
      "Oficina de IA",
      "XAI y assessment ético PIO",
      "EU AI Act y registro de sistemas de IA",
      "Auditorías de sesgo y trazabilidad",
      "Intercambio de datos con bancos y plataformas",
      "APIs con software contable y ERPs",
      "Ventanilla única interadministrativa",
      "Datos de plataformas digitales (DAC7 / OCDE)",
    ],
  },
  {
    id: "systems",
    number: "03",
    title: "Transformación Organizativa, de Procesos y Sistemas",
    subtitle: "Automatización agéntica, plataformas modernas, inspección predictiva e interoperabilidad real.",
    color: "#cb8e36",
    levels: [
      ["Process – Incipient", "Procesos principalmente manuales o reactivos, sistemas poco integrados y baja preparación organizativa para la transformación."],
      ["Process – Digitalized", "Existen procesos digitalizados y automatizaciones puntuales, pero la transformación no está integrada ni extendida de forma homogénea."],
      ["Process – Automated", "La administración cuenta con procesos digitalizados, automatizaciones relevantes y sistemas que empiezan a integrarse de forma más sólida."],
      ["Process – Intelligent", "Los procesos y sistemas incorporan analítica, IA o automatización avanzada, con equipos más preparados para trabajar bajo un modelo operativo transformado."],
      ["Process – Autonomous", "La administración opera con procesos altamente automatizados, sistemas modulares e interoperables, capacidades inteligentes y un modelo organizativo preparado para la mejora continua."],
    ],
    capabilities: ["Agentes IA", "Plataformas modulares", "Inspección predictiva", "Interoperabilidad E2E", "SAP TRM / Oracle PSRM", "Upskilling"],
    questions: [
      {
        id: "systems_1",
        text: "¿Cuál es el nivel de automatización de los procesos tributarios?",
        options: [
          "Procesos manuales, expedientes tradicionales y papel.",
          "Formularios digitales, e-notificaciones y RPA puntual.",
          "Procesos automatizados en fases estándar.",
          "Agentes IA apoyan expedientes o tareas extremo a extremo.",
          "Operación autónoma gobernada en procesos estándar.",
        ],
      },
      {
        id: "systems_2",
        text: "¿La administración ha modernizado su core, plataformas paquetizadas y sistemas satélite para operar como plataforma inteligente?",
        options: [
          "Sistemas legacy poco integrados.",
          "Digitalización parcial sobre sistemas existentes.",
          "APIs y módulos automáticos en algunos procesos sobre el core actual.",
          "Plataformas modulares e interoperables con capacidades IA y menor coste de evolución normativa.",
          "Core y sistemas satélite inteligentes, conectados, escalables y preparados para operación self-healing.",
        ],
      },
      {
        id: "systems_3",
        text: "¿Qué nivel de interoperabilidad existe entre procesos, sistemas y administraciones?",
        options: [
          "Procesos desconectados.",
          "Integración parcial entre sistemas internos.",
          "Interoperabilidad básica entre áreas y módulos.",
          "Integración E2E con sistemas internos/externos.",
          "Ventanilla única y coordinación automática entre administraciones y sistemas satélite.",
        ],
      },
      {
        id: "systems_4",
        text: "¿La administración utiliza IA o analítica para mejorar la operación?",
        options: [
          "No se utiliza.",
          "Casos exploratorios o pilotos aislados.",
          "Analítica o detección de anomalías en procesos concretos.",
          "Modelos predictivos para inspección, fraude o priorización.",
          "IA y agentes integrados en la operación diaria bajo gobierno.",
        ],
      },
      {
        id: "systems_5",
        text: "¿La organización está preparada para adoptar nuevas formas de trabajo y escalar la transformación?",
        options: [
          "Baja capacitación y resistencia al cambio.",
          "Formación puntual.",
          "Roles digitales y rediseño organizativo inicial.",
          "Upskilling, centro de excelencia, gobierno interdisciplinar y gestión del cambio.",
          "Talento, capacidades internas, cultura digital y cambio organizativo como palancas del valor tecnológico.",
        ],
      },
    ],
    useCases: [
      "Inspección predictiva",
      "Plataforma tributaria cloud-native",
      "SAP TRM / Oracle PSRM como base de escalado",
      "Gestión del fraude con IA",
      "Graph analytics + Computer Vision",
      "Interoperabilidad E2E",
      "Ventanilla única ciudadano-empresa",
      "Agentes IA en expedientes E2E",
      "Core y sistemas satélite inteligentes",
    ],
  },
];

const maturityScale = ["Inicial", "En Desarrollo", "Definido", "Avanzado", "Líder"];

const globalLevels = [
  ["Inicial", "La administración se encuentra en una fase reactiva, con procesos manuales, datos poco integrados y baja incorporación de IA. El foco debe estar en digitalización básica, calidad del dato y simplificación de procesos."],
  ["En Desarrollo", "La administración cuenta con avances digitales y automatizaciones puntuales, pero necesita consolidar capacidades, integrar datos y estructurar una hoja de ruta de IA con gobierno operativo."],
  ["Definido", "La administración dispone de bases digitales y de datos más sólidas. El siguiente paso es escalar la analítica, la interoperabilidad, los servicios proactivos y la Oficina de IA."],
  ["Avanzado", "La administración ya aplica IA, datos e interoperabilidad en ámbitos relevantes. Debe avanzar hacia gobierno integral, agentes inteligentes, MLOps/IAOps y transformación organizativa."],
  ["Líder", "La administración opera como plataforma tributaria inteligente: proactiva, gobernada, interoperable, automatizada, responsable y centrada en generar confianza."],
];

const technologies = [
  {
    title: "IA Generativa (GenAI)",
    text: "Redacción automática de resoluciones, asistentes tributarios para ciudadanos y funcionarios, síntesis de expedientes complejos.",
    reference: "GPT-4, Gemini y Claude aplicados en HMRC y ATO",
    color: "#22d3ee",
  },
  {
    title: "Agentes IA Autónomos",
    text: "Ejecución de expedientes E2E: el agente recopila, cruza datos, liquida y notifica sin intervención humana en casos estándar.",
    reference: "Agentforce y ServiceNow en gestión de trámites",
    color: "#14b8a6",
  },
  {
    title: "NLP & Comprensión Documental",
    text: "Análisis de consultas en lenguaje natural, clasificación de escritos y recursos, extracción de datos de documentos no estructurados.",
    reference: "SKAT Dinamarca usa NLP para atención multicanal",
    color: "#6485c1",
  },
  {
    title: "Computer Vision",
    text: "Verificación de justificantes, lectura de facturas en papel y detección de anomalías en documentación visual.",
    reference: "Catastro + IA en detección de obras no declaradas",
    color: "#cb8e36",
  },
  {
    title: "IA Predictiva & Analítica",
    text: "Modelos de riesgo fiscal, predicción de fraude, estimación de brecha tributaria y optimización del calendario de actuaciones.",
    reference: "ATO Australia: mejora en selección de casos",
    color: "#22d3ee",
  },
  {
    title: "Plataformas Cloud & APIs",
    text: "Arquitecturas modulares cloud-native con interoperabilidad garantizada para escalar capacidades sin detener la operación.",
    reference: "IRAS Singapur: API-first taxation ecosystem",
    color: "#14b8a6",
  },
];

const roadmap = [
  {
    horizon: "5 días",
    label: "Diagnóstico",
    actions: [
      "Auditoría de madurez digital: completar el formulario de autodiagnóstico.",
      "Mapear los 3 procesos más críticos para ciudadano y recaudación.",
      "Identificar quick wins de IA: detección de errores en declaraciones y NLP en atención.",
    ],
  },
  {
    horizon: "6 meses",
    label: "Transformación",
    actions: [
      "Piloto de asistente virtual tributario con NLP (GenAI + base de conocimiento propia).",
      "Data Lake tributario v1: integración de las principales fuentes internas.",
      "Modelo de gobernanza IA v1: Oficina de IA, roles, assessment ético (EU AI Act) y primer modelo predictivo de riesgo fiscal.",
    ],
  },
  {
    horizon: "3 años",
    label: "Evolución",
    actions: [
      "Declaración pre-rellenada para el 80% de contribuyentes con datos de terceros.",
      "Agentes IA gestionando expedientes completos dentro de marcos de gobernanza.",
      "Soberanía del dato: arquitectura cloud-native, interoperable y segura.",
    ],
  },
];

const benchmarks = [
  {
    name: "Dinamarca · SKAT",
    capabilities: "E-tax con tax assessment digital, datos preinformados y autoservicio para consulta/corrección.",
    level: "Líder",
    color: "#22d3ee",
  },
  {
    name: "Singapur · IRAS",
    capabilities: "No-Filing / Direct Notice of Assessment, Ask Jamie y APIs para software fiscal.",
    level: "Líder",
    color: "#14b8a6",
  },
  {
    name: "Australia · ATO",
    capabilities: "myTax con pre-fill desde empleadores, bancos y agencias; data matching y ML.",
    level: "Líder",
    color: "#cb8e36",
  },
  {
    name: "Reino Unido · HMRC",
    capabilities: "Making Tax Digital vía APIs y asistente Ask HMRC Online con lenguaje natural.",
    level: "Avanzado",
    color: "#6485c1",
  },
  {
    name: "Canadá · CRA",
    capabilities: "Chatbot GenAI 24/7 y expansión de servicios digitales de autoservicio.",
    level: "Avanzado",
    color: "#0072bc",
  },
  {
    name: "Países Bajos · Belastingdienst",
    capabilities: "Modernización ICT, gestión del dato y uso transparente de IA/algoritmos.",
    level: "Avanzado",
    color: "#14b8a6",
  },
];

const sharePointBatchEndpoint = String(window.SHAREPOINT_BATCH_ENDPOINT || "").trim();
const sharePointFolderUrl = String(window.SHAREPOINT_FOLDER_URL || "").trim();
const sharePointWorkbookName = String(window.SHAREPOINT_WORKBOOK_NAME || "Autodiagnostico_Tributario_IA_2030_Respuestas.xls").trim();
const resultRegistrationEndpoint = String(window.RESULT_REGISTRATION_ENDPOINT || sharePointBatchEndpoint || "").trim();
const resultNotificationRecipients = parseRecipients(
  window.RESULT_NOTIFICATION_RECIPIENTS || "daniela.perezhinestroza@nttdata.com,pol.badalbatllori@nttdata.com"
);

const state = {
  answers: {},
  data: {},
  generated: false,
  finalized: false,
};

const els = {
  axisCards: document.getElementById("axisCards"),
  technologyGrid: document.getElementById("technologyGrid"),
  basicDataForm: document.getElementById("basicDataForm"),
  questionnaire: document.getElementById("questionnaire"),
  progressPercent: document.getElementById("progressPercent"),
  progressCount: document.getElementById("progressCount"),
  progressBar: document.getElementById("progressBar"),
  liveScoreList: document.getElementById("liveScoreList"),
  generateButton: document.getElementById("generateButton"),
  resetButton: document.getElementById("resetButton"),
  exportPdfButton: document.getElementById("exportPdfButton"),
  exportButton: document.getElementById("exportButton"),
  batchStatus: document.getElementById("batchStatus"),
  radarChart: document.getElementById("radarChart"),
  chartLegend: document.getElementById("chartLegend"),
  globalResult: document.getElementById("globalResult"),
  axisResults: document.getElementById("axisResults"),
  roadmapGrid: document.getElementById("roadmapGrid"),
  usecaseGrid: document.getElementById("usecaseGrid"),
  benchmarkGrid: document.getElementById("benchmarkGrid"),
  toast: document.getElementById("toast"),
};

function removeKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    // The portal works without persistence if storage is blocked.
  }
}

function clearStoredAssessment() {
  removeKey("pti2030_answers");
  removeKey("pti2030_data");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function allQuestions() {
  return axes.flatMap((axis) => axis.questions.map((question) => ({ ...question, axisId: axis.id })));
}

function average(values) {
  const valid = values.filter(Number.isFinite);
  return valid.length ? valid.reduce((sum, value) => sum + value, 0) / valid.length : 0;
}

function formatScore(value) {
  return Number.isFinite(value) && value > 0 ? value.toFixed(1).replace(".", ",") : "0,0";
}

function getBandIndex(score) {
  if (score <= 1.8) return 0;
  if (score <= 2.6) return 1;
  if (score <= 3.4) return 2;
  if (score <= 4.2) return 3;
  return 4;
}

function axisLevel(axis, score) {
  const [name, description] = axis.levels[getBandIndex(score || 1)];
  return { name, description };
}

function globalLevel(score) {
  const [name, description] = globalLevels[getBandIndex(score || 1)];
  return { name, description };
}

function scores() {
  const axisScores = {};
  axes.forEach((axis) => {
    axisScores[axis.id] = average(axis.questions.map((question) => state.answers[question.id]).filter(Number.isFinite));
  });

  const completed = allQuestions().filter((question) => Number.isFinite(state.answers[question.id])).length;
  const total = allQuestions().length;
  const global = completed === total ? average(Object.values(axisScores)) : average(Object.values(axisScores).filter((score) => score > 0));
  return { axisScores, completed, total, global };
}

function parseRecipients(value) {
  const items = Array.isArray(value) ? value : String(value || "").split(/[;,]/);
  return items.map((item) => String(item).trim()).filter(isValidEmail);
}

function contactData() {
  return {
    respondentName: String(state.data.respondentName || "").trim(),
    organization: String(state.data.organization || "").trim(),
    respondentEmail: String(state.data.respondentEmail || "").trim(),
    adminName: String(state.data.adminName || "").trim(),
    adminType: String(state.data.adminType || "").trim(),
    assessmentDate: String(state.data.assessmentDate || "").trim(),
  };
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function contactValidation() {
  const contact = contactData();
  const missing = [];
  if (!contact.respondentName) missing.push("nombre y apellidos");
  if (!contact.organization) missing.push("organización");
  if (!contact.respondentEmail) missing.push("correo electrónico");
  if (contact.respondentEmail && !isValidEmail(contact.respondentEmail)) missing.push("correo electrónico válido");
  return { ok: missing.length === 0, missing, contact };
}

function setBatchStatus(message, kind = "") {
  if (!els.batchStatus) return;
  els.batchStatus.textContent = message;
  els.batchStatus.classList.toggle("is-success", kind === "success");
  els.batchStatus.classList.toggle("is-error", kind === "error");
}

function updateGenerateState() {
  const current = scores();
  const contact = contactValidation();
  els.generateButton.disabled = state.finalized || current.completed !== current.total || !contact.ok;

  if (state.finalized) {
    setBatchStatus("Registro completado. Cambia algún dato o respuesta para generar un nuevo registro.", "success");
  } else if (current.completed !== current.total) {
    setBatchStatus(`Responde las 15 preguntas para generar y registrar resultados.`);
  } else if (!contact.ok) {
    setBatchStatus(`Completa los datos de contacto: ${contact.missing.join(", ")}.`, "error");
  } else if (!state.generated) {
    setBatchStatus("Listo para generar resultados y enviar el informe por correo.", "");
  }
}

function answerRows() {
  return axes.flatMap((axis) =>
    axis.questions.map((question, index) => {
      const score = state.answers[question.id];
      const option = Number.isFinite(score) ? question.options[score - 1] : "";
      return {
        axisId: axis.id,
        axisNumber: axis.number,
        axisTitle: axis.title,
        questionNumber: `${axis.number}.${String(index + 1).padStart(2, "0")}`,
        questionId: question.id,
        question: question.text,
        score: Number.isFinite(score) ? score : "",
        maturity: Number.isFinite(score) ? maturityScale[score - 1] : "",
        answer: option || "",
      };
    })
  );
}

function buildBatchPayload() {
  const current = scores();
  const level = current.completed === current.total ? globalLevel(current.global) : { name: "Pendiente", description: "Diagnóstico no completado." };
  const contact = contactData();
  const submittedAt = new Date().toISOString();
  const axisResults = axes.map((axis) => {
    const score = current.axisScores[axis.id];
    const levelInfo = axisLevel(axis, score || 1);
    return {
      axisId: axis.id,
      axisNumber: axis.number,
      axisTitle: axis.title,
      score,
      scoreFormatted: formatScore(score),
      maturity: levelInfo.name,
      description: levelInfo.description,
    };
  });

  const payload = {
    schemaVersion: "pti2030-email-register-v1",
    submittedAt,
    delivery: {
      mode: "email-and-register",
      recipients: resultNotificationRecipients,
    },
    sharePoint: {
      folderUrl: sharePointFolderUrl,
      workbookName: sharePointWorkbookName,
      operation: "create-workbook-if-missing-then-append-row",
      worksheetName: "Respuestas",
      detailWorksheetName: "DetalleRespuestas",
    },
    contact,
    assessment: {
      title: "Autodiagnóstico de Madurez · Administraciones Tributarias Inteligentes 2030",
      completedQuestions: current.completed,
      totalQuestions: current.total,
      globalScore: current.global,
      globalScoreFormatted: formatScore(current.global),
      globalMaturity: level.name,
      globalDescription: level.description,
      interpretation: buildInterpretation(current),
    },
    axisResults,
    answers: answerRows(),
  };

  payload.row = buildRegisterRow(payload);

  const fallbackName = safeFileName(`${contact.organization || contact.adminName || "cliente"}_respaldo_autodiagnostico_tributario_ia_2030`);
  payload.excel = {
    fileName: `${fallbackName}.xls`,
    mimeType: "application/vnd.ms-excel",
    html: buildExcelHtml(payload),
  };

  payload.notification = buildNotification(payload);

  return payload;
}

function buildRegisterRow(payload) {
  const row = {
    submittedAt: payload.submittedAt,
    respondentName: payload.contact.respondentName,
    organization: payload.contact.organization,
    respondentEmail: payload.contact.respondentEmail,
    adminName: payload.contact.adminName,
    adminType: payload.contact.adminType,
    assessmentDate: payload.contact.assessmentDate,
    globalScore: payload.assessment.globalScoreFormatted,
    globalMaturity: payload.assessment.globalMaturity,
  };

  payload.axisResults.forEach((axis) => {
    row[`${axis.axisId}_score`] = axis.scoreFormatted;
    row[`${axis.axisId}_maturity`] = axis.maturity;
  });

  payload.answers.forEach((answer) => {
    row[`${answer.questionId}_score`] = answer.score;
    row[`${answer.questionId}_answer`] = answer.answer;
  });

  return row;
}

function safeFileName(value) {
  return String(value || "autodiagnostico")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 90);
}

function tableRows(rows) {
  return rows
    .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
    .join("");
}

function buildExcelHtml(payload) {
  const registerHeaders = Object.keys(payload.row);
  const registerRows = [registerHeaders, registerHeaders.map((key) => payload.row[key])];

  const contactRows = [
    ["Campo", "Valor"],
    ["Fecha de envío", payload.submittedAt],
    ["Nombre y apellidos", payload.contact.respondentName],
    ["Organización", payload.contact.organization],
    ["Correo electrónico", payload.contact.respondentEmail],
    ["Administración evaluada", payload.contact.adminName],
    ["Tipo de administración", payload.contact.adminType],
    ["Fecha del autodiagnóstico", payload.contact.assessmentDate],
  ];

  const summaryRows = [
    ["Indicador", "Valor"],
    ["Resultado global", payload.assessment.globalScoreFormatted],
    ["Madurez global", payload.assessment.globalMaturity],
    ["Lectura automática", payload.assessment.interpretation],
  ];

  const axisRows = [
    ["Eje", "Puntuación", "Madurez", "Descripción"],
    ...payload.axisResults.map((axis) => [axis.axisTitle, axis.scoreFormatted, axis.maturity, axis.description]),
  ];

  const answerTableRows = [
    ["Eje", "Número", "Pregunta", "Puntuación", "Nivel", "Respuesta seleccionada"],
    ...payload.answers.map((answer) => [answer.axisTitle, answer.questionNumber, answer.question, answer.score, answer.maturity, answer.answer]),
  ];

  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; }
          h1 { color: #0072bc; }
          h2 { margin-top: 24px; color: #0072bc; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 18px; }
          td { border: 1px solid #c9d3df; padding: 8px; vertical-align: top; }
          tr:first-child td { background: #0072bc; color: #fff; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(payload.assessment.title)}</h1>
        <h2>Registro para base de datos</h2>
        <table>${tableRows(registerRows)}</table>
        <h2>Información de contacto</h2>
        <table>${tableRows(contactRows)}</table>
        <h2>Resumen ejecutivo</h2>
        <table>${tableRows(summaryRows)}</table>
        <h2>Resultados por eje</h2>
        <table>${tableRows(axisRows)}</table>
        <h2>Respuestas del autodiagnóstico</h2>
        <table>${tableRows(answerTableRows)}</table>
      </body>
    </html>
  `;
}

function buildNotification(payload) {
  const recipients = resultNotificationRecipients.length
    ? resultNotificationRecipients
    : ["daniela.perezhinestroza@nttdata.com", "pol.badalbatllori@nttdata.com"];
  const organization = payload.contact.organization || payload.contact.adminName || "Organización sin identificar";
  const subject = `Autodiagnóstico PTI 2030 · ${organization} · ${payload.assessment.globalMaturity} (${payload.assessment.globalScoreFormatted})`;

  return {
    to: recipients,
    replyTo: payload.contact.respondentEmail,
    subject,
    text: buildNotificationText(payload),
    html: buildNotificationHtml(payload),
  };
}

function buildNotificationText(payload) {
  const axisLines = payload.axisResults.map(
    (axis) => `- ${axis.axisTitle}: ${axis.scoreFormatted} · ${axis.maturity}`
  );
  const answerLines = payload.answers.map(
    (answer) => `- ${answer.questionNumber} · ${answer.axisTitle}\n  Pregunta: ${answer.question}\n  Resultado: ${answer.score} · ${answer.maturity}\n  Respuesta: ${answer.answer}`
  );

  return [
    payload.assessment.title,
    "",
    "Datos de contacto",
    `Nombre y apellidos: ${payload.contact.respondentName}`,
    `Organización: ${payload.contact.organization}`,
    `Correo electrónico: ${payload.contact.respondentEmail}`,
    `Administración evaluada: ${payload.contact.adminName || "No indicada"}`,
    `Tipo de administración: ${payload.contact.adminType || "No indicado"}`,
    `Fecha del autodiagnóstico: ${payload.contact.assessmentDate || "No indicada"}`,
    `Fecha de envío: ${payload.submittedAt}`,
    "",
    "Resultado global",
    `${payload.assessment.globalScoreFormatted} · ${payload.assessment.globalMaturity}`,
    payload.assessment.globalDescription,
    payload.assessment.interpretation,
    "",
    "Resultados por eje",
    ...axisLines,
    "",
    "Respuestas",
    ...answerLines,
  ].join("\n");
}

function buildNotificationHtml(payload) {
  const contactRows = [
    ["Nombre y apellidos", payload.contact.respondentName],
    ["Organización", payload.contact.organization],
    ["Correo electrónico", payload.contact.respondentEmail],
    ["Administración evaluada", payload.contact.adminName || "No indicada"],
    ["Tipo de administración", payload.contact.adminType || "No indicado"],
    ["Fecha del autodiagnóstico", payload.contact.assessmentDate || "No indicada"],
    ["Fecha de envío", payload.submittedAt],
  ];
  const axisRows = [
    ["Eje", "Puntuación", "Nivel"],
    ...payload.axisResults.map((axis) => [axis.axisTitle, axis.scoreFormatted, axis.maturity]),
  ];
  const answerRows = [
    ["Eje", "Pregunta", "Puntuación", "Nivel", "Respuesta seleccionada"],
    ...payload.answers.map((answer) => [answer.axisTitle, answer.question, answer.score, answer.maturity, answer.answer]),
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#070f26">
      <h1 style="color:#0072bc;margin:0 0 12px">${escapeHtml(payload.assessment.title)}</h1>
      <p style="font-size:18px"><strong>Resultado global:</strong> ${escapeHtml(payload.assessment.globalScoreFormatted)} · ${escapeHtml(payload.assessment.globalMaturity)}</p>
      <p>${escapeHtml(payload.assessment.globalDescription)}</p>
      <p><strong>Lectura automática:</strong> ${escapeHtml(payload.assessment.interpretation)}</p>
      <h2 style="color:#0072bc">Datos de contacto</h2>
      <table style="border-collapse:collapse;width:100%">${tableRows(contactRows)}</table>
      <h2 style="color:#0072bc">Resultados por eje</h2>
      <table style="border-collapse:collapse;width:100%">${tableRows(axisRows)}</table>
      <h2 style="color:#0072bc">Respuestas completas</h2>
      <table style="border-collapse:collapse;width:100%">${tableRows(answerRows)}</table>
    </div>
  `.replaceAll("<td>", '<td style="border:1px solid #c9d3df;padding:8px;vertical-align:top">');
}

function downloadExcel(payload) {
  const blob = new Blob([payload.excel.html], { type: `${payload.excel.mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = payload.excel.fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function openMailClient(payload) {
  const maxBodyLength = 7500;
  const body =
    payload.notification.text.length > maxBodyLength
      ? `${payload.notification.text.slice(0, maxBodyLength)}\n\n[Mensaje recortado por límite del cliente de correo. El respaldo Excel descargado contiene el detalle completo.]`
      : payload.notification.text;
  const to = payload.notification.to.map(encodeURIComponent).join(",");
  const href = `mailto:${to}?subject=${encodeURIComponent(payload.notification.subject)}&body=${encodeURIComponent(body)}`;
  const link = document.createElement("a");
  link.href = href;
  document.body.appendChild(link);
  link.click();
  link.remove();
}

async function registerAssessmentResult() {
  const current = scores();
  const contact = contactValidation();

  if (current.completed !== current.total) {
    showToast("Completa las 15 preguntas antes de registrar.");
    return;
  }

  if (!contact.ok) {
    showToast(`Completa los datos de contacto: ${contact.missing.join(", ")}.`);
    document.getElementById("datos").scrollIntoView({ behavior: "smooth", block: "start" });
    setBatchStatus(`Faltan datos de contacto: ${contact.missing.join(", ")}.`, "error");
    return;
  }

  const payload = buildBatchPayload();
  setBatchStatus("Preparando informe y registro para envío...", "");

  if (!resultRegistrationEndpoint) {
    downloadExcel(payload);
    openMailClient(payload);
    state.finalized = false;
    updateGenerateState();
    setBatchStatus("Endpoint automático no configurado. Se ha abierto un correo pre-rellenado para Daniela y Pol y se ha descargado un respaldo Excel.", "error");
    showToast("Correo pre-rellenado y Excel de respaldo generados.");
    return;
  }

  try {
    setBatchStatus("Enviando informe por correo y registrando resultados...", "");
    const response = await fetch(resultRegistrationEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    state.finalized = true;
    updateGenerateState();
    setBatchStatus("Autodiagnóstico registrado y enviado por correo correctamente.", "success");
    showToast("Informe enviado y registrado.");
  } catch (error) {
    downloadExcel(payload);
    openMailClient(payload);
    state.finalized = false;
    updateGenerateState();
    setBatchStatus("No se pudo enviar automáticamente. Se abrió un correo pre-rellenado y se descargó un Excel de respaldo.", "error");
    showToast("Envío automático no completado.");
  }
}

function renderAxisCards() {
  els.axisCards.innerHTML = axes
    .map(
      (axis) => `
        <article class="axis-card" style="--axis-color: ${axis.color}">
          <div class="axis-card-head">
            <span class="axis-index">${axis.number}</span>
            <div>
              <h3>${escapeHtml(axis.title)}</h3>
              <p>${escapeHtml(axis.subtitle)}</p>
            </div>
          </div>
          <ul>
            ${axis.capabilities.map((capability) => `<li>${escapeHtml(capability)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderTechnologies() {
  els.technologyGrid.innerHTML = technologies
    .map(
      (technology) => `
        <article class="technology-card" style="--tech-color: ${technology.color}">
          <h3>${escapeHtml(technology.title)}</h3>
          <p>${escapeHtml(technology.text)}</p>
          <span>${escapeHtml(technology.reference)}</span>
        </article>
      `
    )
    .join("");
}

function renderDataForm() {
  if (!state.data.assessmentDate) {
    state.data.assessmentDate = new Date().toISOString().slice(0, 10);
  }

  els.basicDataForm.querySelectorAll("input, select").forEach((field) => {
    field.value = state.data[field.name] || "";
    field.addEventListener("input", () => {
      state.data[field.name] = field.value;
      state.finalized = false;
      setBatchStatus("Al generar resultados se preparará el envío del informe por correo electrónico.");
      if (state.generated) renderResults({ scroll: false });
      updateGenerateState();
    });
  });
}

function renderQuestionnaire() {
  els.questionnaire.innerHTML = axes
    .map(
      (axis) => `
        <section class="axis-section" id="axis-${axis.id}" style="--axis-color: ${axis.color}">
          <header class="axis-header">
            <span class="axis-number">${axis.number}</span>
            <div class="axis-title">
              <small>${escapeHtml(axis.subtitle)}</small>
              <h2>${escapeHtml(axis.title)}</h2>
            </div>
            <div class="axis-score-pill" id="axis-pill-${axis.id}">Pendiente</div>
          </header>
          <div class="question-list">
            ${axis.questions.map((question, index) => renderQuestion(axis, question, index)).join("")}
          </div>
        </section>
      `
    )
    .join("");

  els.questionnaire.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", onAnswer);
  });
}

function renderQuestion(axis, question, index) {
  return `
    <article class="question-block" id="question-${question.id}">
      <div class="question-title">
        <span class="question-index">${axis.number}.${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${escapeHtml(question.text)}</h3>
        </div>
      </div>
      <div class="option-grid" role="radiogroup" aria-label="${escapeHtml(question.text)}">
        ${question.options
          .map((option, optionIndex) => {
            const value = optionIndex + 1;
            const checked = state.answers[question.id] === value ? "checked" : "";
            const selected = state.answers[question.id] === value ? " is-selected" : "";
            return `
              <label class="option-card${selected}">
                <input type="radio" name="${question.id}" value="${value}" data-question="${question.id}" ${checked} />
                <strong>${value}. ${escapeHtml(maturityScale[optionIndex])}</strong>
                <span>${escapeHtml(option)}</span>
                <small>Puntuación ${value}</small>
              </label>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function onAnswer(event) {
  const input = event.currentTarget;
  const questionId = input.dataset.question;
  state.answers[questionId] = Number(input.value);
  state.generated = false;
  state.finalized = false;
  setBatchStatus("Al generar resultados se preparará el envío del informe por correo electrónico.");

  els.questionnaire.querySelectorAll(`input[data-question="${questionId}"]`).forEach((peer) => {
    peer.closest(".option-card").classList.toggle("is-selected", peer.checked);
  });

  updateLiveState();
  renderResultsPlaceholder();
}

function updateLiveState() {
  const current = scores();
  const percent = Math.round((current.completed / current.total) * 100);
  document.documentElement.style.setProperty("--progress", `${percent * 3.6}deg`);
  els.progressPercent.textContent = `${percent}%`;
  els.progressCount.textContent = `${current.completed} de ${current.total}`;
  els.progressBar.style.width = `${percent}%`;
  updateGenerateState();

  axes.forEach((axis) => {
    const score = current.axisScores[axis.id];
    const pill = document.getElementById(`axis-pill-${axis.id}`);
    if (pill) pill.textContent = score > 0 ? `${formatScore(score)} / 5` : "Pendiente";
  });

  els.liveScoreList.innerHTML = axes
    .map((axis) => {
      const score = current.axisScores[axis.id];
      const label = score > 0 ? `${formatScore(score)} · ${axisLevel(axis, score).name}` : "Pendiente";
      return `
        <div>
          <dt>${escapeHtml(axis.title)}</dt>
          <dd>${escapeHtml(label)}</dd>
        </div>
      `;
    })
    .join("");

  drawRadar(current.axisScores, state.generated && current.completed === current.total);
  renderLegend(state.generated && current.completed === current.total);
}

function renderResultsPlaceholder() {
  if (state.generated) return;
  els.globalResult.innerHTML = `<p class="empty-state">Completa las 15 preguntas para generar la puntuación global, el radar y el mensaje interpretativo.</p>`;
  els.axisResults.innerHTML = "";
}

function renderResults(options = {}) {
  const shouldScroll = options.scroll !== false;
  const current = scores();
  if (current.completed !== current.total) {
    showToast("Completa las 15 preguntas para generar resultados.");
    return false;
  }

  state.generated = true;
  state.finalized = false;
  const level = globalLevel(current.global);
  const adminName = state.data.adminName || "Administración evaluada";

  els.globalResult.innerHTML = `
    <div class="global-score">
      <div class="score-badge">${formatScore(current.global)}</div>
      <div>
        <p class="eyebrow">Resultado global</p>
        <h3>${escapeHtml(level.name)}</h3>
        <p>${escapeHtml(level.description)}</p>
      </div>
    </div>
    <span class="level-pill">${escapeHtml(adminName)}</span>
    <p><strong>Lectura automática:</strong> ${escapeHtml(buildInterpretation(current))}</p>
  `;

  els.axisResults.innerHTML = axes
    .map((axis) => {
      const score = current.axisScores[axis.id];
      const levelInfo = axisLevel(axis, score);
      return `
        <article class="axis-result-card" style="--axis-color: ${axis.color}">
          <header>
            <div>
              <p class="eyebrow">${escapeHtml(axis.number)}</p>
              <h3>${escapeHtml(axis.title)}</h3>
            </div>
            <strong>${formatScore(score)}</strong>
          </header>
          <span class="level-pill">${escapeHtml(levelInfo.name)}</span>
          <p>${escapeHtml(levelInfo.description)}</p>
        </article>
      `;
    })
    .join("");

  drawRadar(current.axisScores, true);
  renderLegend(true);
  renderRoadmap();
  renderUseCases();
  updateGenerateState();
  setBatchStatus("Resultados generados. Preparando envío del informe...", "");
  if (shouldScroll) document.getElementById("resultados").scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

async function generateAndRegisterResults() {
  const contact = contactValidation();
  if (!contact.ok) {
    showToast(`Completa los datos de contacto: ${contact.missing.join(", ")}.`);
    document.getElementById("datos").scrollIntoView({ behavior: "smooth", block: "start" });
    setBatchStatus(`Faltan datos de contacto: ${contact.missing.join(", ")}.`, "error");
    return;
  }

  const rendered = renderResults();
  if (!rendered) return;
  await registerAssessmentResult();
}

function buildInterpretation(current) {
  const ranking = axes.map((axis) => ({ axis, score: current.axisScores[axis.id] })).sort((a, b) => a.score - b.score);
  const weakest = ranking[0];
  const strongest = ranking[ranking.length - 1];
  return `El eje con mayor prioridad de mejora es ${weakest.axis.title} (${formatScore(weakest.score)}), mientras que la capacidad más consolidada es ${strongest.axis.title} (${formatScore(strongest.score)}). El roadmap debe concentrarse en cerrar esa brecha sin perder la coherencia entre dato, proceso y experiencia del contribuyente.`;
}

function drawRadar(axisScores, showUser) {
  const canvas = els.radarChart;
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(620, rect.width || 780);
  const height = Math.max(460, rect.height || 620);

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const center = { x: width / 2, y: height / 2 + 18 };
  const radius = Math.min(width, height) * 0.31;
  const points = axes.map((axis, index) => {
    const angle = -Math.PI / 2 + index * ((Math.PI * 2) / axes.length);
    return { axis, angle };
  });

  for (let level = 5; level >= 1; level -= 1) {
    const poly = points.map(({ angle }) => ({
      x: center.x + Math.cos(angle) * radius * (level / 5),
      y: center.y + Math.sin(angle) * radius * (level / 5),
    }));
    ctx.beginPath();
    poly.forEach((point, index) => (index === 0 ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y)));
    ctx.closePath();
    ctx.fillStyle = level % 2 === 0 ? "rgba(255,255,255,0.045)" : "rgba(255,255,255,0.025)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  points.forEach(({ axis, angle }) => {
    const end = {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius,
    };
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = "rgba(255,255,255,0.22)";
    ctx.stroke();

    const label = {
      x: center.x + Math.cos(angle) * (radius + 72),
      y: center.y + Math.sin(angle) * (radius + 54),
    };
    ctx.fillStyle = axis.color;
    ctx.font = "800 14px Aptos, Segoe UI, Arial, sans-serif";
    ctx.textAlign = label.x < center.x - 24 ? "right" : label.x > center.x + 24 ? "left" : "center";
    ctx.textBaseline = "middle";
    wrapText(ctx, axis.title, label.x, label.y, 165, 17);
  });

  [1, 2, 3, 4, 5].forEach((level) => {
    ctx.fillStyle = "rgba(255,255,255,0.58)";
    ctx.font = "700 11px Aptos, Segoe UI, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(String(level), center.x + 12, center.y - radius * (level / 5) + 4);
  });

  const leader = { taxpayer: 5, data: 5, systems: 5 };
  drawSeries(ctx, center, radius, points, leader, "rgba(203,142,54,0.95)", 1.7, false);

  if (showUser) {
    drawSeries(ctx, center, radius, points, axisScores, "#22d3ee", 3, true);
  }
}

function drawSeries(ctx, center, radius, points, data, color, lineWidth, fill) {
  const poly = points.map(({ axis, angle }) => {
    const value = Math.max(0, Math.min(5, data[axis.id] || 0));
    return {
      x: center.x + Math.cos(angle) * radius * (value / 5),
      y: center.y + Math.sin(angle) * radius * (value / 5),
    };
  });

  ctx.beginPath();
  poly.forEach((point, index) => (index === 0 ? ctx.moveTo(point.x, point.y) : ctx.lineTo(point.x, point.y)));
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = "rgba(34,211,238,0.18)";
    ctx.fill();
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();

  poly.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, fill ? 5 : 3.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#071027";
    ctx.stroke();
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  lines.push(line);
  const offset = -((lines.length - 1) * lineHeight) / 2;
  lines.forEach((item, index) => ctx.fillText(item, x, y + offset + index * lineHeight));
}

function renderLegend(showUser) {
  const items = [];
  if (showUser) items.push(["Resultado administración", "#22d3ee"]);
  items.push(["Nivel líder objetivo", "#cb8e36"]);
  els.chartLegend.innerHTML = items
    .map(
      ([label, color]) => `
        <span class="legend-item">
          <span class="legend-swatch" style="--color: ${color}"></span>
          ${escapeHtml(label)}
        </span>
      `
    )
    .join("");
}

function renderRoadmap() {
  els.roadmapGrid.innerHTML = roadmap
    .map(
      (block) => `
        <article class="roadmap-column">
          <h3>${escapeHtml(block.horizon)}<span>${escapeHtml(block.label)}</span></h3>
          <ul>
            ${block.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderUseCases() {
  els.usecaseGrid.innerHTML = axes
    .map(
      (axis) => `
        <article class="usecase-card" style="--axis-color: ${axis.color}">
          <h3>${escapeHtml(axis.title)}</h3>
          <p>Casos de uso prioritarios por eje.</p>
          <ul>
            ${axis.useCases.map((useCase) => `<li class="tag">${escapeHtml(useCase)}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderBenchmark() {
  els.benchmarkGrid.innerHTML = benchmarks
    .map(
      (item) => `
        <article class="benchmark-card" style="--benchmark-color: ${item.color}">
          <strong>${escapeHtml(item.name)}</strong>
          <p>${escapeHtml(item.capabilities)}</p>
          <span class="benchmark-level">${escapeHtml(item.level)}</span>
        </article>
      `
    )
    .join("");
}

function buildResultsText() {
  const current = scores();
  const level = current.completed === current.total ? globalLevel(current.global) : { name: "Pendiente", description: "Diagnóstico no completado." };
  const dataLines = [
    "Autodiagnóstico de Madurez · Administraciones Tributarias Inteligentes 2030",
    "",
    `Nombre y apellidos: ${state.data.respondentName || "No indicado"}`,
    `Organización: ${state.data.organization || "No indicada"}`,
    `Correo electrónico: ${state.data.respondentEmail || "No indicado"}`,
    `Administración: ${state.data.adminName || "No indicada"}`,
    `Tipo: ${state.data.adminType || "No indicado"}`,
    `Fecha: ${state.data.assessmentDate || "No indicada"}`,
    "",
    `Resultado global: ${formatScore(current.global)} · ${level.name}`,
    level.description,
    "",
    "Resultados por eje:",
    ...axes.map((axis) => {
      const score = current.axisScores[axis.id];
      return `- ${axis.title}: ${formatScore(score)} · ${axisLevel(axis, score || 1).name}`;
    }),
    "",
    "Roadmap recomendado:",
    "Acciones por horizonte:",
    ...roadmap.flatMap((block) => [`${block.horizon} · ${block.label}`, ...block.actions.map((action) => `- ${action}`)]),
    "",
    "Casos de uso por eje:",
    ...axes.flatMap((axis) => [`${axis.title}:`, ...axis.useCases.map((useCase) => `- ${useCase}`)]),
    "",
    "Tecnologías habilitadoras:",
    ...technologies.map((technology) => `- ${technology.title}: ${technology.text}`),
  ];
  return dataLines.join("\n");
}

function exportPdf() {
  const current = scores();
  if (current.completed !== current.total) {
    showToast("Completa las 15 preguntas antes de exportar el PDF.");
    return;
  }

  if (!state.generated) {
    renderResults();
  }

  window.setTimeout(() => window.print(), 250);
}

function resetAssessment() {
  state.answers = {};
  state.data = { assessmentDate: new Date().toISOString().slice(0, 10) };
  state.generated = false;
  state.finalized = false;
  clearStoredAssessment();
  renderDataForm();
  renderQuestionnaire();
  updateLiveState();
  renderResultsPlaceholder();
  setBatchStatus("Al generar resultados se preparará el envío del informe por correo electrónico.");
  updateGenerateState();
  showToast("Diagnóstico reiniciado.");
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => els.toast.classList.remove("is-visible"), 2400);
}

function init() {
  clearStoredAssessment();
  renderAxisCards();
  renderTechnologies();
  renderDataForm();
  renderQuestionnaire();
  renderRoadmap();
  renderUseCases();
  renderBenchmark();
  updateLiveState();
  renderResultsPlaceholder();

  els.generateButton.addEventListener("click", generateAndRegisterResults);
  els.resetButton.addEventListener("click", resetAssessment);
  els.exportPdfButton.addEventListener("click", exportPdf);
  els.exportButton.addEventListener("click", exportPdf);
  window.addEventListener("resize", () => drawRadar(scores().axisScores, state.generated));
}

init();
